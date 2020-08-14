export default (state = null, action) => {
    switch(action.type){
       case "GET_METHOD":
           console.log(action.payload)
           return action.payload;
        default: 
        return state;

    }  
}