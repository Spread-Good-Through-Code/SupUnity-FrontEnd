import { createContext } from "react";

import { TUser } from "types";

const UserContext = createContext<{ user: TUser | null; setUser: Function }>({
  user: null,
  setUser: () => {},
});

export default UserContext;
