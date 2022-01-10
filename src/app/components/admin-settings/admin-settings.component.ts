import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss'],
  providers: [AdminService],
})
export class AdminSettingsComponent {

  isSpecialization = [];
  isRole = [];
  allComplete: boolean = false;
  isInputValueAddSpecializationData: string;
  nameForDelete: string;
  isDisabled = true;
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  validPassword = '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}';
  isEmailUser: string;


  dataSpecialization = {
    skill: 'All specialization',
    isActive: false,
    subtasks: []
  };


  constructor(private adminService: AdminService, private notificationService: NotificationService) { }

  ngOnInit(): void {

    // this.adminService.getSettingRequest('admin/getallspecializations')  //Backend data
    //   .subscribe((data: any) => {
    //     console.log(data)
    //     this.dataSpecialization.subtasks = [...data];
    //   });

    localStorage.getItem('Subtask') && this.adminService.getSubtaskLocalStorage(); //moced data
    this.dataSpecialization.subtasks = this.adminService.subtasks;
    
    this.isRole = this.adminService.isRole;
  }



  updateAllComplete() {
    this.allComplete = this.dataSpecialization.subtasks != null && this.dataSpecialization.subtasks.every(t => t.isActive);
  }

  someComplete(): boolean {
    if (this.dataSpecialization.subtasks == null) {


      return false;
    }

    return this.dataSpecialization.subtasks.filter(t => t.isActive).length > 0 && !this.allComplete;
  }

  setAll(isActive: boolean) {
    this.isDisabled = false;

    this.allComplete = isActive;
    if (this.dataSpecialization.subtasks == null) {

      return;
    }

    this.dataSpecialization.subtasks.forEach(t => t.isActive = isActive);
  }

  addSpecialization() {

    let hasSpecialization = this.dataSpecialization.subtasks.find(el => {
      return el.name.toUpperCase() === this.isInputValueAddSpecializationData.toUpperCase();
    });


    if (hasSpecialization) {
      this.notificationService.error('This specialization already exists!');
    } else {
      this.notificationService.success('Specialization added!');
      this.isDisabled = false;

      const id = (this.dataSpecialization.subtasks[this.dataSpecialization.subtasks.length - 1].id) + 1;

      this.dataSpecialization.subtasks.push({
        id: id,
        name:
          this.isInputValueAddSpecializationData.charAt(0).toUpperCase() +
          this.isInputValueAddSpecializationData.slice(1),
        isActive: false,
      });
      this.isInputValueAddSpecializationData = '';

    }
  }


  deleteSpecialization(e: Event) {
    this.isDisabled = false;

    if (e.target["className"] === 'button_delete') {
      e.target['parentElement'].remove();

      this.nameForDelete = e.target['parentElement'].__ngContext__[26];

      this.dataSpecialization.subtasks = this.dataSpecialization.subtasks.filter(el => {
        return el['name'] !== this.nameForDelete && el
      });

    }
  }

  newUserSubmit(newUserForm: any) {
    newUserForm.value.role = newUserForm.value.role === 'TechInterviewer' ?
      'techInterviewer' :
      newUserForm.value.role.toLowerCase();

    this.isEmailUser = newUserForm.value.email;
    // this.adminService.saveNewUser(newUserForm.value);

    this.adminService.postSettingRequest(newUserForm.value, 'admin/addinguser')
      .subscribe((data: any) => {
        this.notificationService.success(`User ${this.isEmailUser} was added!`);
      },
        (error: Error) => {
          this.notificationService.error('Oops, something went wrong!');
          console.log(error);
        }

      );
    newUserForm.reset();
  }

  deleteUserSubmit(deleteUserForm: any) {
    // this.adminService.deleteUser(deleteUserForm.value.email);
    this.isEmailUser = deleteUserForm.value.email;

    this.adminService.deleteSettingRequest(deleteUserForm.value.email, 'admin/deleteuser')
      .subscribe((data: any) => {
        this.notificationService.success(`User ${this.isEmailUser} has been deleted!`);
      },
        (error: Error) => {
          console.log(error);
          this.notificationService.error(`User ${this.isEmailUser} has not been deleted!`);
        }
      );
    deleteUserForm.reset();
  }


  saveChangesSpecializationData() {
    this.isDisabled = true;
    this.notificationService.success(`The data has been saved!`);
    // console.log(this.dataSpecialization.subtasks);
    this.adminService.setSubtaskLocalStorage(this.dataSpecialization.subtasks);

    // this.adminService.postSettingRequest(this.dataSpecialization.subtasks, 'admin/savespecializations')
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     this.notificationService.success(`The data has been saved!`);
    //   },
    //     (error: Error) => {
    //       console.log(error);
    //       this.notificationService.error(`The data was not saved!`);
    //     }
    //   );



    // this.dataSpecialization.subtasks.forEach((el) => {
    //   el.isActive && this.isSpecialization.push(el.skill);
    // });

    // this.adminService.postSettingRequest(this.isSpecialization, 'https://exadel3team.myapptechka.by/form/specialization')
    // .subscribe((data: any) => console.log(data),
    //   (error: Error) => console.log(error)
    // );

    this.isSpecialization = [];

  }

}
