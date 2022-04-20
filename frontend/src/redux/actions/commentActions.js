import axios from 'axios'

const commentActions = {
    addComment: (commentObj, itineraryId) => {
        return async () => {

        try{
            const token = localStorage.getItem('token')
            await axios.post(`https://http://localhost:4000/api/comments/${itineraryId}`,
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
                await axios.delete(`https://http://localhost:4000/api/comments/${itineraryId}/${commentId}`,
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
                await axios.put(`https://http://localhost:4000/api/comments/${itineraryId}`,
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