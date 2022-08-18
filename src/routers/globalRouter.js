import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
/*
export default는 이름을 바꿀 수 있지만
각각의 변수를 export할 경우 실제 이름을 그대로 써야한다.
*/

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
