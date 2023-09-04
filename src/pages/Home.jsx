import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodos } from '../modules/todo';
import styled from 'styled-components';

import Box from '../components/Box';

export default function Home() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [id, setId] = useState(3);
  const dispatch = useDispatch();

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputBody = (e) => {
    setBody(e.target.value);
  };

  const data = useSelector((state) => {
    return state.todo;
  });
  console.log('data->', data);

  const createTodo = () => {
    const newTodo = {
      id: id,
      title,
      body,
      isDone: false,
    };
    console.log(newTodo);
    dispatch(createTodos(newTodo));
    setTitle(' ');
    setBody(' ');
    setId(id + 1);
  };

  return (
    <Body>
      <h2>My Todo List</h2>

      <InputLayout>
        <InputBox>
          제목
          <Input type='text' value={title} onChange={inputTitle} />
        </InputBox>

        <InputBox>
          내용
          <Input type='text' value={body} onChange={inputBody} />
        </InputBox>
        <Plus onClick={createTodo}>추가하기</Plus>
      </InputLayout>

      <div>
        <h2>Working...🔥</h2>
        <BoxLayout>
          {data.map((item) => {
            if (item.isDone === false)
              return (
                <Box
                  id={item.id}
                  item={item}
                  title={item.title}
                  body={item.body}
                  isDone={item.isDone}
                />
              );
          })}
        </BoxLayout>
      </div>
      <div>
        <h2>Done!!❤️‍🔥</h2>
        <BoxLayout>
          {data.map((item) => {
            if (item.isDone === true)
              return (
                <Box
                  id={item.id}
                  item={item}
                  title={item.title}
                  body={item.body}
                />
              );
          })}
        </BoxLayout>
      </div>
    </Body>
  );
}

const BoxLayout = styled.div`
  display: flex;
  gap: 20px;
`;

const Body = styled.div`
  min-width: 800px;
  max-width: 1220px;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
`;

const InputLayout = styled.div`
  min-width: 800px;
  max-width: 1220px;
  background-color: #eeeeee;
  border-radius: 8px;
  display: flex;
  height: 70px;
  align-items: center;
`;

const InputBox = styled.div`
  line-height: 70px;
  padding: 0 10px;
  margin-right: 5px;
`;
const Input = styled.input`
  width: 150px;
  height: 28px;
  border-radius: 8px;
  border: none;
  margin-left: 5px;
`;

const Plus = styled.button`
  width: 70px;
  height: 30px;
  background-color: #008080;
  border: none;
  color: white;
  border-radius: 8px;
  margin-left:20px
`;
