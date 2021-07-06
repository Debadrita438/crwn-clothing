import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userAction';

import { AppGlobalStyles } from './global.styles';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const VerificationPage = lazy(() => import('./pages/VerificationPage/VerificationPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={ HomePage } />
              <Route path='/shop' component={ ShopPage } />
              <Route exact path='/checkout' component={ CheckoutPage } />
              <Route exact path='/signin' render={() => 
                  currentUser ? (<Redirect to='/' />) : (<VerificationPage />)
                } 
                />
              </Suspense>
            </ErrorBoundary>
        </Switch>
      </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);