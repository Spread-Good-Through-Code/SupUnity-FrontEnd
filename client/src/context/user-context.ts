import { createContext } from "react";

import { TUser } from "types";

const UserContext = createContext<[TUser | null, Function]>([null, () => {}]);

export default UserContext;
