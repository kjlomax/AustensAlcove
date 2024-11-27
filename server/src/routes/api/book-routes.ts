import express from 'express';
import type { Request, Response } from 'express';
import { Books, User } from '../../models/index.js';


const router = express.Router();
// GET books
router.get('/', async (_req: Request, res: Response) => {
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
  });
  
  // // GET /volunteers/:id - Get a volunteer by ID
  // router.get('/:id', async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   try {
  //     // const volunteer = await Volunteer.findByPk(id);
  //     // if(volunteer) {
  //     //   res.json(volunteer);
  //     // } else {
  //     //   res.status(404).json({
  //     //     message: 'Volunteer not found'
  //     //   });
  //     // }
  //     res.status(200).json('getOneBook');
  //   } catch (error: any) {
  //     console.log(error);
  //     res.status(500).json({
  //       message: error.message
  //     });
  //   }
  // });
  
  // // POST /volunteers - Create a new volunteer
  // router.post('/', async (req: Request, res: Response) => {
  //   const { volunteerName } = req.body;
  //   try {
  //     // const newVolunteer = await Volunteer.create({
  //     //   volunteerName
  //     // });
  //     res.status(201).json('addBook');
  //   } catch (error: any) {
  //     console.log(error);
  //     res.status(400).json({
  //       message: error.message
  //     });
  //   }
  // });
  
  // // PUT /volunteers/:id - Update a volunteer by ID
  // router.put('/:id', async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const { volunteerName } = req.body;
  //   try {
  //     // const volunteer = await Volunteer.findByPk(id);
  //     // if(volunteer) {
  //     //   volunteer.volunteerName = volunteerName;
  //     //   await volunteer.save();
  //     //   res.json(volunteer);
  //     // } else {
  //     //   res.status(404).json({
  //     //     message: 'Volunteer not found'
  //     //   });
  //     // }
  //     res.status(200).json('updateBook');
  //   } catch (error: any) {
  //     console.log(error);
  //     res.status(400).json({
  //       message: error.message
  //     });
  //   }
  // });
  
  // // DELETE /volunteers/:id - Delete a volunteer by ID
  // router.delete('/:id', async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   try {
  //     // const volunteer = await Volunteer.findByPk(id);
  //     // if(volunteer) {
  //     //   await volunteer.destroy();
  //     //   res.json({ message: 'User deleted' });
  //     // } else {
  //     //   res.status(404).json({
  //     //     message: 'User not found'
  //     //   });
  //     // }
  //     res.status(200).json('deleteBook');
  //   } catch (error: any) {
  //     console.log(error);
  //     res.status(500).json({
  //       message: error.message
  //     });
  //   }
  // });

export { router as bookRouter };
