import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const loginToApp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill the complete form.");
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profileURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const dispatch = useDispatch();

  const register = () => {
    if (!name || !email || !password) {
      return alert("Please fill the complete form.");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profileURL,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profileURL,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
        alt="linkedin"
      />

      <form>
        <input
          type="text"
          placeholder="Full Name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Profile URL (optional)"
          type="text"
          value={profileURL}
          onChange={(e) => setProfileURL(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
