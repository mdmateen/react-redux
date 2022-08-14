
const initialValue = 50;

const numberChange = (state = initialValue, action) => {

    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default numberChange;