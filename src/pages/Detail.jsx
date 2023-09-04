import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.todo;
  });

  const foundData = data.find((item) => {
    return item.id === Number(params.id);
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Box2>
        id:{foundData.id}
        <BackBtn onClick={goBack}>이전으로</BackBtn>
        <hr />
        <b>{foundData.title}</b>
        <br />
        {foundData.body}
        <br />
      </Box2>
    </>
  );
}

const Box2 = styled.div`
  border: 3px solid grey;
  border-radius: 5px;
  width: 200px;
  height: 150px;
`;

const BackBtn = styled.button`
  font-size: 16px;
`;
