import { useState, createContext, ReactNode } from 'react';

type UserContextProps = {
  children: ReactNode;
};
type UserContextType = {
  offSetAbout: number;
  setOffSetAbout: (newState: number) => void;
  offSetGrafic: number;
  setoffSetGrafic: (newState: number) => void;
  offSetContact: number;
  setoffSetContact: (newState: number) => void;
};
const initialValue = {
  offSetAbout: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOffSetAbout: () => {},
  offSetGrafic: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setoffSetGrafic: () => {},
  offSetContact: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setoffSetContact: () => {},
};

export const AuthContext = createContext<UserContextType>(initialValue);

export const AuthProvider = ({ children }: UserContextProps) => {
  const [offSetAbout, setOffSetAbout] = useState(initialValue.offSetAbout);
  const [offSetGrafic, setoffSetGrafic] = useState(initialValue.offSetGrafic);
  const [offSetContact, setoffSetContact] = useState(
    initialValue.offSetContact,
  );

  return (
    <AuthContext.Provider
      value={{
        offSetAbout,
        setOffSetAbout,
        offSetGrafic,
        setoffSetGrafic,
        offSetContact,
        setoffSetContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
