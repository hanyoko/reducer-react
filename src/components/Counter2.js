import React, { useReducer } from 'react';
function reducer(state, action){
    //action에 따라 상태를 업데이트 시키는 조건문
    switch(action.type) {
            //객체.key
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        default:
            return state;
    }
}
const Counter2 = () => {
    const [number, dispatch] = useReducer(reducer,0);
                //reducer를 실행시키기 위해 필요하다.
    const onIncrease = () => {
        dispatch({
            type: 'increase'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'decrease'
        })
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter2;