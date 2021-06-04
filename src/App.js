import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/Firebase';
import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelector';
import { selectCollectionsForPreview } from './redux/shop/shopSelector';


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
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
        addCollectionAndDocuments('collections', collectionsArray);
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
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<VerificationPage />)} 
        />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
