import { configureStore } from "@reduxjs/toolkit";
import { qnaReducer } from "../modules/board";
export default configureStore({ reducer: { qnaReducer } });
