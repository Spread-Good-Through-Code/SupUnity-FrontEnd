import { useContext } from "react";

import "./LoggedIn.scss";
import type { TTrackedCommitment } from "types";

// TempData
import { trackedCommitments } from "tempData";

// Context
import UserContext from "context/user-context";

// Components
import Commitments from "./components/Commitments";
import DonationsAndFulfilled from "./components/DonationsAndFulfilled";
import OpenRequests from "./components/OpenRequests";
import Donate from "components/Donate";
import SubmitRequest from "./components/SubmitRequest";

const LoggedInPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="container font-raleway">
        <div className="row">
          <div className="u-full-width">
            <div className="u-full-width center-child  mtb-2p">
              <img
                src="https://locallifeline.files.wordpress.com/2022/07/logo-1.png?w=458&h=125"
                width="200px"
                alt="Sup? Unity! Logo"
              />
            </div>
            <hr />
            <p className="welcome-msg centerText">
              Welcome to your community, {user ? user.username : "Current User"}
              !
            </p>
            <hr />
            <h2 className="centerText"> Profile!</h2>
            <p className="centerText profile-info">User12313123 - John Smith</p>
            <p className="centerText profile-info">
              &#9745; - Social Media Linked
            </p>
            <p className="centerText profile-info">
              &#9745; - Sponsored by 5 community members
            </p>
            <Commitments
              commitments={trackedCommitments as TTrackedCommitment[]}
            />
            <p className="centerText">See all...</p>
            <div className="center-child">
              <img
                src="https://abeliefnowlinux.azurewebsites.net/images/timechart.png"
                alt="Time chart of 2021 to 2022"
              />
            </div>
            <p id="commitments-fulfilled">95% of commitments fulfilled</p>
            <hr />
            <h2 className="centerText section-header">Community 97006</h2>
            <DonationsAndFulfilled />
            <hr />
            <OpenRequests />
            <Donate />
            <hr />
            <SubmitRequest />
          </div>
        </div>
      </div>
      <script src="https://abeliefnow.com/js/app.js"></script>
      <script src="https://cdn.auth0.com/js/auth0-spa-js/1.20/auth0-spa-js.production.js"></script>
    </>
  );
};

export default LoggedInPage;
