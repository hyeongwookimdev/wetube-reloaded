// init.js
import "./db";
import "./models/videos";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

/*
많은 양의 모델을 import해야해서 파일을 분리해서 import 관리
1. init.js 생성
  - 이 파일은 db와 video를 import 해주고 우리 application을 작동시킬 것
2. 그래서 impirt db, model, app.listen 코드를 여기로 옮길 것
3. app을 정의해줘야 함. server.js에서 configure된 app을 import함.
  - 당연히 sever.js에서 app export
4. server.js는 app을 export할 뿐 작동시키지는 않기 때문에 nodemon의 관찰 경로를 package.json에서 바꿔줘야 함
  - "scripts": {
      "dev": "nodemon --exec babel-node src/init.js"
    },
*/
