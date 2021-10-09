import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  public generateNumbers(count: number): Observable<number> {
    return new Observable((myObserver: Observer<number>)=>{
        
        if(count < 0 ){
            myObserver.error("count can't be negative");
            return;
        }

        const timer = setInterval(()=>{
            if(count===0){
                clearInterval(timer);
                myObserver.complete();
                return ;
            }

            
            const num = Math.floor(Math.random() * 100 );
            myObserver.next(num);
            count--;

        },500)
    });

  }
}
