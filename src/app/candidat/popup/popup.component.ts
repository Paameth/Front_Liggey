import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone:true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() title:string=''
  @Output() close=new EventEmitter<void>()

  onClose() {
    this.close.emit();
  }
}
