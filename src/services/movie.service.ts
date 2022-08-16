import IMovieModel from '../models/interfaces/movie.model';
// import MovieModel from '../models/movie.model';
import { IMovie } from '../models/schemas/movie.schema';
import IMovieService from './interface/movie.service';

class MovieServices implements IMovieService {
  private _movieModel: IMovieModel;

  constructor(movieModel: IMovieModel) {
    this._movieModel = movieModel;
  }
    
  async create(movie: IMovie): Promise<IMovie | null> {
    return await this._movieModel.create(movie);
  }
  async findAll(): Promise<IMovie[]> {
    return await this._movieModel.findAll();
  }
  async findById(id: string): Promise<IMovie> {
    const movie = await this._movieModel.findById(id);
    if (!movie) throw new Error('Movie not found');
    return movie;
  }
  async updateById(id: string, movie: IMovie): Promise<IMovie> {
    const movieUpdated = await this._movieModel.update(id, movie);
    if (!movieUpdated) throw new Error('Movie not found');
    return movieUpdated;
  }
  async deleteById(id: string): Promise<void> {
    const movie = await this._movieModel.findById(id);
    if (!movie) throw new Error('Movie not found');
    await this._movieModel.deleteById(id);
  }

}

export default MovieServices;
