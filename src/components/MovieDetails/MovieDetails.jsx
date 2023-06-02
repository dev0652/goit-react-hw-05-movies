import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div>
      MovieDetails:
      <p>{movieId}</p>
    </div>
  );
}
