// const ErrorPage = () => {
//   return (
//     <section>
//       <h1>404: Page Not Found</h1>
//       <h1> ¯\_(ツ)_/¯</h1>
//     </section>
//   );
// };

// export default ErrorPage;

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/error.css";  // Ensure you have the styling for the error page

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Alas, you cannot proceed...</h1>
      <p>
        "I must warn you, dear user, that without proper registration, 
        your way to this page shall be forever blocked! It is a truth universally 
        acknowledged, that a user in possession of an unregistered account, 
        must be in want of a login."
      </p>
      <p>
        Please, do sign up, so that you may proceed to more agreeable pages.
      </p>
      <div>
        <Link to="/login">
          <button className="button">Sign Up or Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;


