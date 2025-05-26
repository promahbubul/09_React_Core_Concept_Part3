import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({id: 1, name: "Mahbubul Alam"});
  const value = {user, setUser};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
