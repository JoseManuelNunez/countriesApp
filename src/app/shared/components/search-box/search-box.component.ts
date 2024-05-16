import { Component, EventEmitter, Input, Output, ViewChild, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  @Input()
  public placeholder: string = ''

  emitValue(text: string) {
    if (text === '') return

    this.onValue.emit(text)

  }

}
