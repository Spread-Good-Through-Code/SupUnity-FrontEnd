import "./LoginForm.css";

const LoginForm = () => {
  function logout() {
    alert("Logged out!");
  }
  return (
    <>
      <div className="row">
        <div className="six columns">
          <label htmlFor="exampleEmailInput">Username</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="exampleEmailInput"
          />
        </div>
        <div className="six columns">
          <label htmlFor="exampleEmailInput">Password</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="exampleEmailInput"
          />
        </div>
      </div>
      <div className="btn-div">
        <a
          className="button button-primary"
          href="https://supunityproduction.azurewebsites.net/LoggedIn.html"
        >
          Log In!
        </a>
        <button id="btn-logout" disabled={true} onClick={() => logout()}>
          Forgot Password
        </button>
      </div>
    </>
  );
};

export default LoginForm;
