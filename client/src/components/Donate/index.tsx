import { useState } from "react";
import "./Donate.scss";

type Props = {};

const Donate = (props: Props) => {
  const [donationType, setDonationType] = useState<"once" | "recurring">(
    "once"
  );
  const [donationAmount, setDonationAmount] = useState(0);

  return (
    <div className="centerText">
      <h3>Donate!</h3>
      <p>
        Donate one time or setup a recurring donation to support your
        community!
      </p>
      <h4>Donation Type</h4>
      <button
        id="btn-donate-type-once"
        className={`${donationType === "once" && "selected"}`}
        onClick={() => setDonationType("once")}
      >
        One time
      </button>
      <button
        id="btn-donate-type-recurring"
        className={`${donationType === "recurring" && "selected"}`}
        onClick={() => setDonationType("recurring")}
      >
        Recurring
      </button>
      <h4>Donation Amount</h4>
      <button
        onClick={() => setDonationAmount(5)}
        className={`btn-donate-amt ${donationAmount === 5 && "selected"}`}
      >
        $5
      </button>
      <button
        onClick={() => setDonationAmount(10)}
        className={`btn-donate-amt ${donationAmount === 10 && "selected"}`}
      >
        $10
      </button>
      <button
        onClick={() => setDonationAmount(25)}
        className={`btn-donate-amt ${donationAmount === 25 && "selected"}`}
      >
        $25
      </button>
      <label htmlFor="custom-amount-input">Custom Amount:</label>
      <input
        type="number"
        step="0.01"
        name="custom-amount"
        id="custom-amount-input"
        value={donationAmount}
        onChange={(e) => setDonationAmount(Number(e.target.value))}
      />
    </div>
  );
};

export default Donate;
