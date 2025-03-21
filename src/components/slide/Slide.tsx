import './Slide.scss';

import { FC } from 'react';

interface SlideData {
  imdbID: string;
  Poster: string;
  Title: string;
}
const Slide: FC<{
  slide: SlideData;
  onClick: (videoId: string, imdbID: string, title: string) => void;
}> = ({ slide, onClick }) => {
  return (
    <div
      className={`slide id-${slide.imdbID}`}
      onClick={() => onClick(slide.imdbID, slide.imdbID, slide.Title)}
    >
      <img src={slide.Poster} alt={slide.Title} />
    </div>
  );
};

export default Slide;
