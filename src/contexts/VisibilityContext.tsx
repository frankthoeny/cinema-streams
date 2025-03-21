// VisibilityContext.tsx
import { createContext } from 'react';

interface VisibilityContextType {
  isMoreVisible: boolean;
  toggleMoreVisible: () => void;
}

export const VisibilityContext = createContext<VisibilityContextType>({
  isMoreVisible: false,
  toggleMoreVisible: () => {},
});
