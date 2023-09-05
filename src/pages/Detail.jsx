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
      <DetailLayout>
        <Box2>
          id:{foundData.id}
          <BackBtn onClick={goBack}>이전으로</BackBtn>
          <hr />
          <b>{foundData.title}</b>
          <br />
          <p>{foundData.body}</p>
          <br />
        </Box2>
      </DetailLayout>
    </>
  );
}

const Box2 = styled.div`
  border: 3px solid grey;
  border-radius: 5px;
  width: 400px;
  height: 200px;
  font-size: 20px;
`;

const BackBtn = styled.button`
  all: unset;
  font-size: 16px;
  cursor: pointer;
  margin-left: 340px;
`;

const DetailLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 280px;
`;
