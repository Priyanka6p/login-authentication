import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

function App() {

  let email = localStorage.getItem('email');
  console.log(email);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={email? <Home /> : <LoginForm/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;