import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, addQuestion } from "../modules/board";
import BoardButton from "../components/BoardButton/";
import BoardInput from "../components/BoardInput";
import BoardListQ from "../components/BoardListQ";
import * as S from "./style";
import BoardListA from "../components/BoardListA";
const QnaBoard = () => {
  const boardId = useSelector((state) => state.qnaReducer.boardId);
  const [qnaNickname, setQnaNickname] = useState("");
  const [qnaText, setQnaText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const dispatch = useDispatch();

  const handleNickname = (e) => {
    setQnaNickname(e.target.value);
  };
  const handleQ = (e) => {
    setQnaText(e.target.value);
  };
  const handleAnswer = (e) => {
    setAnswerText(e.target.value);
  };

  //등록
  const handleQAdd = () => {
    const question = {
      nickName: qnaNickname,
      text: qnaText,
      result: false,
    };
    dispatch(addQuestion(question));
  };

  const handleAnswerAdd = () => {
    const answer = {
      text: answerText,
      questionId: boardId,
    };
    dispatch(addAnswer(answer));
  };

  //취소
  const handleQReset = () => {
    setQnaNickname("");
    setQnaText("");
  };
  const handleAnswerReset = () => {
    setAnswerText("");
  };

  return (
    <S.BoardWrap>
      <S.BoardContainer>
        <S.HeaderTitle>질문</S.HeaderTitle>
        <BoardInput
          label="닉네임"
          onChange={handleNickname}
          value={qnaNickname}
        />
        <BoardInput label="문의할 내용" onChange={handleQ} value={qnaText} />
        <S.ButtonBox>
          <BoardButton name="등록" onClick={handleQAdd} />
          <BoardButton name="취소" onClick={handleQReset} />
        </S.ButtonBox>
        <S.ListTitle>질문 리스트</S.ListTitle>
        <BoardListQ />
      </S.BoardContainer>

      <S.BoardContainer>
        <S.HeaderTitle>답변</S.HeaderTitle>
        {/* <BoardInput label="id" /> */}
        <S.labelText>질문 id</S.labelText>
        <S.BoardInput type="text" value={boardId} readOnly />
        <BoardInput
          label="답변할 내용"
          onChange={handleAnswer}
          value={answerText}
        />
        <S.ButtonBox>
          <BoardButton name="등록" onClick={handleAnswerAdd} />
          <BoardButton name="취소" onClick={handleAnswerReset} />
        </S.ButtonBox>
        <S.ListTitle>답변 리스트</S.ListTitle>
        <BoardListA />
      </S.BoardContainer>
    </S.BoardWrap>
  );
};

export default QnaBoard;
