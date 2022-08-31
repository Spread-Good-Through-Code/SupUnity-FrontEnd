type Props = {};

const Donate = (props: Props) => {
  return (
    <div className="centerText">
      <h3>Donate!</h3>
      <p>
        Donate one time or setup a re-occurring donation to support your
        community!
      </p>
      <h4>Donation Type</h4>
      <button>One time</button>
      <button>Re-occurring</button>
      <h4>Donation Amount</h4>
      <button>$5</button>
      <button>$10</button>
      <button>$25</button>
      <label htmlFor="custom-amount">Custom Amount:</label>
      <input type="text" name="custom-amount" id="custom-amount" />
    </div>
  );
};

export default Donate;
