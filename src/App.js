import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Sidebar from './components/Sidebar';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import NewProjectPage from './pages/NewProjectPage';
import ClientDetailsPage from './pages/ClientDetailsPage';
import ManagerClientPage from './pages/ManagerClientPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="App">
       <div>
        <Router>
          <AuthProvider>
        <div className='container-fluid'>
          <div className='row base'>
            <div className='sidebar col-3 shadow'>
              <Sidebar/>
            </div>
            <div className="main col mt-5">
              <div className='container-fluid'>
                  <PrivateRoute component={DashboardPage} path="/" exact/>
                  <PrivateRoute component={HomePage} path="/home"exact/>
                  <PrivateRoute component={ProjectPage} path="/project"exact/>
                  <PrivateRoute component={ProjectDetailsPage} path="/project-details"exact/>
                  <PrivateRoute component={NewProjectPage} path="/new-project"exact/>
                  <PrivateRoute component={ManagerClientPage} path="/mc" exact/>
                  <PrivateRoute component={ClientDetailsPage} path="/clnt" exact/>
                  <Route component={LoginPage} path="/login" exact/>
                  <Route component={RegisterPage} path="/register"/>
              </div>
            </div>
          </div>
        </div>
        </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
