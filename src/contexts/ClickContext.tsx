import { createContext } from 'react';

interface ClickContextType {
  onClick?: () => void;
}

export const ClickContext = createContext<ClickContextType>({});
