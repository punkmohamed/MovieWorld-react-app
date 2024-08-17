import { useSelector } from "react-redux";

const MovieDetailCard = ({ movie }) => {
    const translate = useSelector(state => state.languageSlice.translation);

    return (
        <div className="container mt-5">
            <div className="backdrop">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`${movie.title} backdrop`} />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
                    </div>
                </div>
                <div className="col-md-8">
                    <h1>{movie.title}</h1>
                    <h4>{movie.tagline}</h4>
                    <p><strong>{translate['Original Title']}:</strong> {movie.original_title}</p>
                    <p><strong>{translate['Status']}:</strong> {movie.status}</p>
                    <p><strong>{translate['Runtime']}:</strong> {movie.runtime} {translate['minutes']}</p>
                    <p><strong>{translate['Average Vote']}:</strong> {movie.vote_average} ({movie.vote_count} {translate['votes']})</p>
                    <p><strong>{translate['Overview']}:</strong> {movie.overview}</p>
                    {movie.belongs_to_collection && (
                        <div className="collection-info">
                            <h5>{translate['Part of Collection']}: {movie.belongs_to_collection.name}</h5>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection.poster_path}`} alt={movie.belongs_to_collection.name} />
                            <img src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection.backdrop_path}`} alt={`${movie.belongs_to_collection.name} backdrop`} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailCard;
