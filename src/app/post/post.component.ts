import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post!: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef!: ElementRef


  removePost() {
  this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log('ngonchanges', changes)
  }

  ngOnInit():void {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck():void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit():void {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked():void {
    console.log('AfterContentCheck')
  }

  ngAfterViewChecked():void {
    console.log('AfterViewChecked')
}

ngAfterViewInit():void {
    console.log('AfterViewInit')
}

ngOnDestroy() {
    console.log('OnDestroy')
}
}