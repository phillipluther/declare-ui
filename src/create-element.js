import createState from './create-state';

export default (nodeName = 'div', defaultState = {}) => {
    const self = {
        el: document.createElement(nodeName),
        state: createState(defaultState)
    };

    return self;
};
