import * as allocActions from './allocations.actions';
import {Trips} from '../../../../model/index';
import { Route } from '../../../../model/trips.model';

export interface State{
    routes:Route[];
    toBeRemoved:{
        cabId:number,
        commutter:{
         name:string
        }
    }
}

const initialState:State= {
    routes : undefined,
    toBeRemoved:undefined
};

export function allocationsReducer(state = initialState,action:allocActions.allocationsActionsBundle){ 
     switch(action.type){
    case(allocActions.LOAD_ROUTES):
        return{
            ...state,
            routes:action.routes
        };
     case(allocActions.DROP_COMPLETED):
      var routes = state.routes;
      routes.forEach(function(route){
         route.cabs.forEach(function(cab){
            if(state.toBeRemoved.cabId === action.droppingPlaceId){
               return{
                ...state,
                toBeRemoved:undefined
               }
            }else if(cab.cabId === state.toBeRemoved.cabId){
               cab.commutters = cab.commutters.filter(function(commutter){
                return (commutter.name !== state.toBeRemoved.commutter.name)
               });
            }else if(cab.cabId === action.droppingPlaceId){
               cab.commutters.push(state.toBeRemoved.commutter);
            }
         });
      });

      return {
           ...state,
           routes:routes,
           toBeRemoved:undefined
       };
       case(allocActions.TO_BE_REMOVED):
       console.log(action.toBeDropped);
       return{
           ...state,
           toBeRemoved:action.toBeDropped
       };
      default:
       return{
           ...state
       }
    }

}