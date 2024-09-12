import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefService {

  referenceGivers: [string, string, string] = [
    'Phillip Sauer',
    'Phillip Sauer',
    'Phillip Sauer',
  ];
  
  currentRef: number = 1 ;

  direction: 'prev' | 'next'  | 'none' = 'none';

  constructor() { }
}
