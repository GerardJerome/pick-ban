import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ListResult } from '@angular/fire/storage/interfaces';



@Component({
  selector: 'app-map-shower',
  templateUrl: './map-shower.component.html',
  styleUrls: ['./map-shower.component.css']
})
export class MapShowerComponent implements OnInit {
  item$: Promise<ListResult>;


  constructor(firestorage : AngularFireStorage) {
    this.item$ = firestorage.storage.ref("notCrossed").listAll()
    this.item$.then((test)=>{
      
      console.log(test.items)
    })
   }

  ngOnInit(): void {
  }

  
}
