import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { appReducers } from './state/app.reducers';
import { UserEffects } from './state/user/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(appReducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(UserEffects),
    provideHttpClient(),
  ],
};
