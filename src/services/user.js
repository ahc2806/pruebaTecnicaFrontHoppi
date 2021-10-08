import axios from 'axios';
import { API_URL } from '@env';
import { Constants } from '../utils';

const { Routes } = Constants;

export const Create = async data => {
  try {
    const response = await axios.post(`${API_URL}${Routes.users}`, data);

    if (response.status === 200) {
      return { data: response.data, status: 200 };
    } else {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { error, status: 500 };
  }
};

export const Login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}${Routes.login}`, {
      email,
      password,
    });

    if (response.status === 200) {
      return { data: response.data, status: 200 };
    } else {
      return { error: response.data, status: response.status };
    }
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { error, status: 500 };
  }
};

export const ValidateUser = async nickname => {
  try {
    const response = await axios.get(
      `${API_URL}${Routes.validateUser}${nickname}`,
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { error, status: 500 };
  }
};
