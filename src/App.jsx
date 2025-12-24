import './App.css'
// 기본내보내기
import myadd, { PI } from './components/Math'
// 이름 내보내기
import { add, multiply } from './components/Math2'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import styles from './productCard.module.css'
import myImg from './unsplash.jpg'
import { GoArchive } from "react-icons/go";


function ProductCard(props) {
  console.log(props);
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  )
}
const InputBox = () => {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    alert(text + '님 반갑습니다');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        value={text}
        id="name"
        onChange={(e) => { setText(e.target.value) }}
      />
      <button>입력</button>
    </form>
  )
}
function Greeting({ isLogin }) {
  console.log(isLogin);
  /*
  if(isLogin) {
    return <>
    <p>환영합니다.</p>
    <a href="">로그아웃</a>
    </>
  } else {
    return <p>비밀번호가 일치하지 않습니다.</p>
  }
    */
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
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (password === ADMIN_PW) {
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
        value={password}
        onChange={e => { setPassword(e.target.value) }}
      />
      <button onClick={handleLogin}>로그인</button>
      <Greeting isLogin={isLogin} />
    </div>
  )
}

function App() {
  const product = { title: 'LG labtop', price: 2000000 };
  const items = [
    { id: 1, title: 'LG labtop', price: 2000000 },
    { id: 2, title: 'SM labtop', price: 1500000 },
    { id: 3, title: 'MAC labtop', price: 2400000 }
  ]
  const forList = [];
  for (let i = 0; i < items.length; i++) {
    forList.push(<ProductCard key={items[i].id} title={items[i].title} price={items[i].price} />)
  }

  const forOfList = [];
  for (let item of items) {
    forOfList.push(<ProductCard key={item.id} title={item.title} price={item.price} />)
  }

  const mapList = items.map(item=> <ProductCard key={item.id} title={item.title} price={item.price} />);
  const data = useState(0);
  console.log(data);
  /* const count = data[0];
   const setCount = data[1]; */

  const [count, setCount] = useState(0);
  /*
  const title = product.title;
  const price = product.price;
  */
  //const {title:a, price:b} = product;
  const { title: t, price: p } = product;
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount(prev => prev + 1);
  }
  // const handleClick() {}
  const handleClick = () => {
    alert('클릭됨');
  }

  return (
    <>
      <Header />
      <hr />
      <main>
        <img src="/vite.svg" alt="logo" />
        <p>Welcome to my Shop<GoArchive /></p>
        <img src={myImg} alt="" />
        {myadd(10, 20)}<br />
        {add(10, 20)}<br />
        {multiply(10, 20)}
        {PI}
        <hr />
        {/* <ProductCard title={a} price={b} /> */}
        {/* <ProductCard title={t} price={p} /> */}
        {/* <ProductCard title="SM labtop" price="1,200,000" /> */}
        <h4>for 반복문</h4>
        {forList}
        <h4>for of 반복문</h4>
        {forOfList}
        <h4>map 메서드</h4>
        {mapList}
        <hr />
        {count}
        {/* <button onClick={()=>{setCount(count+1)}}>+1</button> */}
        <button onClick={handleIncrement}>+1</button>
        <h2>이벤트</h2>
        <button onClick={handleClick}>클릭</button>

        <InputBox />

        <hr />
        <h2>조건부 렌더링</h2>
        <LoginBox />
      </main>
      <hr />
      <Footer />

    </>
  )
}

export default App
