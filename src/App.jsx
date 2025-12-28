import './App.css';
import myadd, { PI } from './components/Math';
import { add, multiply } from './components/Math2';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Card } from './components/Card';

function ProductCard(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  )
}

const InputBox = () => {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    alert(`${text}님 반값습니다`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">이름</label>
      <input
        type="text"
        value={text}
        id="username"
        onChange={(e) => { setText(e.target.value) }}
      />
      <button>입력</button>
    </form>
  )
}

function Greeting({ isLogin }) {
  if (isLogin) {
    return (
      <>
        <p>환영합니다.</p>
        <a href="">로그아웃</a>
      </>
    )
  }
  return <p>비밀번호가 일치하지 않습니다.</p>
}

function LoginBox() {
  const ADMIN_PW = '1234';
  const [passwd, setPasswd] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    if (passwd === ADMIN_PW) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }
  return (
    <div>
      <h3>관리자 로그인</h3>
      <input
        type="password"
        vlaue={passwd}
        onChange={e => { setPasswd(e.target.value) }}
      />
      <button onClick={handleLogin}>로그인</button>
      <Greeting isLogin={isLogin} />
    </div>
  )
}

function App() {
  const product = { title: 'LG 노트북', price: 2000000 };
  const items = [
    { id: 1, title: 'LG노트북', price: 2000000 },
    { id: 2, title: '삼성노트북', price: 1700000 },
    { id: 3, title: '맥북', price: 3500000 }
  ]
  const forList = [];
  for (let i = 0; i < items.length; i++) {
    forList.push(<ProductCard key={items[i].id} title={items[i].title} price={items[i].price} />)
  }

  const forOfList = [];
  for (let item of items) {
    forOfList.push(<ProductCard key={item.id} title={item.title} price={item.price} />)
  }

  // const mapList = items.map((items)=> {return <ProductCard key={items.id} title={items.title} price={items.price} />});
  const mapList = items.map(item => <ProductCard key={item.id} title={item.title} price={item.price} />)


  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }

  const handleClick = () => {
    alert('클릭됨')
  }

  return (
    <>
      <Header />
      <hr />
      <main>
        <p>Welcome to my shop</p>
        {myadd(10, 20)}&ensp;
        {add(10, 20)}&ensp;
        {multiply(10, 20)}&ensp;
        {PI}&ensp;

        <hr />
        {/* <ProductCard title={t} price={p} /> */}
        {/* <ProductCard title="삼성" price="1,500,000"/> */}
        {/* {productList} */}
        <h4>for 반복문 출력</h4>
        {forList}
        <h4>for of 반복문 출력</h4>
        {forOfList}
        <h4>map함수 반복문 출력</h4>
        {mapList}
        <hr />
        {count}&ensp;
        {/* <button onClick={()=>{setCount(count+1)}}>+1</button> */}
        <button onClick={handleIncrement}>+1</button>
        <hr />
        <h2>이벤트</h2>
        <button onClick={handleClick}>클릭</button>
        <InputBox />
        <hr />
        <h2>조건부 렌더링</h2>
        <LoginBox />
        <hr/>
        <Card/>

      </main>
      <hr />
      <Footer />
    </>
  )
}

export default App
