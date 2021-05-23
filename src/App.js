import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import { auth, createUserProfileDocument } from './firebase/Firebase';
import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelector';


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<VerificationPage />)} 
        />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
