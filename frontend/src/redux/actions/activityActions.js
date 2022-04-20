import axios from "axios";
import api from '../../api/api';


// const refactoredActivityForEachItinerary =  (itineraryId)=>{
//   return async (dispatch, getState) => {
//     const response = await get(`activities/${itineraryId}`);
    
//     if(!response.success){
//       //notify to the user
//       return response;
//     }

//     return response;
//   }
// };

const activitiesActions = {
  activityForEachItinerary: (itineraryId) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get(
          `${api.url}/api/activities/${itineraryId}`
        );
        return { success: true, response: response.data.response };
      } catch (error) {
        return {
          success: false,
          response: error,
        };
      }
    };
  },
};
export default activitiesActions;