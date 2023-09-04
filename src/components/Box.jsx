import { useSelector, useDispatch } from 'react-redux';
import todo, { deleteTodos, updateTodos } from '../modules/todo';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Box({ id, item, title, body, isDone }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTodo = (id) => {
    const deleteData = data.filter((item) => item.id !== id);
    // console.log('ddata', deleteData);
    dispatch(deleteTodos(deleteData));
  };

  const updateTodo = (id) => {
    const update = data.map((item) => {
      if (id === item.id) return { ...item, isDone: true };
      return item;
    });
    // console.log('update', update);
    dispatch(updateTodos(update));
  };

  const cancelTodo = (id) => {
    const cancel = data.map((item) => {
      if (id === item.id) return { ...item, isDone: false };
      return item;
    });
    console.log('취소', cancel);
    dispatch(updateTodos(cancel));
  };

  const data = useSelector((state) => {
    return state.todo;
  });

  return (
    <>
      <Todo key={id}>
        <DetailBtn onClick={() => navigate(`/detail/${item.id}`)}>
          상세보기
        </DetailBtn>
        <br />
        <Contents>
          <h3>{title}</h3>
          <br />
          {body}
        </Contents>

        <BtnLayout>
          <Btn color='red' onClick={() => deleteTodo(id)}>
            삭제
          </Btn>
          {isDone === false ? (
            <Btn color='green' onClick={() => updateTodo(id)}>
              완료
            </Btn>
          ) : (
            <Btn color='green' onClick={() => cancelTodo(id)}>
              취소
            </Btn>
          )}
        </BtnLayout>
      </Todo>
    </>
  );
}

const Todo = styled.div`
  width: 300px;
  height: 230px;
  border: 3px solid green;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const BtnLayout = styled.div`
  display: flex;
  margin-top: 18px;
  margin: 15px auto;
  gap: 15px;
`;
const Btn = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 8px;
  border: 2px solid ${({ color }) => color};
  background-color: transparent;
  cursor: pointer;
`;

const DetailBtn = styled.button`
  all: unset;
  font-size: 16px;
  cursor: pointer;
  color: blue;
`;

const Contents = styled.div``;
