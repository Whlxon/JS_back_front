import type { Movie } from '../Model/Model';

const Cinema = (cinema: { name: String, movies: Movie[]}) => {
  return (
    <table>
      <thead>
        <br />
        <tr>
          <th>{cinema.name}</th>
        </tr>
      </thead>
      <tbody>
        {cinema.movies.map((movie) => (
        <tr key={movie.title}>
          <td>{movie.title}</td>
          <td>{movie.director}</td>
        </tr>
        ))}
      </tbody>
    </table>  
  );
};

export { Cinema };