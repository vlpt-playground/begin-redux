import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo 아이템에 들어갈 고유 값 입니다


// 그냥 일반 객체, 내부에는 일반 배열이 들어갑니다.
const initialState = {
  input: '',
  todos: []
};

export default handleActions({
  [CHANGE_INPUT]: (state, action) => produce(state, draft => {
    draft.input = action.payload;
  }),
  [INSERT]: (state, { payload: text }) => {
    const item = {
      id: id++,
      text,
      checked: false
    };
    return produce(state, (draft) => {
      draft.todos.push(item); // 그냥 push!
    });
  },
  [TOGGLE]: (state, { payload: id }) => {
    // 인덱스 가져와서
    const index = state.todos.findIndex(item => item.id === id);
    return produce(state, (draft) => {
      // 그냥 반전시키기!
      draft.todos[index].checked = !draft.todos[index].checked;
    });
  },
  [REMOVE]: (state, { payload: id }) => {
    // id 값을 가진 index 를 찾아서 지웁니다.
    const index = state.todos.findIndex(item => item.id === id);
    return produce(state, (draft) => {
      draft.todos.splice(index, 1); // 지울때는 splice 를 사용합니다.
    });
  }
}, initialState);