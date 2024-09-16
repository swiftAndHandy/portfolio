import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefService {

  referenceGivers: [string, string, string] = [
    'Phillip Sauer',
    'Marcel Menke',
    'Phillip Sauer',
  ];
  
  currentRef: number = 1 ;

  direction: 'prev' | 'next'  | 'none' = 'none';
  update: boolean = false;

  constructor() { }
}
