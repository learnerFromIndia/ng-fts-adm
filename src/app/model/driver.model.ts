import {Trip} from './index';

export class Driver{

    constructor(public driverName:string,public vehicle:string,public noOfSeaters:number,
        public vehicleNumber:string,public kyc:string,public active:string,public primaryContact:string,
        public emergencyContact:string,public routePreference:string,public trips:Trip[]){}

}