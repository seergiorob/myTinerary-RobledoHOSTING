import axios from "axios";
// import {get} from '@api/index';


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
          `http://localhost:4000/api/activities/${itineraryId}`
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