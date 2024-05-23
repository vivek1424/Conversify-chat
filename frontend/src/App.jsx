import './index.css'
import './App.css'

import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Home from './pages/home/Home.jsx';
import LogoutButton from './components/sidebar/LogoutButton.jsx';

function App() {
  
  return (
    <>
    <div className="p-4  h-screen flex items-center justify-center ">
     
     <Home/>
    </div>
    </>

  )
  
}

export default App;
