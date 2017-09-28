import * as employeeActions from './employees.actions';
import {Employee} from '../../../../model/index';


export interface State{
    employeeList:Employee[];
    addMode:boolean;
    selected:Employee;
    editMode:boolean;
    selectedIndex:number;
}

const initialState:State= {
    employeeList:
    [
        new Employee('Ajith Kumar s','12127','male','opositive','Gsa Sandalwoods Apartment','Yes','12:30PM','823123122','823123122')
        ,new Employee('Amit Kumar s','12127','male','opositive','Gsa Sandalwoods Apartment','Yes','12:30PM','823123122','823123122'),
        new Employee('Umang Kumar s','12127','male','opositive','Gsa Sandalwoods Apartment','Yes','12:30PM','823123122','823123122')
    ],
    addMode:true,
    selected:new Employee('','','','','','','','',''),
    editMode:false,
    selectedIndex:-1
};

export function employeesReducer(state = initialState,action:employeeActions.employeesActionsBundle){ 

    switch(action.type){
     case(employeeActions.ADD_EMPLOYEE):
      const employeeList = state.employeeList;
      employeeList.push(action.employee);
       return {
           ...state,
           employeeList:employeeList
       };
       case(employeeActions.DISPLAY_ADD_FORM):
       return{
           ...state,
           addMode:true,
           editMode:false,
           selected:new Employee('','','','','','','','','')
       };
       case(employeeActions.HIDE_ADD_FORM):
       return{
           ...state,
           addMode:false,
           editMode:false,
           selected:state.employeeList[0]
       };
       case(employeeActions.SET_SELECTED_EMPLOYEE):
       return{
           ...state,
           selected:action.selectedEmployee,
           selectedIndex:action.selectedIndex
       };
       case(employeeActions.SET_EDIT_MODE):
         return{
             ...state,
             editMode:true,
             addMode:true,
             selected:action.selectedEmployee
         };
       case(employeeActions.UPDATE_EMPLOYEE):
         var oldList = [...state.employeeList];
         oldList[state.selectedIndex] = action.employee;
         return{
             ...state,
             employeeList:oldList,
             selected:oldList[state.selectedIndex]
         }
       case(employeeActions.DELETE_EMPLOYEE):
       const list = [...state.employeeList];
       list.splice(state.selectedIndex,1);
        return{
            ...state,
            employeeList:list,
            selectedIndex:0,
            selected:list[0]
        }
      default:
       return{
           ...state
       }
    }

}