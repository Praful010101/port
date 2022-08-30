import React, {useState, useEffect} from 'react';
import './App.scss';
import PulseLoader from "react-spinners/PulseLoader";
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2440);
  }, []);
  
  return (
    <div>
      {loading ? (
        <PulseLoader color={"#ffffff"} loading={loading} size={10} />
      ) : (
      <>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      </>
      )}
    </div>
  );
}

export default App;
