import type { Request, Response } from 'express';
import { User } from '../models/user.js';

export const getUserId = async (req: Request, res: Response) =>{
    const {id} = req.params;
    try {
        const user = await User.findByPk(id,{attributes:{exclude: ['password']},
        });
        if (user) {
            res.json(user);
        } else {
            res.status(400).json({message: 'User not found'})
        }
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

  // DELETE /Users/:id
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  