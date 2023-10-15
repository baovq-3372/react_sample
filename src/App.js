import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import UserLayout from './components/layouts/UserLayout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NewOrder from './components/Order/NewOrder'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserLayout component={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order/tour/:tourId' element={<NewOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
