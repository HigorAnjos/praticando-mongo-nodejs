import { IMovie, movieMongooseModel } from './schemas/movie.schema';
import { Model } from 'mongoose';
import GenericModel from './generic.model';
import IMovieModel from './interfaces/movie.model';

class MovieModel extends GenericModel<IMovie> implements IMovieModel {
  constructor(modelMongoose: Model<IMovie>) {
    super(modelMongoose);
  }
}

export default MovieModel;