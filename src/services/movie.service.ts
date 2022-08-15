import MovieModel from '../models/movie.model';
import { IMovie } from '../models/schemas/movie.schema';

class MovieServices {
  private movieModel: MovieModel;

  constructor() {
    this.movieModel = new MovieModel();
  }

  public async insertMovie(movie: IMovie): Promise<IMovie | null> {
    const movieCreated = await this.movieModel.insertMovie(movie);
    return movieCreated;
  }

  public async getMovies(): Promise<IMovie[] | null> {
    const movies = await this.movieModel.getMovies();
    return movies;
  }
}

export default MovieServices;
