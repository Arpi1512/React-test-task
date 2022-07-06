import userState from "./state";
function reducer(state = userState, action) {
  switch (action.type) {
    case "changeUser":  
                console.log(state)                                                                                                                               
     if(state.items.login === action.payload.login && state.items.password === action.payload.password){
       state.isLogin = true
        window.localStorage.setItem("isLogin",state.isLogin)
     }else{
         state.error = "Incorrect Email or Password"
     }
      break;   
      case "logout":
          window.localStorage.removeItem("isLogin");
          state.isLogin = false
          break;
          default:
  }
  return state;
}
export default reducer;
