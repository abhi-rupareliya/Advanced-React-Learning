import { createContext, useState } from "react";

type UserType = {
  name: string;
  email: string;
};

type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
