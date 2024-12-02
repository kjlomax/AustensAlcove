import type { Request, Response } from 'express';
import { Movie,User } from '../models/index.js';
import {JwtPayload} from '../middleware/auth.js';
export const getAllMovies = async (_req: Request, res: Response) => {
    try {
        const movie = await Movie.findAll({
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['username']
            },
          
          ]
        });
        res.status(200).json(movie);
      } catch (error: any) {
        console.log(error);
        res.status(500).json({
          message: error.message
        });
      }
};

export const getMovieId = async (req: Request, res: Response) =>{
    const {id} = req.params;
    try {
        const movie = await Movie.findByPk(id);
        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(400).json({message: 'movie not found'})
        }
        res.json(movie)
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

  // DELETE /Users/:id
  export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const movie = await Movie.findByPk(id);
      if (movie) {
        await movie.destroy();
        res.status(200).json({ message: `Movie ${id} deleted successfully` });
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
    

    
  };
 
export const createMovie = async (req: Request, res: Response): Promise<Response> => {
    const { Title, Plot, Director, Genre, Year, Poster } = req.body;
    const token = req.user as JwtPayload;
    console.log(token)
    try {
      const newMovie = await Movie.create({
        title: Title,
        plot: Plot,
        director:Director,
        genre: Genre,
        year: Year,
        poster:Poster,
        userId:token.userId,
      });
  
      return res.status(201).json(newMovie);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  };