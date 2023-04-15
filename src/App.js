
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className='container'>
       <Navbar />
       <Education/>
       <Skills/>
       <Contact/>
       <Experience/>
       <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    
    </div>
  );
}


export default App;
