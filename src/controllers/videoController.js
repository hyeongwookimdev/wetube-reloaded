export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
/*
퍼그 파일에 JS변수 정의하기
: 퍼그 파일에 #{pageTitle}과 같이 JS 변수를 사용하고 싶은 상황이라면
: 퍼그 파일(템플릿)로 변수를 보내야 한다.
: 그 템플릿을 렌더링하고 있는 것은 컨트롤러.js이다.
: 그래서 컨트롤러.js에서 해당 템플릿을 렌더링하고 있는 res.render()를 찾고
: res.render("home", { pageTitle: "Home" }); 이렇게 입력
: res.render("뷰(퍼그 파일)이름", { 변수이름: 값 }); 이것과 같은 의미
*/
