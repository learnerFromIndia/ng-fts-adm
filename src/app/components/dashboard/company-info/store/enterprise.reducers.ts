import * as enterpriseActions from './enterprise.actions';
import {Enterprise,Subsidiary,CabDetail} from '../../../../model/index';


export interface State{
    enterprise:Enterprise;
    addMode:boolean;
    selected:Enterprise;
    editMode:boolean;
    selectedIndex:number;
}

var cabTypes: CabDetail[] = [];
cabTypes.push(new CabDetail(0, '', 0, ''));

var subsidiaries: Subsidiary[] = [];
subsidiaries.push(new Subsidiary(0, '', '', '', '', '', '', '' , '', 0, 0, '', '', '', '', '', '' ,'', cabTypes));

const initialState:State= {
    enterprise:new Enterprise(0, '', '', subsidiaries),
    addMode:true,
    selected: new Enterprise(0, '', '', subsidiaries),
    editMode:false,
    selectedIndex:-1
};

export function enterpriseReducer(state = initialState, action:enterpriseActions.enterpriseActionsBundle){ 

    switch(action.type){
        case(enterpriseActions.ADD_ENTERPRISE):
         return {
             ...state,
             enterprise:action.enterprise,
             addMode:true,
             editMode:true
         };
         case(enterpriseActions.DISPLAY_ADD_ENTERPRISE):
         return{
             ...state,
             addMode:true,
             editMode:true,
             enterprise:state.enterprise,
             selected:state.enterprise
         };
         case(enterpriseActions.UPDATE_ENTERPRISE):
         return{
             ...state,
             enterprise:action.enterprise,
             selected:state.enterprise
         };
         default:
         return{
             ...state
         }
    }

}