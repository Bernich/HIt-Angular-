import { Route } from '@angular/router';

import { NewHeaderComponent } from './news-header.component';

export const headerRoute: Route = {
  path: '',
  component: NewHeaderComponent,
  outlet: 'header'
};
