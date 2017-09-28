import * as cabsActions from './cabs.actions';
import {Driver,Trip} from '../../../../model/index';


export interface State{
    driverList:Driver[];
    addMode:boolean;
    selected:Driver;
    editMode:boolean;
    selectedIndex:number;
}

const initialState:State= {
    driverList:
    [
      new Driver('Ajith Kumar s','Maruthi Suzuki Dzire',3,'KA 14 ED 5112','No','Yes','7795540839','None','Hoodi',[
        new Trip('Home','Office','9:30 AM','10:45 AM',[{name:'Ram',mobileNo:'9323322212'},{name:'Umang',mobileNo:'9323322212'},{name:'Amit',mobileNo:'9323322212'}],0,'inProgress'),
        new Trip('Office','Home','4:30 PM','06:45 PM',[{name:'Rahim',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'}],0,'Complete'),
        new Trip('Office','Home','9:30 PM','10:45 PM',[{name:'Jony',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'}],0,'Not Started')]),
      new Driver('Amit Kumar Chaturvedi','Hyundai Grand i10',3,'KA 14 MD 8766','No','Yes','7022464545','None','Kadugodi',[
        new Trip('Home','Office','9:30 AM','10:45 AM',[{name:'Kishan',mobileNo:'9323322212'},{name:'Umang',mobileNo:'9323322212'},{name:'Amit',mobileNo:'9323322212'}],0,'inProgress'),
        new Trip('Office','Home','4:30 PM','06:45 PM',[{name:'Kiran',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'}],0,'Complete'),
        new Trip('Office','Home','9:30 PM','10:45 PM',[{name:'Monika',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'}],0,'Not Started')]),
      new Driver('Umang Mishra','Tata Sumo',6,'KA 14 HK 9088','Yes','No','8792761679','None','Whitefield',[
        new Trip('Home','Office','9:30 AM','10:45 AM',[{name:'Kavya',mobileNo:'9323322212'},{name:'Umang',mobileNo:'9323322212'},{name:'Amit',mobileNo:'9323322212'}],0,'inProgress'),
        new Trip('Office','Home','4:30 PM','06:45 PM',[{name:'Suresh',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'}],0,'Complete'),
        new Trip('Office','Home','9:30 PM','10:45 PM',[{name:'Ramesh',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'},{name:'Ajith',mobileNo:'9323322212'}],0,'Not Started')])
    ],
    addMode:true,
    selected:new Driver('','',0,'','','','','','',null),
    editMode:false,
    selectedIndex:-1
};

export function cabsReducer(state = initialState,action:cabsActions.cabsActionsBundle){ 

    switch(action.type){
     case(cabsActions.ADD_DRIVER):
      const driverList = state.driverList;
      driverList.push(action.driver);
       return {
           ...state,
           driverList:driverList
       };
       case(cabsActions.DISPLAY_ADD_FORM):
       return{
           ...state,
           addMode:true,
           editMode:false,
           selected:new Driver('','',0,'','','','','','',null)
       };
       case(cabsActions.HIDE_ADD_FORM):
       return{
           ...state,
           addMode:false,
           editMode:false,
           selected:state.driverList[0]
       };
       case(cabsActions.SET_SELECTED_DRIVER):
       return{
           ...state,
           selected:action.selectedDriver,
           selectedIndex:action.selectedIndex
       };
       case(cabsActions.SET_EDIT_MODE):
         return{
             ...state,
             editMode:true,
             addMode:true,
             selected:action.selectedDriver
         };
       case(cabsActions.UPDATE_DRIVER):
         var oldList = [...state.driverList];
         oldList[state.selectedIndex] = action.driver;
         console.log(oldList[state.selectedIndex]);
         return{
             ...state,
             driverList:oldList,
             selected:oldList[state.selectedIndex]
         }
       case(cabsActions.DELETE_DRIVER):
       const list = [...state.driverList];
       list.splice(state.selectedIndex,1);
        return{
            ...state,
            driverList:list,
            selectedIndex:0,
            selected:list[0]
        }
      default:
       return{
           ...state
       }
    }

}