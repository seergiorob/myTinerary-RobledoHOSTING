import axios from 'axios';
import api from '../../api/api';

const ciudadesActions = {
  fetchearCiudades: () => {
    return async (dispatch, getState) => {
    try {
      const res = await api.fetchearCiudades();
      if (res.data.success) {
      dispatch({ type: 'ciudades/fetch', payload: res?.data?.response.ciudades })}
    }catch (err) {
      console.log(err);
    }
  }
  },
  fetchearCiudad: (id) => {
    return async (dispatch, getState) => {
      try{
      const res = await api.fetchearCiudad(id);
      if (res.data.success) {
        dispatch({type: 'ciudad/fetchOne', payload: res.data.response })}
      }catch (err) {
        console.log(err)
      }
    }
  },
  borrarCiudad: (id) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.delete(`${api.url}/api/allcities/` + id)
        dispatch({ type: 'ciudades/delete', payload: res.data.response.ciudad })
      } catch (err) {
        console.log(err)
      }
    }
  },
  filtrar: (value) => {
    return (dispatch, getState) => {
      dispatch({ type: 'ciudades/filtro', payload: value })
    }
  },
  cargarCiudad: (name, image, currency, population, country, timezone) => {
    return async (dispatch, getState) => {
      try {
      const respuesta = await axios.post(
        `${api.url}/api/allcities)`,
        { name, image, currency, population, country, timezone },
      )
      if(respuesta.data.success){
      dispatch({
        type: 'ciudades/cargarCiudad',
        payload: respuesta?.data.response.ciudades,
      })}
    } catch (err) {
      console.log(err)
    }
  }
  }
} 

export default ciudadesActions
