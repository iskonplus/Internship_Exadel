import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CandidatesService } from 'src/app/services/candidates.service';
import { UsersService } from 'src/app/services/users.service';
import { Candidate } from 'src/app/types/candidate';
import { SendboxTeam } from 'src/app/types/sendboxTeam';
import { User } from 'src/app/types/user';

@Component({
	selector: 'app-team-constructor',
	templateUrl: './team-constructor.component.html',
	styleUrls: ['./team-constructor.component.scss']
})
export class TeamConstructorComponent implements OnInit {

	toppings = new FormControl();
	selectedMentors: User[] = [];
	selectedCandidates: Candidate[] = [];
	mentors: User[] = this.usersServics.mentors;
	team: SendboxTeam;
	error: string;

	constructor(private usersServics: UsersService, private candidatesService: CandidatesService) { }

	removeCandidate(a: Candidate) {
		for (let i = 0; i < this.selectedCandidates.length; i++) {
			if (this.selectedCandidates[i] === a) {
				this.selectedCandidates.splice(i, 1);
				if(this.selectedCandidates.length === 0) {
					this.selectedCandidates = [];
				}
			}
		}

		console.log(this.selectedCandidates);
	}

	sendNotify(): void {
		if (this.selectedMentors !== [] && this.selectedCandidates !== [] && this.selectedMentors.length !== 0 && this.selectedCandidates.length !== 0) {
			this.team = {
				mentors: this.selectedMentors,
				candidates: this.selectedCandidates
			}

			this.selectedMentors = [];
			this.selectedCandidates = [];

			console.log(this.team);
		} else {
			alert("The constructor is not completely filled");
		};

	}

	ngOnInit(): void {
		this.candidatesService.getSelectedCandidate().subscribe((value) => {
			if (value !== null) {
				if (this.selectedCandidates.length === 5) {
					alert("The maximum number of team members has been reached.");
				} else if (this.selectedCandidates.length === 0) {
					this.selectedCandidates.push(value);
				} else if (this.selectedCandidates.length !== 0 && !this.selectedCandidates.includes(value)) {
					this.selectedCandidates.push(value);
				}
			}
		});

		console.log(this.selectedCandidates);
	}

}
