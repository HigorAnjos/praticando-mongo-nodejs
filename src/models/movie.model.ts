import { IMovie, movieMongooseModel } from './schemas/movie.schema';
import { Model } from 'mongoose';

class MovieModel {
  private movieMongooseModel: Model<IMovie>;

  constructor() {
    this.movieMongooseModel = movieMongooseModel
  }

  public async insertMovie(movie: IMovie): Promise<IMovie | null> {
    const movieCreated = await this.movieMongooseModel.create(movie);
    return movieCreated;
  }

  public async getMovies(): Promise<IMovie[] | null> {
    const movies = await this.movieMongooseModel.find();
    return movies;
  }
}

export default MovieModel;