/**
 * Created by ndmac on 16/8/31.
 */

import { combineReducers } from 'redux';

const defaultState = {
};

export function testReducer(state = defaultState, action) {

    let newState = { ...state };

    for (let key in action.obj) {
        if (typeof(action.obj[key]) !== 'undefined')
        {
            newState[key] = action.obj[key];
        }
    }

    return newState;
}

export default combineReducers({
    testReducer
});