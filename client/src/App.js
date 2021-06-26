import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userAction';

import { AppGlobalStyles } from './global.styles';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return(
      <div>
        <AppGlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route exact path='/signin' render={() => 
              currentUser ? (<Redirect to='/' />) : (<VerificationPage />)
            } 
          />
        </Switch>
      </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);