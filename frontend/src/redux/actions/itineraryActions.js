import axios from 'axios'

const itineraryActions = {
  fetchearItineraries: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('https://mytineraryrob.herokuapp.com/api/allitineraries')
      dispatch({ type: 'itineraries/fetch', payload: res.data.response })
    }
  },
  fetchearItinerary: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('https://mytineraryrob.herokuapp.com/api/allitineraries/' + id);
      if (res.data.sucess) {
        dispatch({type: 'itineraries/fetchOne', payload: res.data.response })
      }
    }
  },
  fetchearItinerarioPorCiudad: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('https://mytineraryrob.herokuapp.com/api/allitineraries/city/' + id);
      // console.log(res.data)
      dispatch({type: 'itineraryCiudad/fetch', payload: res.data})
    }
  },
  LikesDislikes: (likesObj) =>{
    return async (dispatch, getState) =>{
      const token = localStorage.getItem('token')
      try{
        const res = await axios.put('https://mytineraryrob.herokuapp.com/api/likesAndDislike/', {...likesObj}, {
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