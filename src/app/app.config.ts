import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { appReducers } from './appState.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //ngrx:
    provideStore(appReducers),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    })
  ]
};
