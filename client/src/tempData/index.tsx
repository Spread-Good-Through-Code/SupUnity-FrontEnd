import { TLocalPost } from "types";

// date in MM-dd-YYYY format
export const trackedCommitments = [
  {
    date: "08-01-2022",
    commitment: "Reoccuring Donation $5",
    status: "OPEN",
  },
  {
    date: "07-30-2022",
    commitment: "Bringing Soda to Request 1235 - 123 Street Barbeque",
    status: "OPEN",
  },
  {
    date: "07-11-2022",
    commitment: "Community Service at 2333 Street",
    status: "OPEN",
  },
  {
    date: "06-20-2022",
    commitment: "Cutting Neighbor 412312's Lawn",
    status: "COMPLETED",
  },
  {
    date: "06-13-2022",
    commitment: "Donated $500",
    status: "COMMUNITY RECEIVED",
  },
  {
    date: "06-05-2022",
    commitment:
      "Giving back 10% of community charity from Request 235 back into community bank",
    status: "FAILED",
  },
];

// RESTRUCTURE DATA WHEN DESIGN SOLIDIFIED
export const fulfilledCommitments = [
  {
    text: "User5234555 recently donated $5 to the community!",
    likes: 10,
  },
  {
    text: "Jorge Torres recently donated $10 to the community!",
    likes: 2,
  },
  {
    text: "Jake232 recently completed his commitment to help clean up route 12!",
    likes: 13,
  },
  {
    text: "John457 recently donated $100 to the community!",
    likes: 102,
  },
  {
    text: "Initiative 3123 - July 4th Community Event completed successfully!",
    likes: 502,
  },
];

export const localPosts: TLocalPost[] = [
  {
    type: "HELP",
    title: "Need a bit of money to get through the week",
    author: "User5234555 - Verified as Neighbor Jonathan",
    description:
      "I've fallen on hard times and while I'm usually able to pay my bills and donate to my community, due to an emergency with my car I don't think I'll have enough to pay for my water and electric bill this month.",
    timeline: "07-23-2022",
    status: "OPEN",
    currentMoney: 500,
    neededMoney: 1200,
    communityServiceReqs: ["Clean up route 123"],
    submittedProof: [
      "Document 1 - Electric Bill",
      "Document 2 - Water Bill",
    ],
  },
  {
    type: "HELP",
    title: "Need money for food!",
    author: "Registered-User212334",
    description:
      "I'm homeless and need money for food and water, please help me, I have 1 kid and we dont know where to stay tonight.",
    timeline: "07-20-2022",
    status: "OPEN",
    currentMoney: 200,
    neededMoney: 1000,
    communityServiceReqs: [],
    submittedProof: [
      "Photo Identification Upload",
      "Social Media Account Linking",
    ],
  },
  {
    type: "INITIATIVE",
    title: "Community Barbecue",
    author: "Registered-User12333 - Verified as Neighbor Susy",
    description:
      "It would be great to do a barbeque together, lets have one in a month on 145th street!",
    timeline: "08-31-2022",
    status: "OPEN",
    currentMoney: 100,
    neededMoney: 1000,
    communityServiceReqs: [
      "1 Person to bring soda",
      "1 person to bring chips",
    ],
    submittedProof: [],
  },
];
