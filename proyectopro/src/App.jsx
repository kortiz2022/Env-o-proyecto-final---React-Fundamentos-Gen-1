import './App.css'
import NavMenu from "./Component/NavMenu/NavMenu";
import NewsData from './Component/NewsData/NewsData';

function App() {


  return (
    <div className="App">
      <div className="container mx-auto max-w-screen-xl py-4">
        <NavMenu/>
        <NewsData/>
      </div>
    </div>
  )
}

export default App
