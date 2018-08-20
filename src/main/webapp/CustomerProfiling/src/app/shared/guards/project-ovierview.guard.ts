import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './../services/shared.service';

@Injectable()
export class POGuard implements CanActivate {
    constructor(private sharedService: SharedService, private _router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.sharedService.getProjectId()) {
            this._router.navigate(['/projects']);
            return false;
        }
        return true;
    }
}
