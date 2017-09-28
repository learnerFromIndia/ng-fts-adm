
export interface Commutter{
    name:string
}

export interface CabDriver{
  name:string,
  vehicleNo:string
    
}
export interface Route{
    routeId:number,
    source:string,
    mainPoints:string[],
    destination:string,
    cabs:Cab[]
}
export interface Cab{
    cabId:number,
    driver:CabDriver,
    commutters:Commutter[]
}


export class Trips{
    
    constructor(public routes:Route[]){}
}