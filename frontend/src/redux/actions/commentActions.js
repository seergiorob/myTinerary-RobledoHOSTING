import axios from 'axios'
import api from '../../api/api'

const commentActions = {
    addComment: (commentObj, itineraryId) => {
        return async () => {

        try{
            const token = localStorage.getItem('token')
            await axios.post(`${api.url}/api/comments/${itineraryId}`,
            {...commentObj},
            {headers: {"Authorization": `Bearer ${token}` }}
            )
            return{success:true}
        }
        catch(error){
            console.log({success: false, response: error.message})
        } 
    }
    },
    deleteComment: (itineraryId, commentId) => {
        return async () => {
            try{
                const token = localStorage.getItem('token')
                await axios.delete(`${api.url}/api/comments/${itineraryId}/${commentId}`,
                {headers: {"Authorization": `Bearer ${token}` }}
                )
                return{success:true}
            }
            catch(error){
                console.log({success: false, response: error.message})
            } 
        }
    },
    editComment: (itineraryId, editObj) => {
        return async () => {
            try{
                const token = localStorage.getItem('token')
                await axios.put(`${api.url}/api/comments/${itineraryId}`,
                {...editObj},
                {headers: {"Authorization": `Bearer ${token}` }}
                )
                return{success:true}
            }
            catch(error){
                console.log({success: false, response: error.message})
            } 
        }
    }
}

export default commentActions;