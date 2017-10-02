export class Enterprise{

    constructor(public entprId:number,public entprFullName:string, public entprFullAddress:string, public subsidiaries:Subsidiary[]){}

}

export class Subsidiary{
    
        constructor(public sbsdryId:number, public sbsdryFullName:string, public sbsdryFullAddress:string, public zipcode:string, 
            public primaryContact:string, public secondaryContact:string, public prmContactNo:string, public secContactNo:string, 
            public emailId:string, public totalNoOfEmployees:number, public noOfEmpsOptingForTrnsprt:number, public cabProviderEntity:string, 
            public cabProviderEntityAddr:string, public cabProviderEntityPrimContact:string, public cabProviderEntitySecContact:string, 
            public cabProviderEntityPrimContactNo:string, public cabProviderEntitySecContactNo:string,  
            public areCabsAvlblOnDdmand:string, public cabTypes:CabDetail[]){}
    
}

export class CabDetail{
    
        constructor(public cabTypeId:number, public cabType:string, public noOfCabs:number, public shiftTimings:string){}
    
}