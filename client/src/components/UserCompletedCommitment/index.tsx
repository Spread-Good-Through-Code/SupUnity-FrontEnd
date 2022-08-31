import "./CompletedCommitment.scss";

type Props = {
  text: string;
  likes: number;
};

const UserCompletedCommitment = ({ text, likes }: Props) => {
  return (
    <div className="completed-commitment-container">
      <p className="completed-commitment-text centerText">{text}</p>
      <p className="centerText mb-0">
        <span className="likes-heart">&#10084;</span> x{likes}
      </p>
    </div>
  );
};

export default UserCompletedCommitment;
