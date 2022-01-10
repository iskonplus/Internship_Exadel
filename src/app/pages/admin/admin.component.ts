import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	selectedPage: string = "Home";

	constructor(private adminService: AdminService) { }

	ngOnInit(): void {
		this.adminService.getSelectedPage().subscribe((value) => {
			this.selectedPage = value;
		})
	};

}
