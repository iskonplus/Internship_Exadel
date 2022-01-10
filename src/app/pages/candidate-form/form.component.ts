import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { FormService } from '../../services/form.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAllCountries,
  selectAllEnglishLevels,
  selectAllSpecializations,
  selectCitiesByCountryId,
} from '../../store/directory/selectors';
import { loadCitiesByCountryId } from '../../store/directory/actions';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  // allSpecializations$: Observable<any[]>;
  allSpecializations:any[];
  allEnglishLevels$: Observable<any[]>;
  allCountries$: Observable<any[]>;
  citiesByCountryId$: Observable<any[]>;
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  errorCheckBox = 'errorCheckBox';
  isCloseTermsClass = 'wrapper_terms disable';


  intern = {
    firstName: '',
    lastName: '',
    email: '',
    skype: '',
    phone: '',
    country: '',
    city: '',
    englishLevel: '',
    specialization: '',
    checkbox: false,
    cv: null,
  };

  constructor(private formService: FormService,
    private notificationService: NotificationService,
    private store: Store, private adminService: AdminService) {

    // this.allSpecializations$ = this.store.select(selectAllSpecializations);

    localStorage.getItem('Subtask') && this.adminService.getSubtaskLocalStorage(); // moced data
    this.allSpecializations = this.adminService.subtasks.filter(el => el.isActive);

    this.allEnglishLevels$ = this.store.select(selectAllEnglishLevels);
    this.allCountries$ = this.store.select(selectAllCountries);
    this.citiesByCountryId$ = this.store.select(selectCitiesByCountryId);
  }

  ngOnInit(): void {
  }

  stop(event: Event) {
    event.preventDefault();
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    this.intern.cv = fileInputEvent.target.files[0].name;
  }

  closeTerms() {
    this.isCloseTermsClass === 'wrapper_terms' ?
      this.isCloseTermsClass = 'wrapper_terms disable' :
      this.isCloseTermsClass = 'wrapper_terms';
  }

  toggleClassCheckBox(event) {
    if (event.target.className === 'linkCheckBox') {
      this.closeTerms();
    } else {
      this.intern.checkbox ?
        this.errorCheckBox = 'errorCheckBox active' :
        this.errorCheckBox = 'errorCheckBox';
    }
  }

  getCountryId(value) {
    this.store.dispatch(loadCitiesByCountryId({ countryId: value }));
  }

  clickSubmit(internForm: any): void {

    if (this.intern.checkbox) {

      if (internForm.valid) {

        this.notificationService.success(`${this.intern.firstName} your form has been submitted!`);
        this.formService.saveDataIntern(this.intern); // data to local storage;

        // this.formService.postData(this.intern).subscribe(
        //   (data: any) => {
        //     console.log('registered')
        //   }
        // )

        this.errorCheckBox = 'errorCheckBox';
        internForm.reset();
        internForm.setPristine();

      } else {

        this.notificationService.error('Oops, something went wrong!');
      }

    } else {
      this.errorCheckBox = 'errorCheckBox active';
    }
  }
}
