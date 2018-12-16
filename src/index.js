import createElement from './create-element';

let el = createElement('div', {
    defaultTrue: true,
    defaultBlue: 'blue'
});

console.log('EL', el);
el.state.defaultTrue = false;
el.state.defaultTrue = false;
el.state.defaultBlue = 'green';
el.state.defaultBlue = 'red';
