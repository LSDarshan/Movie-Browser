import Hero from './hero';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `movie/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={posterUrl} className="card-img-top" alt={movie.original_name || movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_name || movie.title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResult }) => {
  const title = keyword ? `You are searching for "${keyword}"` : " You are searching for..";

  return (
    <>
      <Hero text={title} />

      {searchResult && searchResult.length > 0 ? (
        <div className="container">
          <div className="row">
            {searchResult.map(obj => <MovieCard movie={obj} key={obj.id} />)}
          </div>
        </div>
      ) : (
        <div className="container">
          <p className="text-center mt-5">
            {keyword ? `No results found for "${keyword}"` : "Start typing to search movies"}
          </p>
        </div>
      )}
    </>
  );
};

export default SearchView;