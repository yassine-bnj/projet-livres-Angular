import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  newLivre = new Livre();
  types! : Type[];
newIdType! : number;
newType! : Type;
  constructor(private livreService: LivreService,private router:Router) {
  }

  ngOnInit(): void {
    this.livreService.listeTypes().subscribe(types => {
      console.log(types);
      this.types = types;
      });
  }
  addLivre() {
    this.newLivre.type = this.types.find(type => type.idType == this.newIdType)!;
  console.log(this.newLivre);
    this.livreService.ajouterLivre(this.newLivre).subscribe(livre => {
    console.log(livre);
    this.router.navigate(['livres']);

    });
    //window.location.href="/livres";
  }

}
