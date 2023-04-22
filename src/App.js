import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Add from './add';
import { Edit } from './edit';
import { View } from './view';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View/>} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>

  )


}

export default App;
