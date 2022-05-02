import axios from 'axios';
import api from '../../api/api';
import { get, delet } from '../../api/api';

const ciudadesActions = {
  fetchearCiudades: () => {
    return async (dispatch, getState) => {
      const res = await get('api/allcities');
      if (!res.success) {
        console.log(res);
        //algo malo pasó
        return false;
      }
      dispatch({
        type: 'ciudades/fetch',
        payload: res?.response?.ciudades,
      });
    };
  },
  fetchearCiudad: id => {
    return async (dispatch, getState) => {
      const res = await get(`api/allcities/${id}`);

      if (!res.success) {
        console.log(res);
        //algo malo pasó
        return false;
      }

      dispatch({ type: 'ciudad/fetchOne', payload: res.response });
    };
  },
  borrarCiudad: id => {
    return async (dispatch, getState) => {
      const res = await delet(`api/allcities/${id}`);
      if (!res.success) {
        console.log(res);
        //algo malo pasó
        return false;
      }

      dispatch({
        type: 'ciudades/delete',
        payload: res.response.ciudad,
      });
    };
  },
  filtrar: value => {
    return (dispatch, getState) => {
      dispatch({ type: 'ciudades/filtro', payload: value });
    };
  },
  cargarCiudad: (name, image, currency, population, country, timezone) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(`${api.url}/api/allcities)`, {
          name,
          image,
          currency,
          population,
          country,
          timezone,
        });
        if (respuesta.data.success) {
          dispatch({
            type: 'ciudades/cargarCiudad',
            payload: respuesta?.data.response.ciudades,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
  },
};

export default ciudadesActions;
