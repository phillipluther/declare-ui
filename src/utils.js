
export function debounce(func, delay = 0) {
    let timeoutHandle;

    return function(...args) {
        let context = this;
        let toCall = function() {
            func.apply(context, args);
        }

        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(toCall, delay);
    };
}

export const noop = () => undefined;
