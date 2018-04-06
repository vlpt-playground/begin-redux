import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입을 정의해줍니다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수를 만듭니다.
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  number: 0
};


// immer 를 사용하여 값을 수정하는 리듀서입니다.
export default handleActions({
  [INCREMENT]: (state, action) => {
    return produce(state, draft => {
      draft.number++;
    });
  },
  // { } 를 따로 열지 않고 바로 리턴하면 이런 형식입니다.
  [DECREMENT]: (state, action) => produce(state, draft => {
    draft.number--;
  }),
}, initialState);