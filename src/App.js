import './App.css';
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://i2.wp.com/sprout1012.com/wp-content/uploads/2019/11/fist-951091_1280.jpg?fit=1024%2C678&ssl=1",
  },
  scissor: {
    name: "Scissor",
    img: "https://media.istockphoto.com/photos/woman-holding-tailors-scissors-isolated-on-white-closeup-picture-id1329468293?b=1&k=20&m=1329468293&s=170667a&w=0&h=MHEYFry0Wd4HwN8xqOaUQwRnEP9UThf_AC05cL8nM9E=",
  },
  paper: {
    name: "Paper",
    img: "https://img.hankyung.com/photo/202205/BF.30060885.1.jpg",
  },
}
function App() {
  const play = (userChoice) => {
    console.log("선택",userChoice)
  }
    return (
      <div>
        <div className='main'>
          <Box title="You"/>
          <Box title="Computer"/>
        </div>
        <div className='main'>
           <button onClick={() => play("scissor")}>SCISSORS</button>
           <button onClick={() => play("rock")}>ROCK</button>
           <button onClick={() => play("paper")}>PAPER</button> 
        </div>
        </div>  
  );
  /* onClick은 콜백 함수의 형태로 넣어주어야 한다. */
}

export default App;

/* 
1. 박스를 두 개 그린다.(사용자, 사진, 결과표시가 들어간다.) 
2. 가위, 바위, 보 버튼이 있다. 
3. 버튼을 클릭하면 클릭한 갑시 박스에 보인다. 
4. 컴퓨터는 랜덤으로 아이템이 선택된다. 
5. 3번과 4번의 결과를 가지고 승패를 가린다. 
6. 5번의 결과에 따라 박스 테두리 컬러가 바뀐다. (이기면 그린, 지면 레드, 비기면 블랙)
*/
/* 
  - 이벤트 처리하기 
      1. 기존에 HTML에서 이벤트를 처리할 때는 함수를 문자열 형태로 전달해주었다. 
        <button onClick="active()">
          액티브
        </button>

      2. 리엑트에서는 문자열이 아닌 함수를 받아서 이벤트를 실행한다. 
        <button onClick = {active}>
          액티브
        </button>

      3. onClick 안에서 HTML에 전달해 준 것처럼 active() 라고 전달해주면, 이는 함수를 호출(실행)하는 문장이기 때문에 
         이벤트가 발생하지 않았는데도 렌더링 하면 바로 호출(실행) 되어 버린다. 따라서 함수를 콜백의 형태로 전달해 주는 거싱 중요하다.

      4. 전달해 줄 매개변수가 있는 경우
        <button onClick = {() => active()}>
          액티브
        </button>
        와 같은 형식으로 콜백함수의 형태로 작성해야 한다. 

      5. 참고 문서 : https://ko.reactjs.org/docs/handling-eveents.html
*/