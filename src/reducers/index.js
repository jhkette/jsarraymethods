export default (state =[], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
           return action.payload;
        case 'GET_METHOD':
            return action.payload;
        default: 
        return state;
     

    }  
}