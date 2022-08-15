import { Request, Response } from 'express';
import MovieService from '../services/movie.service';

class MovieController {
  private movieService: MovieService;

  constructor() {
    this.movieService = new MovieService();
  }

  public async insertMovie(req: Request, res: Response): Promise<Response> {
    const movie = await this.movieService.insertMovie(req.body);
    return res.status(201).json(movie);
  }

  public async getMovies(req: Request, res: Response): Promise<Response> {
    const movies = await this.movieService.getMovies();
    return res.status(200).json(movies);
  }
}

export default MovieController;