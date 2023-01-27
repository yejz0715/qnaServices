import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const BoardListQ = () => {
  const list = useSelector((state) => state.qnaReducer);
  const listQ = list.questions;

  // 추가) 1. 질문 객체에 답변 내용을 추가하거나 (update) 액션 - 질문이 수정되는 액션)
  // 2. 답변 목록도 가져와서 뿌려주기
  return (
    <BorderContainer>
      {listQ &&
        listQ.map((item) => (
          <BorderBox key={item.id}>
            <ListText> {item.id}</ListText>
            <ListText>{item.nickName}</ListText>
            <ListText>{item.text}</ListText>
            <ListText>
              {item.result === false ? "답변 준비중" : "답변 완료"}
            </ListText>
            {item.result ? (
              <details>
                <summary>답변 내용</summary>
                {/* 추가) 답변 내용 보여주기 */}
                <span>가져온 답변 내용을 보여줌</span>
              </details>
            ) : null}
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
export default BoardListQ;
