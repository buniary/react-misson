import './App.css';
import add from './component/Math';
import { Header } from './component/Header';
import { Footer } from './component/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <p>Welcome to my shop</p>
        {add(10,20)}
        </main>
      <Footer/>
    </>
  )
}

export default App
