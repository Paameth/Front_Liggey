import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreModel } from '../../models/offre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
   @Input() offre!: OffreModel;
   constructor(private router: Router) {}
   goToDetail() {
    this.router.navigate(['/offre', this.offre.id]);
  }
}

