import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({id: 1, name: "Mahbubul Alam"});
  const value = {user, setUser};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
