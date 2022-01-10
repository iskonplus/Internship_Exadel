import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CandidatesService } from 'src/app/services/candidates.service';
import { selectSelectCandidate } from 'src/app/store/candidates/selectors';
import { Candidate, Status } from 'src/app/types/candidate';
import { selectAllSkills } from '../../../store/directory/selectors';
import { map } from 'rxjs/operators';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-admin-window',
	templateUrl: './admin-window.component.html',
	styleUrls: ['./admin-window.component.scss']
})
export class AdminWindowComponent implements OnInit {

	selectedCandidate$: Observable<Candidate>;
	softSkills$: Observable<any[]>;

	assessmentsRecruiter = {};

	assessmentsTech = {
		html: '',
		css: '',
		javaScript: '',
		comment: ''
	};

	selectedCandidate: any;
	transferCandidate: any;

	constructor(private store: Store, private candidatesService: CandidatesService,
		private notificationService: NotificationService) {
		this.selectedCandidate$ = this.store.select(selectSelectCandidate);
		this.selectedCandidate$.subscribe(data => this.selectedCandidate = data);
		this.softSkills$ = this.store.select(selectAllSkills).pipe(
			map(skills => skills.filter(skill => skill.type === 0))
		)
	}

	ngOnInit(): void {
	}

	toTeam() {
		this.candidatesService.setSelectedCandidate(this.selectedCandidate);
	}

	onClick() {
		console.log(this.assessmentsRecruiter);
		console.log(this.assessmentsTech);

		this.assessmentsRecruiter = {}

		this.assessmentsTech = {
			html: '',
			css: '',
			javaScript: '',
			comment: ''
		}
	}

	onRecruiterFormChange(object) {
		this.assessmentsRecruiter = object
	}

	onFormChange(object) {
		this.assessmentsTech = object
	}


	setAcceptStatus() {
		this.selectedCandidate = { ...this.selectedCandidate, status: Status.Accepted };
		const candidatesFromLocalStorage = JSON.parse(localStorage.getItem('Candidate'));
		const index = candidatesFromLocalStorage.findIndex(candidate => candidate.firstName === this.selectedCandidate.firstName && candidate.lastName === this.selectedCandidate.lastName);
		candidatesFromLocalStorage[index] = this.selectedCandidate;
		localStorage.setItem('Candidate', JSON.stringify(candidatesFromLocalStorage));
		this.notificationService.success('Operation was successfully completed');
	}
}
