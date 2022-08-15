import { Router } from 'express';
import MovieController from '../controllers/movie.controller';

const movieRoutes = Router();

const movieController = new MovieController();

movieRoutes.get('/movies', (req, res) => movieController.getMovies(req, res));
// movieRoutes.get('/movies/year/:year', (req, res) => {});
movieRoutes.post('/movies', (req, res) => movieController.insertMovie(req, res));
// movieRoutes.put('/movies/:id', (req, res) => {});
// movieRoutes.delete('/movies/:id', (req, res) => {});

export default movieRoutes;

// postman insert movie:
// {
//   "title": "Twilight",
//   "year": 2008,
//   "classification": 12,
//   "starring": [
//       "Kristen Stewart",
//       "Robert Pattinson",
//       "Billy Burke"
//   ],
//   "director": "Catherine Hardwicke",
//   "genres": [
//       "teen",
//       "book-based",
//       "action",
//       "adventure"
//   ],
//   "length": 121,
//   "_id": "62f9978d69d5212e0d79649e",
//   "__v": 0
// }
