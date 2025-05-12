import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';
import Workpage from './pages/workpage';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/work" element={<Workpage />} />
      </Routes>
    </>
  )
}

export default App
