export default (state = null, action) => {
    switch(action.type){
        case "GET_OPERATION":
            return action.payload;
      
        default: 
        return state;

    }  
}