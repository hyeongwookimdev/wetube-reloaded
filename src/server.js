import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

/*
  HTML 리턴하는 두 가지 옵션
  1. res.send("")에 HTML의 문자열을 써서 보내면 브라우저가 HTML을 실행함
    그런데 우리의 html은 많이 커서. 이 방법은 적절하지 않음.
    긴급상황에서는 쓸 수도 있다.
  2. Pug
    : 템플릿 엔진(Template Engine)이다.
    템플릿을 이용해서 뷰를 만드는 것을 돕는다.

  퍼그 셋업
  1. npm i pug 를 터미널에 입력
  2. Express에게 이제부터 사용할 뷰 엔진은 pug라고 말하기.
  : app은 뷰엔진을 설정할 수 있음. 우리는 퍼그를 뷰엔진으로 사용할 것. 
  : 퍼그는 퍼그 파일을 일반 html파일로 변환시켜준다.
  : app.set("view engine", "pug"); 이렇게 sever.js에 입력
  3. 실제로 pug 파일을 생성하기
  : views는 어플리케이션의 뷰에 대한 디렉토리나 그 배열을 담고 있음.
  : views 안에서는 뷰나 템플릿이나 html이나 같은 것이다.
  : 뷰는 유저가 보는 대상을 말한다.
  : 우리는 views에 대한 세팅을 고칠것
  : 기본적으로 Express는 views 폴더 안에 있는 파일을 찾는다.
  : Express가 views를 찾는 기본 방법은 process.cwd() + '/views'
  : 따라서 src 폴더에 views라는 새로운 폴더를 만들어준다.
  : 그리고 home.pug를 만든다.
  : 만든 pug파일을 res.render("뷰이름")을 사용해서 연결한다.
  : 이렇게만 하면 아래와 같은 에러가 나온다.
  : Failed to lookup view "home" in views directory "/Users/brotherwoo/wetube/views"
  : express가 views 디렉토리에서 home이라는 파일을 찾아봤지만 실패했다는 뜻이다.
  : ../wetube/views가 아니라, ../wetube/src/views로 경로를 설정하고 싶음
  : console.log(process.cwd())로 경로 확인
  : cwd(현재 작업 디렉토리)는 서버를 기동하는 파일의 위치에 따라 결정됨
  : 서버를 기동하는 것은 /document/wetube 폴더의 package.json임
  : package.json이 node.js를 실행하고 있음
  : 그래서 /document/wetube가 cwd가 되는 것.
  : 디폴트 값을 바꾸면 고칠 수 있음, views의 설정을 바꾸면 됨.
  : app.set("views", process.cwd() + "/src/views"); 이 코드 추가
*/
