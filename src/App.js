import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//style imports
import "./App.css";

//component imports
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddVideo from "./pages/AddVideo";
import ProfileContentView from "./pages/ProfileContentView";
import ViewConnections from "./pages/ViewConnections";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import ViewVideo from "./pages/ViewVideo";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";

//service imports
import { login, signup, logout, getCurrentUser } from "./services/authService";

function App() {
  const [user, setUser] = useState({
    logedIn: false,
  });

  const [utility, setUtility] = useState({
    loading: false,
  });

  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
    openLogin: false,
    role: "0",
  });

  const openLoginHandler = () => {
    setLoginDetails((prvs) => {
      return {
        ...prvs,
        openLogin: true,
      };
    });
  };

  const changeLoginDetailHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginDetails((prvs) => ({
      ...prvs,
      [key]: value,
    }));
  };

  const closeLoginHandler = () => {
    setLoginDetails((prvs) => {
      return {
        ...prvs,
        openLogin: false,
      };
    });
    setUtility((prvs) => {
      return {
        ...prvs,
        loading: false,
      };
    });
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    setUtility((prvs) => {
      return {
        ...prvs,
        loading: true,
      };
    });
    try {
      let usr = await login(
        loginDetails.email,
        loginDetails.role,
        loginDetails.password
      );
      if (usr.accessToken) {
        setUser((prvs) => {
          return {
            ...prvs,
            logedIn: true,
            ...usr,
          };
        });
        setLoginDetails({
          openLogin: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setUtility((prvs) => {
      return {
        ...prvs,
        loading: false,
      };
    });
  };

  const submitSignupHandler = async (e) => {
    e.preventDefault();
    setUtility((prvs) => {
      return {
        ...prvs,
        loading: true,
      };
    });
    let msj = await signup(
      loginDetails.name,
      loginDetails.email,
      loginDetails.role,
      loginDetails.password
    );
    setLoginDetails({
      name: "",
      email: "",
      password: "",
      openLogin: false,
      role: "0",
    });
    setUtility((prvs) => {
      return {
        ...prvs,
        loading: false,
      };
    });
  };

  useEffect(() => {
    let usr = getCurrentUser();
    console.log(usr);
    setUser((prvs) => {
      if (usr.accessToken) {
        return {
          ...prvs,
          ...usr,
          logedIn: true,
        };
      } else {
        return {
          ...prvs,
          logedIn: false,
        };
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar
        Category={true}
        Searchbar={true}
        Logedin={user?.logedIn}
        Notification={true}
        AddVideo={false}
        user={user}
        logIn={openLoginHandler}
        logout={logout}
      />
      <Login
        closeLoginHandler={closeLoginHandler}
        loginDetails={loginDetails}
        submitLogin={submitLoginHandler}
        submitSignup={submitSignupHandler}
        changeDetail={changeLoginDetailHandler}
        loading={utility.loading}
      />
      <div className="pageContent">
        {console.log(user.logedIn)}

        <Switch>
          <Route exact path="/">
            <Home signUp logIn={openLoginHandler} logedIn={user.logedIn} />
          </Route>
          <Route exact path="/profile/:id/content">
            <ProfileContentView />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/videos/:id">
            <ViewVideo />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>

          <Route exact path="/myconnections">
            <ViewConnections />
          </Route>

          {user.logedIn ? (
            <>
              <Route exact path="/myprofile">
                <Profile ownProfile />
              </Route>
              <Route exact path="/uploadvideo">
                <AddVideo />
              </Route>
            </>
          ) : (
            <></>
          )}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
