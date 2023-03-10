import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import DisplayAll from './components/DisplayAl';
import CreateRecipe from './components/CreateRecipe';
import OneRecipe from './components/OneRecpe';
import EditRecipe from './components/EditRecipe';
import NavBar from './components/NavBar';
import LogReg from './components/LogReg';
import ProfilePage from './components/ProfilePage';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/loginReg' element={<LogReg currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path='/recipes' element={<DisplayAll/>} />
          <Route path='/recipes/create' element={<CreateRecipe />} />
          <Route path="/recipes/:id" element={<OneRecipe/>} />
          <Route path="/recipes/:id/edit" element={< EditRecipe/>} />
          <Route path="/recipes/myPage" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
