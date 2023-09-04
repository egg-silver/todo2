const CREATE_TODO = 'todo/CREATE_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const UPDATE_TODO = 'todo/UPDATE_TODO';
const READ_TODO = 'todo/READ_TODO';

export const createTodos = (payload) => {
  return { type: CREATE_TODO, payload };
};
export const deleteTodos = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const updateTodos = (payload) => {
  return { type: UPDATE_TODO, payload };
};
export const readTodos = (payload) => {
  return { type: READ_TODO, payload };
};

const initialState = [
  {
    id: 1,
    title: '리액트 강의보기',
    body: '챕터 1부터 챕터 12까지 학습',
    isDone: false,
  },
  {
    id: 2,
    title: '점심 먹기',
    body: '점심 뭐먹지..?',
    isDone: true,
  },
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          body: action.payload.body,
          isDone: action.payload.isDone,
        },
      ];
    case DELETE_TODO:
      return [...action.payload];
    case UPDATE_TODO:
      return [...action.payload];
    default:
      return state;
  }
};

export default todo;
