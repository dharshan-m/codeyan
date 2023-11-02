import logo from './logo.svg';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const Navigate = useNavigate();

  const data= useEffect(() => {
        const timer = setTimeout(() => Navigate('/login'), 6000);
        return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <h1 className='h1title'>
        Codeyan.
      </h1>
    </div>
  );
}

export default App;
