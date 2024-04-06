import './App.css';
import Dashboard from './Pages/Dashboard';
import MyActivities from './Pages/MyActivities';
import Tasks from './Pages/Tasks';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import SideNavBar from './components/sidenavbar/sideNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <SideNavBar />
        <Routes>
          <Route path='/' component={Dashboard} />
          <Route path='/myactivities' component={MyActivities} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/profile' component={Profile} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/register' element='Register' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
