import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Onboarding.scss";

import UserContext from "context/user-context";

const OnboardingPage = () => {
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const isUsernameTaken = async (username: string) => {
    let res;
    if (Math.random() > 0.5) {
      res = await fetch("https://supunitytester.free.beeceptor.com/");
    } else {
      res = await fetch("https://supunitytester.free.beeceptor.com/found");
    }
    const { status } = await res.json();
    if (status === "No user found.") {
      return false;
    }

    return true;
  };

  const navigate = useNavigate();

  const updateUsername = async (e: React.FormEvent) => {
    e.preventDefault();
    const taken = await isUsernameTaken(username);
    if (taken) {
      setError(true);
      setUsername("");
    } else {
      setUser({ username: username });
      navigate("/logged-in");
      console.log("Not taken.");
    }
  };

  return (
    <main>
      <div className="page-wrapper">
        <h1>Onboarding:</h1>
        <form onSubmit={(e) => updateUsername(e)}>
          <label>
            Username:
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          {error ? (
            <p className="error text-center">Username already taken.</p>
          ) : null}
          <button type="submit" className="block-center">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default OnboardingPage;
