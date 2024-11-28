// import { Books } from '../models/index.js';

export const seedBooks = async () => {
  await Books.bulkCreate([
    { name: 'A Court of Silver Flames', description: 'Love, power, and faerie intrigue', author: 'Sarah J Maas', genre: 'Fantasy Romance', assignedUserId: 2 },

    { name: 'Slaughterhouse 5', description: 'Existentialist view of human struggles.', author: 'Kurt Vonnegut', genre: 'Fiction', assignedUserId: 1},

    { name: 'Beyonders', description: 'Ordinary teens, extraordinary magical quest.', author: 'Brandon Mull', genre: 'Fantasy', assignedUserId: 2 },

    { name: 'Dear Black Girls', description: 'Empowering love letter to black girls.', author: "Aj'a Wilson", genre: 'Memoir', assignedUserId: 3 },

    { name: 'Pride and Prejudice', description: 'Love, class, and witty misunderstandings.', author: 'Jane Austen', genre: 'Classic', assignedUserId: 1 },
  ]);
};