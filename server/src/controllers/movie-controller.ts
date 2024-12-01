
// export const getAllBooks = async (_req: Request, res: Response) => {
//     try {
//         const books = await Books.findAll({
//           include: [
//             {
//               model: User,
//               as: 'assignedUser',
//               attributes: ['username']
//             },
          
//           ]
//         });
//         res.status(200).json(books);
//       } catch (error: any) {
//         console.log(error);
//         res.status(500).json({
//           message: error.message
//         });
//       }
// };

// export const getBookId = async (req: Request, res: Response) =>{
//     const {id} = req.params;
//     try {
//         const book = await Books.findByPk(id,{attributes:{exclude: ['password']},
//         });
//         if (book) {
//             res.json(book);
//         } else {
//             res.status(400).json({message: 'book not found'})
//         }
//         res.json(book)
//     } catch (error: any) {
//         res.status(500).json({message: error.message});
//     }
// }

//   // DELETE /Users/:id
// export const deleteBook = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//       const book = await Books.findByPk(id);
//       if (book) {
//         await book.destroy();
//         res.json({ message: 'Book deleted' });
//       } else {
//         res.status(404).json({ message: 'Book not found' });
//       }
//       res.json({message:`Book ${id} deleted successfully`})
//     } catch (error: any) {
//       res.status(500).json({ message: error.message });
//     }
//   };