// Import necessary components and styles
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Frame from './components/Frame';
import Employee from './components/Employee';
import Client from './components/Client';
import SignUp from './components/signUp'; 
import ChangePwd from './components/changePwd'; // Fix the import statement

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Frame />} />
        <Route path='/Employee' element={<Employee />} />
        <Route path='/Client' element={<Client />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/changePwd' element={<ChangePwd />} /> {/* Fix the component name */}
      </Routes>
    </div>
  );
}

export default App;
