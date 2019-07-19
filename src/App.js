import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  // We want to close subscriptions when component is unmount,
  // because we don't want memory leaks
  unsubscribleFromAuth = null;

  componentDidMount() {
    // the onAuthStateChanged subscription that is always open,
    // as long as the component has been mounted
    // Remember, this function works on backend!!!
    // Send a query to firebase.
    // Because it's an API call, it's async.
    this.unsubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        /* use userRef to check whether our data has been updated */
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
        /*set currentUser to null when the return value is null */
        this.setState({ currentUser: userAuth });
      }
    });
  }

  // close subscriptions
  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }

  render() {
    return (
      <div>
        {/* Tell header the state of the user, so it can display the signin/signout button. */}
        {/* currentUser={this.state.currentUser} is removed after redux being implemented */}
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
