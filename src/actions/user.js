import axios from 'axios';
import { setUser } from '../reducers/userReducer';
import { API_URL } from '../config';

export const registration = async (email, name, password) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/registration`, {
      email,
      name,
      password,
    });
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}api/auth/auth`, {
        headers: { Authorisation: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
    } catch (error) {
    //   alert(error.response.data.message);
      localStorage.removeItem('token');
    }
  };
};
