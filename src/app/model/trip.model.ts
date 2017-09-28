
export interface commutters{
    name:string,
    mobileNo:string
}

export class Trip{
 
    constructor (public source:string,public destination:string,public pickupTime:string,public dropTime:string,
        public commutters:commutters[],public availableSeats:number,public status:string){}

}