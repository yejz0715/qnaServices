//import { createSlice } from "@reduxjs/toolkit";

const ADD_QUESTION = "ADD_QUESTION";
const ADD_ANSWER = "ADD_ANSWER";
const SET_BOARD_ID = "SET_BOARD_ID";

let QNum = 1;
let ANum = 1;

const initState = {
  questions: [
    {
      id: 1,
      nickName: "테스트 사용자",
      text: "문의글 입니다!",
      result: false,
      answerContent: "",
    },
    {
      id: 2,
      nickName: "테스트 사용자2",
      text: "문의글 입니다!22",
      result: true,
      answerContent: "답변글 입니다!22",
    },
  ],
  answers: [
    {
      id: 1,
      questionId: 2,
      text: "답변글 입니다!22",
    },
  ],
  boardId: "",
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    payload: {
      id: QNum++,
      nickName: question.nickName,
      text: question.text,
      result: false,
    },
  };
};
export const addAnswer = ({ text, questionId }) => {
  return {
    type: ADD_ANSWER,
    payload: {
      id: ANum++,
      text: text,
      questionId: questionId,
    },
  };
};
export const setBoardId = (boardId) => {
  return {
    type: SET_BOARD_ID,
    payload: {
      boardId: boardId,
    },
  };
};

export function qnaReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat({
          id: payload.id,
          nickName: payload.nickName,
          text: payload.text,
          result: payload.result,
        }),
      };
    case ADD_ANSWER:
      return {
        ...state,
        answers: state.answers.concat({
          id: payload.id,
          text: payload.text,
        }),
      };
    case SET_BOARD_ID:
      return {
        ...state,
        boardId: payload.boardId,
      };
    default:
      return { ...state };
  }
}

// export const qnaSlice = createSlice({
//   name: "qnaBoard",
//   initialState,
//   reducers: {
//     addQuestion(state, { payload }) {
//       state.push({
//         id: payload.id,
//         nickName: payload.nickName,
//         text: payload.text,
//       });
//     },
//     addAnswer(state, { payload }) {
//       state.push({
//         id: payload.id,
//         questionId: payload.id,
//         text: payload.text,
//       });
//     },
//     questionList() {},
//     answerList() {},
//   },
// });
// export const { addQuestion, addAnswer, questionList, answerList } =
//   qnaSlice.actions;
// export default qnaSlice.reducer;
