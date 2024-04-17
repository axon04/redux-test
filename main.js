const valueEl = document.getElementById('value')
import * as Redux from 'https://cdn.jsdelivr.net/npm/redux@5.0.1/dist/redux.legacy-esm.js'
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);
const render = function () {
    valueEl.innerHTML = store.getState().toString();
}

render();

store.subscribe(render);

document.getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch({ type: 'INCREMENT' })
    });

document.getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch({ type: 'DECREMENT' })
    });

document.getElementById('incrementIfOdd')
    .addEventListener('click', function () {
        if (store.getState() % 2 !== 0) {
            store.dispatch({ type: 'INCREMENT' })
        }
    });

document.getElementById('incrementAsync')
    .addEventListener('click', function () {
        setTimeout(function () {
            store.dispatch({ type: 'INCREMENT' })
        }, 1000)
    });
/**
 * action = each button will have the section and question number. clicking the specific button wil pass that 
 *          to the reducer.
 * reducer = display the particular question based on action
 * 
 * 
 */