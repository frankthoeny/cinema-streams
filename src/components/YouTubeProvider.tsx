import { FC, useContext, useState } from 'react';

import { VisibilityContext } from '../contexts/VisibilityContext';

export const VisibilityProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <VisibilityContext.Provider value={{ isMoreVisible, setIsMoreVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
