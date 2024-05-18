import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { GenericErrorInterceptor } from './shared/interceptors/generic-errors/generic-errors.interceptor';
import { FormatUrlInterceptor } from './shared/interceptors/format-url/format-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        FormatUrlInterceptor,
        GenericErrorInterceptor
      ])
    )
  ]
};
