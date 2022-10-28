// date in MM-dd-YYYY format
export type TTrackedCommitment = {
  date: string;
  commitment: string;
  status: "OPEN" | "COMPLETED" | "COMMUNITY RECEIVED" | "FAILED";
};

// date in MM-dd-YYYY format
export type TLocalPost = {
  type: "HELP" | "INITIATIVE";
  title: string;
  author: string;
  description: string;
  timeline: string;
  status: "OPEN" | "CLOSED";
  currentMoney: number;
  neededMoney: number;
  communityServiceReqs: string[];
  submittedProof: string[];
};

export type TUser = {
  username: string;
};
