const axios = require('axios');

const port = 4000;

const url = `http://localhost:${port}`;

const get = async uri => {
  try {
    const res = await axios.get(`${url}/${uri}`);
    return {
      success: true,
      response: res.data.response,
    };
  } catch (err) {
    return {
      success: false,
      response: err,
    };
  }
};

const delet = async uri => {
  try {
    const res = await axios.delete(`${url}/${uri}`);
    return {
      success: true,
      response: res.data.response,
    };
  } catch (err) {
    return {
      success: false,
      response: err,
    };
  }
};
// put, post,

const post = async (uri, data) => {
  try {
    const res = await axios.post(`${url}/${uri}`, data);
    return {
      success: true,
      response: res.data.response,
    };
  } catch (err) {
    return {
      success: false,
      response: err,
    };
  }
};

module.exports = { url, get, delet, post };
