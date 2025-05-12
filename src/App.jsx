import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  )
}

export default App
