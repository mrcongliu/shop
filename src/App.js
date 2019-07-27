import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  // We want to close subscriptions when component is unmount,
  // because we don't want memory leaks
  unsubscribleFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        /*set currentUser to null when the return value is null */
        setCurrentUser(userAuth);
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/*get currentUser for preventing reSignIn purpose */
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
