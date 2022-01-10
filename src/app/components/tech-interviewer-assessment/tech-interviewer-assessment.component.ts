import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-tech-interviewer-assessment',
  templateUrl: './tech-interviewer-assessment.component.html',
  styleUrls: ['./tech-interviewer-assessment.component.scss']
})
export class TechInterviewerAssessmentComponent implements OnInit {

  activeUser: string
  @Input() assessmentsTech
  @Output() changingForm = new EventEmitter<any>()

  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.activeUser = this.userLoginService.activeUser.role
  }

  onChange() {
    this.changingForm.emit(this.assessmentsTech)
  }

  handler(event, id) {

    return /^([0-4])$/.test(event.key) && !this.assessmentsTech[id]
  }
}
