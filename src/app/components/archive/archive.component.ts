import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CandidatesService } from 'src/app/services/candidates.service';
import { loadCandidatesList } from 'src/app/store/candidates/actions';
import { Candidate } from 'src/app/types/candidate';

@Component({
	selector: 'app-archive',
	templateUrl: './archive.component.html',
	styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

	allCandidates: any;

	constructor(private store: Store, private candidatesService: CandidatesService) { }

	toArchive() {
		this.store.select(loadCandidatesList).subscribe(data => this.allCandidates = data);
		console.log(this.allCandidates);
	}

	ngOnInit(): void {
	}

}
