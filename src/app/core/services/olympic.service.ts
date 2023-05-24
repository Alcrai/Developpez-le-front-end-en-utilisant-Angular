import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';
import { Participation } from '../models/Participation';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$= new BehaviorSubject<Olympic[]>([]);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        this.olympics$.error('An error occured');
        console.error(error);
        return [];
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getNumberJO(participation: Participation[]): number {
    let result: number = 0;
    for(var i=0; i<participation.length; i++){
        result++;
    }
    return result;
}

  getNumberMedals(participation: Participation[]): number {
    let result: number = 0;
    for(var i=0; i<participation.length; i++){
        result = result+ participation[i].medalsCount;
    }
    return result;
}

getNumberAthletes(participation: Participation[]): number {
  let result: number = 0;
  for(var i=0; i<participation.length; i++){
      result = result+ participation[i].athleteCount;
  }
  return result;
}

getArrayDataLine(participation: Participation[]): number [] [] {
  let result: number [][] = [];
  for(var i=0; i<participation.length; i++){
    let data: number [] = [];
      data.push(participation[i].year,participation[i].medalsCount);
      result.push(data);
  }
  return result;
}

}
