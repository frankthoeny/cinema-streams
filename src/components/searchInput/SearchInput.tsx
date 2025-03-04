import { FC } from 'react';

import SearchIcon from '../assets/search.svg';
import { SearchInputProps } from '../interfaces/movies.interface';

const SearchInput: FC<SearchInputProps> = ({
  searchValue,
  setSearchValue,
}: SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchValue(searchValue);
    }
  };

  const handleClick = () => {
    setSearchValue(searchValue);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies"
        onKeyDown={handleKeyboard}
        value={searchValue}
        onChange={handleChange}
      />
      <img src={SearchIcon} alt="search" onClick={handleClick} />
    </div>
  );
};

export default SearchInput;
