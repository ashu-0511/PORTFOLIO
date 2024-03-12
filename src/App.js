import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Project from './Project';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter basename='/PORTFOLIO' >
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path='/PORTFOLIO' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div >
    </BrowserRouter >

  );
}

export default App;
