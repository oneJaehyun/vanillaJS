import { createStore } from "./redux.js";

function reducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return { ...state };
    }
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({ type: "INC" }); // { counter: 1 }
store.dispatch({ type: "INC" }); // { counter: 2 }