
    // only fire this script inside the main window
    const inIframe = () => window.self !== window.top;
    if (inIframe()) return;
    
export const init = () => {

    // Keep this list updates with all the event types
    const events = [
        "navigation",
        "blockNavigation",
        "registerActionButton",
        "mounted", "notification",
        "navigation",
        "backdrop",
        "header",
        "export"
    ]

    // Listen for messages
    addEventListener('simplicateMessage', e => {
        const {action, payload, type} = e.detail;
        console.log(`%c[${type.toUpperCase()}: ${action}]\n`, 'color: orange; font-weight: bold;', payload);
    })


    // fire simplicateLoaded when simplicate is loaded
    const root = document.querySelector("#root");
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                dispatchEvent(new CustomEvent("simplicateLoaded"));
                observer.disconnect();
                break;
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(root, {attributes: true, childList: true, subtree: true });


    // Listen for actual messages
    addEventListener("simplicateLoaded", e => {

        // Listen for messages from the messageBus
        events.forEach(action => {
            window.messageBus.subscribe(action, payload => {
                dispatchEvent(new CustomEvent('simplicateMessage', {
                    detail: { action, payload, type: 'message' }
                }))
            })
        });

        // Listen for messages from the iframe
        addEventListener('simplicateIframeMessage', e => {
            const {action: type, params: actions} = e.detail;
            actions.forEach(({action, payload}) => {
                dispatchEvent(new CustomEvent('simplicateMessage', {
                    detail: { action, payload, type: 'iframe' }
                }))
            });
        })

    });
  }