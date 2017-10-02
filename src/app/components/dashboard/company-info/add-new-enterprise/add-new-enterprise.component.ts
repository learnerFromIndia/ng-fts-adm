import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../../../store/app.reducers';
import * as fromEnterprise from '../store/enterprise.reducers';
import * as fromEnterpriseActions from '../store/enterprise.actions';
import { Store } from '@ngrx/store';
import { Enterprise } from '../../../../model/index';
import { Subsidiary } from '../../../../model/index';
import { CabDetail } from '../../../../model/index';

@Component({
    selector: 'app-add-new-enterprise',
    templateUrl: './add-new-enterprise.component.html',
    styles: [`
              .displayForm{
                  width:100%;
              }
              .displayHeader{
                  background-color:grey;
                  padding:10px;
              }
              .displayHeader h3{
                  display: inline;
              }
              .displayHeader button{
                  float: right;
                  margin-left:5px;
              }
              .required{
                  color:red;
                  font-size:17px;
                }
                .displayContent{
                  padding:15px;
                  box-shadow: 0px 0px 15px #cdcdcd;
                  max-height:240vh;
                  overflow:hidden;
              } `
    ]
})
export class AddNewEnterpriseComponent implements OnInit {

    enterpriseListObservable: Observable<fromEnterprise.State>;

    @Input()
    state: Enterprise;

    addNewForm: FormGroup;

    constructor(public store: Store<fromApp.AppState>) { }
    
    ngOnInit() {
        this.enterpriseListObservable = this.store.select('enterprises');
        this.addNewForm = new FormGroup(
            {
                entprFullName: new FormControl(this.state.entprFullName, Validators.required),
                entprFullAddress: new FormControl(this.state.entprFullAddress, Validators.required),
                sbsdryFullName: new FormControl(this.state.subsidiaries[0].sbsdryFullName, Validators.required),
                sbsdryFullAddress: new FormControl(this.state.subsidiaries[0].sbsdryFullAddress, Validators.required),
                zipcode: new FormControl(this.state.subsidiaries[0].zipcode, Validators.required),
                primaryContact: new FormControl(this.state.subsidiaries[0].primaryContact, Validators.required),
                secondaryContact: new FormControl(this.state.subsidiaries[0].secondaryContact),
                prmContactNo: new FormControl(this.state.subsidiaries[0].prmContactNo, Validators.required),
                secContactNo: new FormControl(this.state.subsidiaries[0].secContactNo),
                emailId: new FormControl(this.state.subsidiaries[0].emailId, Validators.required),
                totalNoOfEmployees: new FormControl(this.state.subsidiaries[0].totalNoOfEmployees),
                noOfEmpsOptingForTrnsprt: new FormControl(this.state.subsidiaries[0].noOfEmpsOptingForTrnsprt),
                cabProviderEntity: new FormControl(this.state.subsidiaries[0].cabProviderEntity),
                cabProviderEntityAddr: new FormControl(this.state.subsidiaries[0].cabProviderEntityAddr),
                cabProviderEntityPrimContact: new FormControl(this.state.subsidiaries[0].cabProviderEntityPrimContact),
                cabProviderEntitySecContact: new FormControl(this.state.subsidiaries[0].cabProviderEntitySecContact),
                cabProviderEntityPrimContactNo: new FormControl(this.state.subsidiaries[0].cabProviderEntityPrimContactNo),
                cabProviderEntitySecContactNo: new FormControl(this.state.subsidiaries[0].cabProviderEntitySecContactNo),
                areCabsAvlblOnDdmand: new FormControl(this.state.subsidiaries[0].areCabsAvlblOnDdmand),
                cabType: new FormControl(this.state.subsidiaries[0].cabTypes[0].cabType, Validators.required),
                noOfCabs: new FormControl(this.state.subsidiaries[0].cabTypes[0].noOfCabs, Validators.required),
                shiftTimings: new FormControl(this.state.subsidiaries[0].cabTypes[0].shiftTimings, Validators.required)
            });
    }
    onSave() {
        var newCabDetail = new CabDetail(0, this.addNewForm.get('cabType').value, this.addNewForm.get('noOfCabs').value,
            this.addNewForm.get('shiftTimings').value);
        var cabTypes: CabDetail[] = [];
        cabTypes.push(newCabDetail);

        var newSubsidiary = new Subsidiary(0, this.addNewForm.get('sbsdryFullName').value,
            this.addNewForm.get('sbsdryFullAddress').value, this.addNewForm.get('zipcode').value,
            this.addNewForm.get('primaryContact').value, this.addNewForm.get('secondaryContact').value,
            this.addNewForm.get('prmContactNo').value, this.addNewForm.get('secContactNo').value,
            this.addNewForm.get('emailId').value, this.addNewForm.get('totalNoOfEmployees').value,
            this.addNewForm.get('noOfEmpsOptingForTrnsprt').value, this.addNewForm.get('cabProviderEntity').value,
            this.addNewForm.get('cabProviderEntityAddr').value, this.addNewForm.get('cabProviderEntityPrimContact').value,
            this.addNewForm.get('cabProviderEntitySecContact').value, this.addNewForm.get('cabProviderEntityPrimContactNo').value,
            this.addNewForm.get('cabProviderEntitySecContactNo').value, this.addNewForm.get('areCabsAvlblOnDdmand').value, cabTypes);

        var subsidiaries: Subsidiary[] = [];
        subsidiaries.push(newSubsidiary);
        var newEnterprise = new Enterprise(0, this.addNewForm.get('entprFullName').value, this.addNewForm.get('entprFullAddress').value, subsidiaries);
        this.store.dispatch(new fromEnterpriseActions.addEnterprise(newEnterprise));
    }

    edit() {

        var updatedCabDetail = new CabDetail(0, this.addNewForm.get('cabType').value, this.addNewForm.get('noOfCabs').value,
            this.addNewForm.get('shiftTimings').value);
        var cabTypes: CabDetail[] = [];
        cabTypes.push(updatedCabDetail);

        var updatedSubsidiary = new Subsidiary(0, this.addNewForm.get('sbsdryFullName').value,
            this.addNewForm.get('sbsdryFullAddress').value, this.addNewForm.get('zipcode').value,
            this.addNewForm.get('primaryContact').value, this.addNewForm.get('secondaryContact').value,
            this.addNewForm.get('prmContactNo').value, this.addNewForm.get('secContactNo').value,
            this.addNewForm.get('emailId').value, this.addNewForm.get('totalNoOfEmployees').value,
            this.addNewForm.get('noOfEmpsOptingForTrnsprt').value, this.addNewForm.get('cabProviderEntity').value,
            this.addNewForm.get('cabProviderEntityAddr').value, this.addNewForm.get('cabProviderEntityPrimContact').value,
            this.addNewForm.get('cabProviderEntitySecContact').value, this.addNewForm.get('cabProviderEntityPrimContactNo').value,
            this.addNewForm.get('cabProviderEntitySecContactNo').value, this.addNewForm.get('areCabsAvlblOnDdmand').value, cabTypes);

        var subsidiaries: Subsidiary[] = [];
        subsidiaries.push(updatedSubsidiary);

        var updatedEnterprise = new Enterprise(0, this.addNewForm.get('entprFullName').value, this.addNewForm.get('entprFullAddress').value, subsidiaries);

        this.store.dispatch(new fromEnterpriseActions.updateEnterprise(updatedEnterprise));

    }
}
