import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/services/generator.service';
import { filter, map, reduce, scan, take, takeLast, takeWhile, toArray } from "rxjs/operators"
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-test-observable',
    templateUrl: './test-observable.component.html',
    styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit, OnDestroy {

    private mySubscription : Subscription;

    public arr: number[] = [];

    constructor(private myGenerator: GeneratorService) { }

    ngOnInit(): void {
        // //Observable without operators
        // this.myGenerator.generateNumbers(20).subscribe(
        //     (n: number) => this.arr.push(n), // when calling next 
        //     (err: string) => alert(err), //when calling error
        //     () => alert("Done.") //when calling complete
        // );
        
        // // Observable with filter operator (on-the-fly):
        // this.myGenerator.generateNumbers(20).pipe(filter(n => n % 2 === 0)).subscribe(
        //     (n: number) => this.arr.push(n), // when calling next 
        //     (err: string) => alert(err), //when calling error
        //     () => alert("Done.") //when calling complete
        // );
        
        // // Observable with map operator (on-the-fly):
        // this.myGenerator.generateNumbers(20).pipe(map(n => n * n)).subscribe(
        //     (n: number) => this.arr.push(n), // when calling next 
        //     (err: string) => alert(err), //when calling error
        //     () => alert("Done.") //when calling complete
        // );
        
        // // Observable with take operator (on-the-fly):
        // this.myGenerator.generateNumbers(20).pipe(take(5)).subscribe(
        //     (n: number) => this.arr.push(n), // when calling next 
        //     (err: string) => alert(err), //when calling error
        // );
        
        // // Observable with takeLast operator (on-complete):
        // this.myGenerator.generateNumbers(20).pipe(takeLast(5)).subscribe(
        //     (n: number) => this.arr.push(n), 
        //     (err: string) => alert(err), 
        // );

        // // Observable with toArray operator (on-complete):
        // this.myGenerator.generateNumbers(20).pipe(toArray()).subscribe(
        //     (arr: number[]) => this.arr = arr, 
        //     (err: string) => alert(err), 
        // );

        // // Observable with takeLast + toArray operator (on-complete):
        // this.myGenerator.generateNumbers(20).pipe( takeLast(4) , toArray() ).subscribe(
        //     (arr: number[]) => this.arr = arr, 
        //     (err: string) => alert(err), 
        // );
        
        // // Observable with reduce operator (on-complete):
        // this.myGenerator.generateNumbers(20).pipe( reduce((sum, n) => sum + n) ).subscribe(
        //     (n: number) => this.arr.push(n), 
        //     (err: string) => alert(err), 
        // );

        // // Observable with scan operator (on-the-fly): same as reduce but on the fly
        // this.myGenerator.generateNumbers(20).pipe( scan((sum, n) => sum + n) ).subscribe(
        //     (n: number) => this.arr.push(n), 
        //     (err: string) => alert(err), 
        // );
        
        // Observable with takeWhile operator (on-the-fly): same as reduce but on the fly
        this.mySubscription = this.myGenerator.generateNumbers(20).pipe( takeWhile( n => n < 80) ).subscribe(
            (n: number) => this.arr.push(n), 
            (err: string) => alert(err), 
        );
        
    }
    
    ngOnDestroy(): void {
       this.mySubscription.unsubscribe();
    }

}
