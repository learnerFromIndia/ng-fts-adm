import * as allocActions from './allocations.actions';
import {Trips} from '../../../../model/index';


export interface State{
    trip:Trips;
    toBeRemoved:{
        cabId:number,
        commutter:{
         name:string
        }
    }
}

const initialState:State= {
    trip : new Trips(
            [
                {
                  routeId:0,
                  source:'Office',
                  destination:'Home',
                  mainPoints:['Hoodi','Kr Puram','Hebbal','Yeshwantpur','Mahalakshmi Layout'],
                  cabs:[
                      {
                          cabId:0,
                          driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                          commutters:[{name:'Ajith' },{name:'Umang'},{name:'Amit'}]
                      },
                      {
                         cabId:1,
                          driver:{
                              name:'Kiran',
                              vehicleNo:'KA 18 KJ 8292'
                          },
                         commutters:[{ name:'Raghav'},{name:'Diwakar'},{name:'Chandran'}]
                      },
                      {
                         cabId:2,
                          driver:{
                               name:'Lokesh',
                              vehicleNo:'KA 06 EF 1200'
                          },
                         commutters:[{ name:'Vignesh'},{name:'Balaji'},{name:'Naveez'}]
                      },
                      {
                         cabId:3,
                          driver:{
                              name:'Sandesh',
                              vehicleNo:'KA 05 MX 7722'
                          },
                         commutters:[{ name:'Prasanna'},{name:'Bala'},{name:'Naveen'}]
                      },
                      {
                         cabId:4,
                          driver:{
                              name:'ShivaKumar',
                              vehicleNo:'KA 18 LK 2832'
                          },
                         commutters:[{ name:'Sudipto'},{name:'Sukumar'},{name:'Kiran'}]
                      },
                      {
                         cabId:5,
                          driver:{
                              name:'Manjunath',
                              vehicleNo:'KA 02 HJ 1289'
                          },
                         commutters:[{ name:'Naga'},{name:'Ashwin'},{name:'Thapa'}]
                      }
                    ]
                },
                {
                      routeId:1,
                      source:'Office',
                      destination:'Home',
                      mainPoints:['Marathalli','HAL','Domlur','Mg Road','Majestic'],
                      cabs:[
                      {
                          cabId:6,
                           driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                          commutters:[{name:'Ajith' },{name:'Umang'},{name:'Amit'}]
                      },
                      {
                         cabId:7,
                          driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                         commutters:[{ name:'Suresh'},{name:'Girish'},{name:'Kiran'}]
                      },
                      {
                         cabId:8,
                          driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                         commutters:[{ name:'Suresh'},{name:'Girish'},{name:'Kiran'}]
                      },
                      {
                         cabId:9,
                          driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                         commutters:[{ name:'Suresh'},{name:'Girish'},{name:'Kiran'}]
                      },
                      {
                         cabId:10,
                          driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                         commutters:[{ name:'Suresh'},{name:'Girish'},{name:'Kiran'}]
                      },
                      {
                         cabId:11,
                          driver:{
                              name:'Ravi Kumar',
                              vehicleNo:'KA 14 ED 4432'
                          },
                         commutters:[{ name:'Suresh'},{name:'Girish'},{name:'Kiran'}]
                      }
                   ]
                }
    ]),
    toBeRemoved:undefined
};

export function allocationsReducer(state = initialState,action:allocActions.allocationsActionsBundle){ 

    switch(action.type){
     case(allocActions.DROP_COMPLETED):
      var trip = state.trip;
       trip.routes.forEach(function(route){
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
           trip:trip,
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