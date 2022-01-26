import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from './components/Contact';
import Report from './components/Report';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/*Main/Contact/Report Componenst */}
          <Route path='/*' exact element={<Main />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/report' element={<Report />}/>
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}
export default App;
