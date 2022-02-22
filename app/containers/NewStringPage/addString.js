import axios from 'axios';

const addString = string => {
  try {
    axios.post(`http://localhost:3000/api`, { newString: string });
    return new Promise(resolve => {
      resolve();
    });
  } catch (err) {
    return err;
  }
};

export default addString;
