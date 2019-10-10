import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../core/subscription/subscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-subscription-activate-page',
  templateUrl: './subscription-activate-page.component.html',
  styleUrls: ['./subscription-activate-page.component.css']
})
export class SubscriptionActivatePageComponent implements OnInit {
  error: string;
  success: string;

  constructor(
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.subscriptionService.activate(params['key']).subscribe(
        () => {
          this.error = null;
          this.success = 'OK';
        },
        () => {
          this.success = null;
          this.error = 'ERROR';
        }
      );
    });
  }
}
