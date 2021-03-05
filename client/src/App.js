import Auth from './Components/Auth/Auth'
import {Home} from './Components/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Navigation} from './Components/Home/Navigation/Navigation'
import {SideBar} from './Components/Dashboard/SideBar/SideBar'
import {DashboardHome} from './Components/Dashboard/DashboardHome'
import {PersonalInfoManager} from './Components/Dashboard/PersonalInfoManager/PersonalInfoManager'
import {LoginManager} from './Components/Dashboard/LoginManager/LoginManager'
import {NewCreditCard} from './Components/Dashboard/CreditCardManager/NewCreditCard'
function App() {
  return (
    <Router >
      <Navigation/>
      <Switch>
          <Route path = '/dashboard' exact = {true}>{/* After the user clicks the dashboard link, it opens the dashboard page */}
              <div className = "dashboard-divider">
                <SideBar />{/*Displays to the suer dthe sideBar containg Manage Personal Information, Login Details, Credit Card Information, Shipping Address */}
                <DashboardHome/>
              </div>
          </Route>
          <Route path = '/dashboard/add-new-credit-card' exact = {true}>{/* After the user clicks the dashboard link, it opens the dashboard page */}
              <div className = "dashboard-divider">
                <SideBar />{/*Displays to the suer dthe sideBar containg Manage Personal Information, Login Details, Credit Card Information, Shipping Address */}
                <NewCreditCard/>
              </div>
          </Route>
          <Route path = '/dashboard/update-login-details' exact = {true}>{/* After the user clicks the dashboard link, it opens the dashboard page */}
              <div className = "dashboard-divider">
                <SideBar />{/*Displays to the suer dthe sideBar containg Manage Personal Information, Login Details, Credit Card Information, Shipping Address */}
                <LoginManager/>
              </div>
          </Route>
          <Route path = '/dashboard/update-info' exact = {true}>{/* After the user clicks the dashboard link, it opens the dashboard page */}
              <div className = "dashboard-divider">
                <SideBar />{/*Displays to the suer dthe sideBar containg Manage Personal Information, Login Details, Credit Card Information, Shipping Address */}
                <PersonalInfoManager/>
              </div>
          </Route>
          <Route path = '/auth' exact = {true}>
              <Auth/>
          </Route>
          <Route path = '/' exact = {true}>
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
