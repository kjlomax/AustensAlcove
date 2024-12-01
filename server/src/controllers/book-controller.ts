
import type { Request, Response } from 'express';
import { Books, User } from '../models/index.js';

export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const books = await Books.findAll({
          include: [
            {
              model: User,
              as: 'assignedUser',
              attributes: ['username']
            },
          
          ]
        });
        res.status(200).json(books);
      } catch (error: any) {
        console.log(error);
        res.status(500).json({
          message: error.message
        });
      }
};

export const getBookId = async (req: Request, res: Response) =>{
    const {id} = req.params;
    try {
        const book = await Books.findByPk(id,{attributes:{exclude: ['password']},
        });
        if (book) {
            res.json(book);
        } else {
            res.status(400).json({message: 'book not found'})
        }
        res.json(book)
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

  // DELETE /Users/:id
export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const book = await Books.findByPk(id);
      if (book) {
        await book.destroy();
        res.json({ message: 'Book deleted' });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
      res.json({message:`Book ${id} deleted successfully`})
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  

  // export const createBook = async (req: Request, res: Response) => {
  //   const {name,author} = req.body;
  //   try {
  //     if(!name||!author){
  //       return res.status(400).json({message: 'All field needs to be entered'})
  //     }
  //     const user = await Books.create({name,author});
  //     console.log(user)
  //     if (!user){
  //       return res.status(401).json({message: 'failed authentication'})

  //     }
  //     const secretKey = process.env.JWT_SECRET_KEY || '';
  //     const token = jwt.sign({username},secretKey,{expiresIn: '1hr'})
  //     return res.json({token});
  //   } catch (error:any) {
  //     return res.status(500).json({message: error.message})
  //   }
    
// };