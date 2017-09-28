import * as AuthActions from './auth.actions';

export interface State{
    token:string,
    isAuthenticated:boolean,
    username:string,
}

const initialState:State= {
    token:null,
    isAuthenticated:false,
    username:null
};

export function authReducer(state = initialState,action:AuthActions.AuthActionsBundle){ 

    switch(action.type){
     case(AuthActions.LOGIN):
       return {
           ...state,
           isAuthenticated:true,
           username:action.username
       };
     case(AuthActions.LOGOUT): 
       return{
           ...state,
           isAuthenticated:false,
           username:null
       };
     case(AuthActions.SET_TOKEN):
      return{
          ...state,
          token:action.token
      };
      default:
        if(localStorage.getItem('auth')){
            var refreshState = JSON.parse(localStorage.getItem('auth'));
         return {
             ...refreshState
         }
        }else{
            return {
                ...state
            }
        }
    }

}