import { log } from "./utils";

// only fire this script inside the main window
const inIframe = () => window.self !== window.top;

export const init = () => {

    if (inIframe()) return;

    // Keep this list updates with all the event types
    const events = [
        "navigation",
        "blockNavigation",
        "registerActionButton",
        "mounted", 
        "notification",
        "navigation",
        "backdrop",
        "header",
        "export",
        "endpoint",
        "endpointResult",
        "response"
    ]

    // Listen for messages
    addEventListener('simplicateMessage', (e: Event) => {
        const detail = (e as CustomEvent<{ action: string; payload: unknown; type: string }>).detail;
        const {action, payload, type} = detail;
        log(`${type}: "${action}":\n`, payload);
    })


    // fire simplicateLoaded when simplicate is loaded
    const root = document.querySelector("#root");
    const callback: MutationCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                dispatchEvent(new CustomEvent("simplicateLoaded"));
                observer.disconnect();
                break;
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(root!, {attributes: true, childList: true, subtree: true });


    // Listen for actual messages
    addEventListener("simplicateLoaded", () => {
        // Listen for messages from the messageBus
        type MessageBus = {
            subscribe: (action: string, callback: (payload: unknown) => void) => void;
        };
        const messageBus = (window as typeof window & { messageBus: MessageBus }).messageBus;
        events.forEach(action => {
            messageBus.subscribe(action, (payload: unknown) => {
                dispatchEvent(new CustomEvent('simplicateMessage', {
                    detail: { action, payload, type: 'legacy-react' }
                }))
            })
        });

        // Listen for messages from the iframe
        addEventListener('simplicateIframeMessage', (e: Event) => {
            type IframeMessageDetail = {
                action: string;
                params: Array<{ action: string; payload: unknown }>;
            };
            const detail = (e as CustomEvent<IframeMessageDetail>).detail;
            const { params: actions } = detail;
            actions.forEach(({ action, payload }) => {
                dispatchEvent(new CustomEvent('simplicateMessage', {
                    detail: { action, payload, type: "iframe" }
                }))
            });
        })
    });
  }