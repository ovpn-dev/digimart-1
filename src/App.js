import Options from './Components/Options'
import Home from './Components/Home'
import Register from './Components/Register'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/options' element={<Options />} />
        <Route path='/' element = {<Home />} />
        <Route path='/register' element = {<Register />} />
      </Routes>
    </div>
  );
}

export default App;
