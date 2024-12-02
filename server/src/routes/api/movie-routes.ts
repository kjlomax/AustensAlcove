import express from 'express';
import { getAllMovies, getMovieId, deleteMovie,createMovie } from '../../controllers/movie-controller.js';


const router = express.Router();
router.get('/', getAllMovies);
router.get('/:id', getMovieId);
router.delete('/:id', deleteMovie);
router.post('/',createMovie )

export { router as MovieRouter };
