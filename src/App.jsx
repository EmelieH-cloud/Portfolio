import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Workpage from './pages/workpage';
import Contactpage from './pages/contactpage';
import Educationpage from './pages/educationpage';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Workpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/education" element={<Educationpage />} />
      </Routes>
    </>
  )
}

export default App
