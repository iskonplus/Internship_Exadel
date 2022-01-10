import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidatesService } from "../../services/candidates.service";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { updateCandidate, loadCandidatesList, loadCandidatesListFail, loadCandidatesListSuccess, updateCandidateSuccess } from "./actions";


@Injectable()
export class CandidatesEffects {

  loadCandidatesList$ = createEffect(() => this.actions$.pipe(
    ofType(loadCandidatesList.type),
    mergeMap(({ filters }) => this.candidatesService.loadCandidates(filters)
      .pipe(
        map(candidatesList => loadCandidatesListSuccess({ candidatesList })),
        catchError(() => of(loadCandidatesListFail({ message: 'Loading candidates list failed' })))
      )
    )
  )
  );

  updateCandidate$ = createEffect(() => this.actions$.pipe(
    ofType(updateCandidate.type),
    mergeMap(({ candidate }) => this.candidatesService.updateCandidate(candidate)
      .pipe(
        map(() => updateCandidateSuccess({ candidate })),
        catchError(() => of(loadCandidatesListFail({ message: 'Loading candidates list failed' })))
      )
    )
  )
  );


  constructor(
    private actions$: Actions,
    private candidatesService: CandidatesService,

  ) { }

}
