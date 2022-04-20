import axios from 'axios'
import api from '../../api/api'

const itineraryActions = {
  fetchearItineraries: () => {
    return async (dispatch, getState) => {
      const res = await axios.get(`${api.url}/api/allitineraries`)
      dispatch({ type: 'itineraries/fetch', payload: res.data.response })
    }
  },
  fetchearItinerary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get(`${api.url}/api/allitineraries/` + id);
      if (res.data.sucess) {
        dispatch({type: 'itineraries/fetchOne', payload: res.data.response })
      }
    }
  },
  fetchearItinerarioPorCiudad: (id) => {
    return async (dispatch, getState) => {
      try{
      const res = await axios.get(`${api.url}/api/allitineraries/city/` + id);
      dispatch({type: 'itineraryCiudad/fetch', payload: res.data})
    }catch (err) {
      console.log(err)
    }
  }
  },
  LikesDislikes: (likesObj) =>{
    return async (dispatch, getState) =>{
      const token = localStorage.getItem('token')
      try{
        const res = await axios.put(`${api.url}/api/likesAndDislike/`, {...likesObj}, {
          headers: {'Authorization': 'Bearer ' + token}})
        return {success: true}
      }
      catch(error){
        console.log(error)
        return {success: false}
      }
    }
  }
}
export default itineraryActions;