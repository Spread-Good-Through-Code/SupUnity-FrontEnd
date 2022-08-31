// Types
import { TTrackedCommitment } from "types";

// Components
import CommitmentTracked from "components/CommitmentTracked";

type Props = {
  commitments: TTrackedCommitment[];
};

const Commitments = ({ commitments }: Props) => {
  return (
    <section aria-labelledby="commitments-header">
      <h2 id="commitments-header" className="centerText mt-20">
        Commitments
      </h2>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Date</th>
            <th>Commitment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {commitments.map((c) => (
            <CommitmentTracked
              date={c.date}
              commitment={c.commitment}
              status={c.status}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Commitments;
