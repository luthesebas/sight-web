import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from '../models/recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // TODO: Replace with HttpCall
  private readonly recipes$: Observable<Recipe[]> = of(
    [
      {
        id: 0,
        details: {
          title: 'Gebratenes Fischfilet auf gegrilltem Zucchinigemüsebeet mit Bärlauchpesto und Tomaten',
          description: 'Festliches, mediterranes Fischgericht'
        },
        rating: {
          averageScore: 4.59,
          maximumScore: 5,
          totalRatings: 20
        },
        coverImage: {
          source: 'assets/example.jpeg',
          alternateText: 'Example',
        },
        images: []
      },
      {
        id: 1,
        details: {
          title: 'Kaiserschmarrn',
          description: ''
        },
        rating: {
          averageScore: 4.3,
          maximumScore: 5,
          totalRatings: 21
        },
        coverImage: {
          source: 'assets/example.jpeg',
          alternateText: 'Example',
        },
        images: []
      },
      {
        id: 2,
        details: {
          title: 'Geschnetzeltes in Estragon-Wein-Sauce mit Limette',
          description: 'Geschnetzeltes aus Schweinefilet und Rinderhüfte mit Reis'
        },
        rating: {
          averageScore: 3.26,
          maximumScore: 5,
          totalRatings: 17
        },
        coverImage: {
          source: 'assets/example.jpeg',
          alternateText: 'Example',
        },
        images: []
      },
      {
        id: 3,
        details: {
          title: 'Milchreis',
          description: ''
        },
        rating: {
          averageScore: 4.8,
          maximumScore: 5,
          totalRatings: 32
        },
        coverImage: null,
        images: []
      }
    ]
  );

  constructor(
    private http: HttpClient
  ) {}

  //----------------------------------------------------------

  public getByFilter(): Observable<Recipe[]> {
    return this.recipes$;
  }

  //----------------------------------------------------------

  public getOneById(id: number): Observable<Recipe> {
    return this.recipes$.pipe(
      map(recipes => recipes[id])
    );
  }

  //----------------------------------------------------------

  public getRandom(): Observable<Recipe[]> {
    return this.recipes$;
  }

}
