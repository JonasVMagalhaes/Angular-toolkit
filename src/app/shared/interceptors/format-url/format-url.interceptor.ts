import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export function FormatUrlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if(event.type === HttpEventType.Sent) {
      const request = event as unknown as HttpRequest<any>;
      console.log("Formatou URL antes de enviar");
    }
  }));
}
