import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public timer: number;
    public time: string;

    constructor() { }

    ngOnInit(): void {
        this.timer = window.setInterval(() => {
            const now = new Date(0);
            this.time = now.toLocaleString();
        }, 1000)
    }

    ngOnDestroy(): void {
        window.clearInterval(this.timer);
    }
}

