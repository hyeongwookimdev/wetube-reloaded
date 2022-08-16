//db.js
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");
// url 다음에는 짓고 싶은 db이름을 지으면 됨
// 지금 wetube라는 db가 생성된 것은 아님
// 이 파일을 서버에서 사용하기 위해서는 이 파일 자체를 import 해야 함

const db = mongoose.connection;
// 연결의 성공 여부나 에러를 console.log로 출력하게 하기 위해 작성
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
// DB의 connection이 열린다는 뜻은, DB에 연결된다는 뜻
// on은 이벤트를 여러번 계속 발생시킬 수 있음
// once는 한번만 발생
