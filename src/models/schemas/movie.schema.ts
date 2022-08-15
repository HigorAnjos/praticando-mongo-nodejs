import { Schema, model } from 'mongoose';

interface IMovie {
  title: string,
  year: number,
  classification: number,
  starring: string[],
  director?: string,
  genres?: string[],
  length: number
}

const movieSchema = new Schema<IMovie>({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  classification: {
    type: Number,
    required: true
  },
  starring: {
    type: [String],
    required: true
  },
  director: {
    type: String,
    required: false
  },
  genres: {
    type: [String],
    required: false
  },
  length: {
    type: Number,
    required: true
  }
});

// model<IMovie>('CollectionName', movieSchema)
const movieMongooseModel = model<IMovie>('Movie', movieSchema);
export { IMovie, movieMongooseModel };


