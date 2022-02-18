import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {
    // declarando event binding pra passar o valor de filter pro photo-list.component.html
    @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();

    @Input() value: string = "";

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter));
    }

    ngOnDestroy(): void {
        //para liberar o Subject evitando gastos desnecessários da memória, um problema famoso e conhecido por memory leak!
        this.debounce.unsubscribe();
    }
}