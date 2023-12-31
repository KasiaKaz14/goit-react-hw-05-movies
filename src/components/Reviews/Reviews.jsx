import { searchMovieReviews } from 'SearchMovies/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    searchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={css.container}>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
