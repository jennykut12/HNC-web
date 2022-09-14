import React from 'react';
import './App.css';
import Dashboard from './Screens/Dashboard';
import Login from './Screens/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadScreen from './Screens/UploadScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import Submitted from './Screens/Submitted';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/'  element={<Login />}>
          </Route>
          <Route exact path= '/dashboard'  element={<Dashboard />}>
          </Route>
          <Route path= '/uploadScreen'  element={<UploadScreen />}>
          </Route>
          <Route path= '/submitted'  element={<Submitted />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
