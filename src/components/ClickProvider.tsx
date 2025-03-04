import { FC, useContext } from 'react';

import { ClickContext } from '../contexts/ClickContext';

export const ClickProvider: FC<{ children: React.ReactNode; onClick: () => void }> = ({
    children,
    onClick,
  }) => {
    return <ClickContext.Provider value={{ onClick }}>{children}</ClickContext.Provider>;
  };
  
  export const useClick = () => {
    return useContext(ClickContext);
  };