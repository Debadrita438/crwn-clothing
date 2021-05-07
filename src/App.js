import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/Firebase';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
          <Route exact path='/signin' component={ VerificationPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
