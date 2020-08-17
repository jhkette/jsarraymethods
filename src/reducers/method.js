export default (state = null, action) => {
    switch(action.type){
        case "GET_ACTION":
            return action.payload;
       case "GET_METHOD":
           return action.payload;
        default: 
        return state;

    }  
}