import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/Firebase';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import { setCurrentUser } from './redux/user/userAction';


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
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
          <Route exact path='/signin' component={ VerificationPage } />
        </Switch>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
