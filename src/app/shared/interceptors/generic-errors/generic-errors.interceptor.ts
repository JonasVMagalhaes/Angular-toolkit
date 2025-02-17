import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export function GenericErrorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if(event.type === HttpEventType.Response) {
      const response = event as HttpResponse<any>;
      console.log(response.status);
      console.log("Alerta de erro genérico ao responder");
    }
  }));
}
