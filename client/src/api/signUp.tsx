import type { UserSign } from '../interfaces/UserSignin';

const signUP = async (userInfo: UserSign) => {
  try {
    const response = await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('your user was not created!');
    }

    return data;
  } catch (err) {
    console.log('Error from user signUp: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { signUP };