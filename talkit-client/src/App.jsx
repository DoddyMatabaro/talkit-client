import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Chat from './screens/Chat'
import Login from './screens/Login'
import Signup from './screens/Signup'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={ <Signup /> }/>
      <Route path='/login' element={ <Login /> }/>
      <Route path='/' element={ <Chat/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
