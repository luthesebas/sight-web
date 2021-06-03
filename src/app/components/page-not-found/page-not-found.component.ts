import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { FilterFactory, FilterResult } from 'src/app/shared/modules/search-select/services/filter-factory.service';

import { User, compareUsers, displayUser, userIncludes } from 'src/app/shared/modules/search-select/user.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public isFiltering$: Observable<boolean>;
  public filterResult$: Observable<FilterResult<User>>;

  constructor(
    private filterFactory: FilterFactory
  ) {}

  ngOnInit() {
    const u = Array.from({length: 50}).map((_, i) => {
      const user: User = { id: i, name: 'Test' };
      return user;
    });

    this.users.push(...u);

    this.form = new FormGroup({
      user: new FormControl(this.users[0], Validators.required)
    });


    const filter = this.filterFactory.create(userIncludes);
    this.isFiltering$ = filter.isFiltering;
    this.filterResult$ = filter.find(
      this.form.get('user').valueChanges,
      this.users
    );
  }

  users: User[] = [
    { id: 1, name: 'Mary' },
    { id: 2, name: 'Shelley' },
    { id: 3, name: 'Igor' }
  ];

  form: FormGroup;

  test = {
    displayUserFn: displayUser,
    compareUsersFn: compareUsers,
    userIncludesFn: userIncludes
  }

}
