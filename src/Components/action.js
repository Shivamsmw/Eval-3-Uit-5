export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const RESET_COUNT = "RESET_COUNT";
export const ADD_TODO = "ADD_TODO";

export const incCount = payload => ({ type: INC_COUNT, payload });

export const decCount = payload => ({ type: DEC_COUNT, payload });

export const resetCount = () => ({ type: RESET_COUNT });
export const addTodo = payload => ({ type: ADD_TODO, payload });
