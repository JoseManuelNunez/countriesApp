import { Component, EventEmitter, Input, OnInit, Output, ViewChild, output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

  private debuncer = new Subject<string>()

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  @Input()
  public placeholder: string = ''


  @Input()
  public initialValue: string = ''

  ngOnInit(): void {
    this.debuncer.pipe(debounceTime(500)).subscribe((value => {
      this.emitValue(value)
    }))
  }

  onKeyPress(term: string) {
    this.debuncer.next(term)
  }

  emitValue(text: string) {
    if (text === '') return

    this.onValue.emit(text)

  }

}
