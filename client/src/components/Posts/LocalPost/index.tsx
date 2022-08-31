import type { TLocalPost } from "types";

import "./LocalPost.scss";

const LocalPost = ({
  type,
  title,
  author,
  description,
  timeline,
  status,
  currentMoney,
  neededMoney,
  communityServiceReqs,
  submittedProof,
}: TLocalPost) => {
  return (
    <article className="centerText local-post-container">
      <h3 className="local-post-heading">
        {type === "HELP" ? "HELP!" : "Initiative:"} {title}
      </h3>
      <p className="">Posted By: {author}</p>
      <p>Description: {description}</p>
      <p>Timeline: {timeline}</p>
      <p>{status === "OPEN" ? "OPEN TO VOTE" : "CLOSED"}</p>
      <p>
        Money Requirements: {currentMoney} / {neededMoney}
      </p>
      <h4 className="local-post-section-heading">
        Community Service Requirements
      </h4>
      <ul>
        {communityServiceReqs.length === 0 ? (
          <li>None</li>
        ) : (
          communityServiceReqs.map((item) => <li>{item}</li>)
        )}
      </ul>
      <h4 className="local-post-section-heading">
        Community Service Requirements
      </h4>
      <ul>
        {submittedProof.length === 0 ? (
          <li>Not Required</li>
        ) : (
          submittedProof.map((item) => <li>{item}</li>)
        )}
      </ul>
    </article>
  );
};

export default LocalPost;
