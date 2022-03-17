import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-con',
  templateUrl: './delete-con.component.html',
  styleUrls: ['./delete-con.component.css']
})
export class DeleteConComponent implements OnInit {
  @Input() item:string | undefined
  @Output() onCancel = new EventEmitter()

  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  cancel(){

    
    this.onCancel.emit()
 }
 delete(){
  this.onDelete.emit(this.item)

 }

}
