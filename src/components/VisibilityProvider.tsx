import { Dispatch, FC, SetStateAction, useContext } from 'react';

import { VisibilityContext } from '../contexts/VisibilityContext';

export const VisibilityProvider: FC<{
  children: React.ReactNode;
  isMoreVisible: boolean;
  setIsMoreVisible: Dispatch<SetStateAction<boolean>>;
}> = ({ children, isMoreVisible, setIsMoreVisible }) => {
  const toggleMoreVisible = () => {
    setIsMoreVisible((prev) => !prev);
  };

  return (
    <VisibilityContext.Provider
      value={{
        isMoreVisible,
        toggleMoreVisible,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
