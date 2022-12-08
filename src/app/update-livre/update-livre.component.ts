import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { Type } from '../model/type.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css'],
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  types! : Type[];
updatedTypeId! : number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private livreService: LivreService) { }

  ngOnInit() {
    

      this.livreService.listeTypes().
      subscribe(types => {this.types = types;
      console.log(types);
      });


      this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
      subscribe( livre =>{ this.currentLivre = livre;
      this.updatedTypeId =this.currentLivre.type.idType;
      } ) ;
      

  }
  updateLivre() {
      this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
      subscribe( livre =>{ this.currentLivre = livre;
      this.updatedTypeId =this.currentLivre.type.idType;

    } ) ;

    this.currentLivre.type = this.types.find(type => type.idType == this.updatedTypeId)!;
   this.livreService.updateLivre(this.currentLivre).subscribe(livre => {
   this.router.navigate(['livres']); }
   );
   


  }
  

}
