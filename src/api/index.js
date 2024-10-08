import api from './config';

export const signUpApi = async payload => {
  try {
    let res = await api.post('register', payload);
    return res.data;
  } catch (error) {
    console.log('register error', error);
  }
};

export const loginApi = async payload => {
  try {
    let res = await api.post('login', payload);
    return res.data;
  } catch (error) {
    console.log('login error', error);
  }
};
