import './MyList.scss';

import { FC } from 'react';

import MovieList from '../../components/movieList/MovieList';

const MyList: FC = () => {
  return (
    <div className="mylist">
      <MovieList genre="My List" />
    </div>
  );
};

export default MyList;
