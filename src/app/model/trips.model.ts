
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
    mainPoints:IntermediatePoint[],
    destination:string,
    cabs:Cab[]
}

export interface IntermediatePoint{
    pointId:number,
    point:string
}

export interface Cab{
    cabId:number,
    cabDriver:CabDriver,
    commutters:Commutter[]
}


export class Trips{
    
    constructor(public routes:Route[]){}
}