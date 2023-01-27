import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoardId } from "../../modules/board";
import styled from "styled-components";
const BoardListA = () => {
  const list = useSelector((state) => state.qnaReducer);

  // 수정) 데이터 가공 필요
  // filter로 result === false 인 질문 목록
  const listQ = list.questions;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(setBoardId(id));
  };

  return (
    <BorderContainer>
      {listQ &&
        listQ.map((item) => (
          <BorderBox key={item.id} onClick={() => handleClick(item.id)}>
            <ListText> {item.id}</ListText>
            <ListText> {item.nickName}</ListText>
            <ListText>{item.text}</ListText>
            <ListText>
              {item.result === false ? "답변 준비중" : "답변 완료"}
            </ListText>
          </BorderBox>
        ))}
    </BorderContainer>
  );
};

const BorderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4fff3;
  padding: 1rem;
`;
const BorderBox = styled.div`
  background-color: #f9dfdf;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const ListText = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
`;

export default BoardListA;
