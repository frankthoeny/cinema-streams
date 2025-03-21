import { FC } from 'react';

import { InfoOutlined } from '@mui/icons-material';

import { useVisibility } from '../VisibilityProvider';

const ButtonMore: FC = () => {
  const { toggleMoreVisible, isMoreVisible } = useVisibility();

  const toggleVisibility = () => {
    toggleMoreVisible();
  };

  return (
    <button onClick={toggleVisibility}>
      <InfoOutlined />
      <span>{isMoreVisible ? "Hide Details" : "Show Details"}</span>
    </button>
  );
};

export default ButtonMore;
