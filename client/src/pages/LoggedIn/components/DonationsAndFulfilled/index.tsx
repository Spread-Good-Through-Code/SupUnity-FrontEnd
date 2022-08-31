// DUMMY DATA
import { fulfilledCommitments } from "tempData";

// Components
import UserCompletedCommitment from "components/UserCompletedCommitment";

const DonationsAndFulfilled = () => {
  return (
    <>
      <h3 className="centerText">
        Recent Donations and Fulfilled Commitments!
      </h3>
      {fulfilledCommitments.map((commitment) => (
        <UserCompletedCommitment
          text={commitment.text}
          likes={commitment.likes}
        />
      ))}
    </>
  );
};

export default DonationsAndFulfilled;
