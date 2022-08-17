import "./Post.scss";

type Props = {
  city: string;
  state: string;
  zipCode: number;
  userName: string;
  postText: string;
  imgUrl?: string;
  imgAlt?: string;
  completed: boolean;
  raised: number;
  goal: number;
  communityServiceRequirements?: string[];
  likes: number;
};

const Post = ({
  city,
  state,
  zipCode,
  userName,
  postText,
  imgUrl,
  imgAlt,
  completed,
  raised,
  goal,
  communityServiceRequirements,
  likes,
}: Props) => {
  return (
    <article className="post-div">
      <p className="post-location">
        {city}, {state} - {zipCode}
      </p>
      <p>Posted By: {userName}</p>
      <p className="centerText">{postText}</p>
      {imgUrl ? (
        <div className="img-container">
          <img
            src={imgUrl}
            alt={imgAlt ? imgAlt : "unknown: user uploaded"}
          />
        </div>
      ) : null}
      <p>
        <b>Status:</b> {completed ? "COMPLETED" : "OPEN"}
      </p>
      <p>
        <b>Money Requirments:</b> {raised} / {goal} Raised
      </p>
      <div className="centerText">
        <p className="mb-5 fw-700">Community Service Requirements</p>
      </div>
      <ul className="post-csr-list">
        {communityServiceRequirements ? (
          communityServiceRequirements.map((csr) => (
            <li className="centerText">{csr}</li>
          ))
        ) : (
          <p className="centerText">None</p>
        )}
      </ul>
      <p className="centerText mb-0">
        <span className="likes-heart">&#10084;</span> x{likes}
      </p>
      <p className="centerText mb-0"> Sign in to view more details </p>
    </article>
  );
};

export default Post;
