import './Details.scss';

import { FC } from 'react';

import { MovieDetails } from '../../interfaces/movies.interface';
import { formatMinutes } from '../../utils/TimeUtils';

interface DetailsProps {
  data: MovieDetails | undefined;
}
const Details: FC<DetailsProps> = ({ data }) => {
  return (
    <div className="details">
      <div className="itemInfo">
        <div className="itemInfoTop">
          <div className="limit">
            <span>Rated: </span> {data?.Rated}
          </div>
          <div>
            <span>{data?.Year}</span>
            <span>{formatMinutes(data?.Runtime)}</span>
          </div>

          <div className="staring">
            <span>Staring:</span> {data?.Actors}
          </div>
          <div className="genre">
            <span>Genres:</span> {data?.Genre}
          </div>
          <div className="type">
            <span>Type: </span>
            {data?.Type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
