import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'vehiclos-sell-conf',
  templateUrl: './sell-conf.component.html',
  styleUrls: ['./sell-conf.component.scss']
})
export class SellConfComponent implements OnInit {

 
  @Output() StyleChangers = new EventEmitter<boolean>();
  @Input() style;
  @Input() visible;
  
  styleChanger(){
    this.StyleChangers.emit(false);
  }


  a = [{route: 'example'}, {route: 'example'},{route: 'example'},{route: 'example'},];
  b = [{name: 'example1'},{name: 'example2'},{name: 'example2'},];
  constructor() { }

  ngOnInit(): void {
  }

}
