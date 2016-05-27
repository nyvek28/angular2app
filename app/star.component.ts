import {Component} from 'angular2/core';

@Component({
  selector: 'star',
  template: `
    <i class='glyphicon'
    [class.glyphicon-star] = 'isClicked'
    [class.glyphicon-star-empty] = '!isClicked'
    (click) = 'onClick()'></i>
  `
})
export class StarComponent{
  isClicked = false;
  onClick(){
    this.isClicked = !this.isClicked;
  }
}
