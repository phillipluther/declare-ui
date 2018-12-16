import {debounce, noop} from './utils';

export default function(defaultState = {}, onChange = noop) {
    let state = Object.assign({}, defaultState);
    let previousState;
    let changeHandler = debounce(function() {
        onChange(state, previousState);
        console.log('Change:', state, previousState);
    });

    return new Proxy(state, {
        set: (obj, prop, val) => {
            previousState = Object.assign({}, obj);
            obj[prop] = val;

            let previousVal = previousState[prop];

            if ((typeof previousVal !== 'undefined') && (val !== previousVal)) {
                changeHandler();
            }

            return true;
        }
    });
}
