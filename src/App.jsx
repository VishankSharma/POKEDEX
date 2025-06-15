import Pokedex from './components/pokedex/pokedex'
import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from "react-router-dom";
function App() {


  return (
    <div className="pokedex-wrapper">
      <h1 className="pokedex-heading"><Link to='/'>pokedex</Link></h1>
    <CustomRoutes/>
    </div>
  )
}

export default App
