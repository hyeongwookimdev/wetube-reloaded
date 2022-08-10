import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);
/*
  정규식을 적용한 경우
  videoRouter.get("/upload", upload);가 제일 끝에 와도 문제가 없다.
  ":id"를 지워도 되지만, 이름을 붙여야 req.params.id로 불러올 수 있다.
*/
/*
정규식(regular expressions)
: 문자열로부터 특정 정보를 추출해내는 방법
: JS는 "/" 두개
/ab*cd
=== abcd, abxcd, abRANDOMcd, ab123cd
/ab+cd
=== abcd, abbcd, abbbcd
/ab?cd
=== acd, abcd
/ab(cd)?e
=== abe, abced
/(nico\w+)
=== nicolas, nicomano
/(\d+)
=== 숫자만 선택 
*/

export default videoRouter;
