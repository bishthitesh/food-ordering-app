import axios from 'axios';
import {
  API_FILTER_BY_NAME,
  API_ALL_RESTAURANTS,
  API_LOGIN,
} from './constants';

export const filterRestaurantsByName = async (name) => {
  let api = `${API_FILTER_BY_NAME}${name}`;
  let results = await axios.get(api);
  return results;
};

export const getAllRestaurants = async () => {
  let api = `${API_ALL_RESTAURANTS}`;
  let results = await axios.get(api);
  return results;
};

export const login = async (payload) => {
  let api = `${API_LOGIN}`;
  try {
    let result = await axios.post(api, null, {
      headers: { Authorization: 'Basic ' + payload },
    });
    return result;
  } catch (e) {
    return e;
  }
};
