import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tip',
    templateUrl: './tip.component.html',
    styleUrls: ['./tip.component.css']
})
export class TipComponent {

    public value: number;
    @Output()
    public tipSelected = new EventEmitter<number>();// Created new Event

    public tip(value: number): void {
        this.value = value;
        this.tipSelected.emit(value); // Rasing the event
    }

}
