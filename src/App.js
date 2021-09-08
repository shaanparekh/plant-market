import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

import WithAuth from './hoc/withAuth';

import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sell from './pages/Sell';
import ProductDetails from './pages/ProductDetails';
import './default.scss';

const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
              id: snapshot.id,
               ...snapshot.data()
          }))
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      authListener();
    };

  }, []);    

    return (
      <div className="App">
        <Switch>
          <Route exact path ="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route exact path="/search" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
          <Route path="/search/:filterType" render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )} />
          <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )} />
          <Route path ="/login" 
            render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )} />
            <Route path ="/dashboard" 
            render={() => (
              <WithAuth>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </WithAuth>
            )} />
            <Route path="/sell" 
            render={() => (
            <WithAuth>
              <AdminLayout>
                <Sell />
              </AdminLayout>
            </WithAuth>
        )} />
        </Switch>
      </div>
    );
  }

export default App;
