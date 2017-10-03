import * as allocActions from './allocations.actions';
import { CabStats } from '../../../../model/index';
import { Route } from '../../../../model/trips.model';

export interface State {
    routes: Route[];
    cabDetail: CabStats[];
    totalNoOfCabs:number;
    noOfEmployeesAllotted:number;
    noOfEmptySeats:number;
    noOfPeopleRemaing:number;
    toBeRemoved: {
        cabId: number,
        commutter: {
            name: string
        }
    }
}

const initialState: State = {
    routes: undefined,
    cabDetail: undefined,
    totalNoOfCabs:undefined,
    noOfEmployeesAllotted:undefined,
    noOfEmptySeats:undefined,
    noOfPeopleRemaing:undefined,
    toBeRemoved: undefined
};

export function allocationsReducer(state = initialState, action: allocActions.allocationsActionsBundle) {
    switch (action.type) {
        case (allocActions.LOAD_ROUTES):
            return {
                ...state,
                cabDetail: action.trip.cabDetail,
                totalNoOfCabs:action.trip.totalNoOfCabs,
                noOfEmployeesAllotted:action.trip.noOfEmployeesAllotted,
                noOfEmptySeats:action.trip.noOfEmptySeats,
                noOfPeopleRemaing:action.trip.noOfPeopleRemaing,
                routes: action.trip.routes
            };
        case (allocActions.DROP_COMPLETED):
            var routes = state.routes;
            routes.forEach(function (route) {
                route.cabs.forEach(function (cab) {
                    if (state.toBeRemoved.cabId === action.droppingPlaceId) {
                        return {
                            ...state,
                            toBeRemoved: undefined
                        }
                    } else if (cab.cabId === state.toBeRemoved.cabId) {
                        cab.commutters = cab.commutters.filter(function (commutter) {
                            return (commutter.name !== state.toBeRemoved.commutter.name)
                        });
                    } else if (cab.cabId === action.droppingPlaceId) {
                        cab.commutters.push(state.toBeRemoved.commutter);
                    }
                });
            });

            return {
                ...state,
                routes: routes,
                toBeRemoved: undefined
            };
        case (allocActions.TO_BE_REMOVED):
            console.log(action.toBeDropped);
            return {
                ...state,
                toBeRemoved: action.toBeDropped
            };
        default:
            return {
                ...state
            }
    }

}