import { Component, OnInit } from '@angular/core';

export interface Documents {
  name: string;
  date: string;
  type: string;
  size: string;
}

const ELEMENT_DATA: Documents[] = [
  { name: 'Inscripción de la Feria', date: '3/13/2022', type: 'Documento Word', size: '25 KB'},
  { name: 'Renuncia de la Feria', date: '3/13/2022', type: 'Documento Word', size: '23 KB'},
 
];
@Component({
  selector: 'app-fair-documents',
  templateUrl: './fair-documents.component.html',
  styleUrls: ['./fair-documents.component.css']
})
export class FairDocumentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'type', 'size', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
