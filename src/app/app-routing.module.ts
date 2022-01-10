import { CandidatesResolver } from './resolvers/candidates.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { FormComponent } from './pages/candidate-form/form.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { TechInterviewerComponent } from './pages/tech-interviewer/tech-interviewer.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserGuard } from './guards/user.guard';
import { DirectoryResolver } from './resolvers/directory.resolver';

const routes: Routes = [
	{ path: '', component: UserLoginComponent, canActivate: [UserGuard] },
	{ path: 'form', component: FormComponent, resolve: { directory: DirectoryResolver } },
	{ path: 'recruiter', component: RecruiterComponent, canActivate: [UserGuard], resolve: { candidates: CandidatesResolver, directory: DirectoryResolver } },
	{ path: 'techInterviewer', component: TechInterviewerComponent, canActivate: [UserGuard], resolve: { candidates: CandidatesResolver, directory: DirectoryResolver } },
	{ path: 'mentor', component: MentorComponent, canActivate: [UserGuard], resolve: { candidates: CandidatesResolver, directory: DirectoryResolver } },
	{ path: 'manager', component: ManagerComponent, canActivate: [UserGuard], resolve: { candidates: CandidatesResolver, directory: DirectoryResolver } },
	{ path: 'admin', component: AdminComponent, canActivate: [UserGuard], resolve: { candidates: CandidatesResolver, directory: DirectoryResolver } },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule,]
})
export class AppRoutingModule { }
