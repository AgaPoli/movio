import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
@Input() name: string = 'Domyślne';
  constructor() { }

  ngOnInit() {
  }

}
