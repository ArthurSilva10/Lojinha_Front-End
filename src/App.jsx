import './App.css'
import { CardLoader } from './Components/Card/CardLoader'
import { Header } from './Components/Header/Header'

function App() {

  return (
    <>
      <div className="App">
        <Header/>
        <h1 id='title'>Produtos disponíveis</h1>
        <div className="grid">
          <CardLoader/>
        </div>
      </div>
    </>
  )
}

export default App
