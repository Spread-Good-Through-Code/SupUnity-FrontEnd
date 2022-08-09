import "./HelpBtns.scss";

const HelpBtns = () => {
  return (
    <div className="help-btn-container">
      <div className="help-btn">
        <a href="https://abeliefnowlinux.azurewebsites.net/give-help.html">
          <img
            src="https://i.imgur.com/36UvuXc.png"
            alt="Give help button"
          />
          <br />{" "}
        </a>
        Sign up to support your community through funding, voting and
        initative planning! <br />
        <small>Learn more... </small>
      </div>

      <br />
      <div className="help-btn">
        <img
          src="https://i.imgur.com/BjPHboe.png"
          alt="Ask for help button"
        />{" "}
        <br />
        Sign up and allow your community to help you, submit a help form
        <br />
        <small>Learn more... </small>
        <br />
      </div>
    </div>
  );
};

export default HelpBtns;
