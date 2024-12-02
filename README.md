# Austen's Alcove

## Description
**Austen’s Alcove** is a charming haven for book lovers, where timeless tales meet modern literary delight. Curate your reading journey, share your discoveries, and join a community of like-minded readers. In addition to tracking your books, Austen’s Alcove features a movie search functionality, allowing users to explore films inspired by the books they love!

## User Story
As a book lover,  
- I want to create a personal profile in Austen's Alcove so that I can track my reading journey, organize my book lists, and share my thoughts with others.  
- I want to be able to rate the books I've read, build a "want-to-read" list, and mark books I plan to buy or have already read.  
- I also want to explore movies inspired by books and connect with other readers who share my literary passions.  

## Features
- **User Profiles**: Track your reading journey, organize your books into lists, and rate them.
- **Book Management**: Build your "want-to-read" list, track books you've purchased, and mark completed reads.
- **Community Connection**: Share your thoughts on books and connect with like-minded readers.
- **Movie Search**: Search for movies related to your favorite books or discover films based on literary classics.
- **Random Movie Generator**: Get inspired by a random movie suggestion related to books.  

## Technologies Used
- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: Sequelize, PostgreSQL
- **Styling**: Custom CSS and Bootstrap for responsiveness
- **APIs**: Movie API for fetching film data  

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/austens-alcove.git

2. Install dependencies for both frontend and 
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up environment variables for the API keys and database connection:
Create a .env file in the root directory and add
   ```bash
   API_KEY=your_api_key
   DATABASE_URL=your_database_url
   ```
4. Run the application
   ```bash
   npm run dev
   ```

## Usage
- Navigate to the Home Page to explore the app.
- Create or log in to your User Profile.
- Add books to your lists:
- "Want-to-Read"
"Already Read"
"Planning to Buy"
 - Use the Search Movies feature to find films based on your favorite books.
 - Check out the Random Movie Generator for fun recommendations.
Future Enhancements
Add user authentication and profile customization.
Implement a book search API for seamless book discovery.
Enhance the community features with forums and discussion boards.
Integrate book-to-movie matching for automatic recommendations.
License
This project is licensed under the MIT License.
## Deployment  
Austen's Alcove is deployed on [Render](https://render.com). Once deployed, users can access the app through the live URL provided by Render.  

### Deployment Steps:  
1. **Prepare the Application**:  
   - Ensure all code is pushed to the repository.  
   - Check for any unresolved bugs or errors.  
   - Confirm that the `package.json` includes scripts for starting the application, such as `start` or `build`.  

2. **Create a Render Service**:  
   - Log in to your [Render account](https://render.com).  
   - Click **New** and select **Web Service**.  

3. **Connect the Repository**:  
   - Choose the repository containing Austen's Alcove.  
   - Select the branch you want to deploy (e.g., `main` or `production`).  

4. **Configure Build Settings**:  
   - Set the **Build Command** (e.g., `npm run build`).  
   - Set the **Start Command** (e.g., `npm start` or the command to serve your app).  
   - Select the appropriate runtime (e.g., Node.js).  

5. **Deploy**:  
   - Click **Create Web Service**.  
   - Wait for the build and deploy process to complete.  

6. **Access the Application**:  
   - Once deployed, Render provides a live URL to access Austen's Alcove.  
   - Share the link with users or testers.  

