import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Plushie } from '../new-plushie/plushie.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  errorMessage: string = '';
  plushieArray: Array<any> = [];
  header: Array<string> = ['creator', 'name'];
  loading: boolean = false;

  constructor(private http: HttpClient){}


  ngOnInit(): void {
    this.loading=true;
    this.http.get<any>('https://infra-hulling-376212-default-rtdb.europe-west1.firebasedatabase.app/plushies.json')
      .pipe(
        catchError( error => {
          this.errorMessage = error.message;
          return throwError(error);
        }),
        map( (adat: any) => {
          let plushieArray: Array<any> = [];
          Object.entries(adat).forEach(([key, value]) => {
            plushieArray.push(value);
          })
          plushieArray.sort((a,b) => (a.name > b.name ? 1 : -1));
          return plushieArray;
        }))
        .subscribe( (adat) => {
          
          this.plushieArray = adat;
          console.log(this.plushieArray);
          console.log(adat);

        });
        this.loading=false;
      
    } 
  
}
