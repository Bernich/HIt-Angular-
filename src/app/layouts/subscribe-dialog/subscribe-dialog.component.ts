import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../core/subscription/subscription.service';
import { ISubscriber } from '../../shared/model/subscriber.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-subscribe-dialog',
    templateUrl: './subscribe-dialog.component.html',
    styleUrls: ['./subscribe-dialog.component.css']
})
export class SubscribeDialogComponent implements OnInit {
    fullname: string;
    userEmail: string;
    authenticationError: boolean;
    authenticationPass: boolean;

    constructor(private subscription: SubscriptionService) {}

    ngOnInit() {}

    subscribe() {
        this.subscription.create({ name: this.fullname, email: this.userEmail }).subscribe(
            (res: HttpResponse<ISubscriber>) => {
                this.authenticationError = false;
                this.authenticationPass = true;

                this.fullname = '';
                this.userEmail = '';
            },
            (err: HttpErrorResponse) => {
                this.authenticationError = true;
                this.authenticationPass = false;

                this.fullname = '';
                this.userEmail = '';
            }
        );
    }
}
