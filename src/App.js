import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041e38';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "warning");
    }
  }

  return (
    <>
    <Router>
      <Navbar title='Text Editor' mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<TextForm heading='Enter the text' mode = {mode}/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
