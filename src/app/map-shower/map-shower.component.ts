import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-shower',
  templateUrl: './map-shower.component.html',
  styleUrls: ['./map-shower.component.css']
})
export class MapShowerComponent implements OnInit {
  listPath : Array<String> = Array()

  constructor() { }

  ngOnInit(): void {
    this.listPath.push("assets/NorthernCave.jpg")
    this.listPath.push("assets/smashVille.jpg")
  }

  changePath(path : String){
    this.listPath[this.listPath.indexOf(path)]="assets/pouce.jpg"
  }
  
}
