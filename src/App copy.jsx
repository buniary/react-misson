import './App.css';
import add from './components/Math';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
