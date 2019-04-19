import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe/recipe';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore-view.component.html',
  styleUrls: ['./explore-view.component.scss']
})
export class ExploreViewComponent implements OnInit {

  constructor() { }

  public recipes: Recipe[];

  ngOnInit() {
    const recipe0 = new Recipe();
    recipe0.id = 0;
    recipe0.details.title = 'Gebratenes Fischfilet auf gegrilltem Zucchinigemüsebeet mit Bärlauchpesto und Tomaten';
    recipe0.details.description = 'Festliches, mediterranes Fischgericht';
    recipe0.rating.averageScore = 4.59;
    recipe0.rating.totalRatings = 20;
    recipe0.imageSources.push('assets/404.png');
    const recipe1 = new Recipe();
    recipe1.id = 1;
    recipe1.details.title = 'Kaiserschmarrn';
    recipe1.details.description = '';
    recipe1.rating.averageScore = 4.3;
    recipe1.rating.totalRatings = 21;
    recipe1.imageSources.push('assets/404.png');
    const recipe2 = new Recipe();
    recipe2.id = 2;
    recipe2.details.title = 'Geschnetzeltes in Estragon-Wein-Sauce mit Limette';
    recipe2.details.description = 'Geschnetzeltes aus Schweinefilet und Rinderhüfte mit Reis';
    recipe2.rating.averageScore = 4.26;
    recipe2.rating.totalRatings = 17;
    recipe2.imageSources.push('assets/404.png');

    this.recipes = [recipe0, recipe1, recipe2];
  }

}
