import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Link, LinkGroup } from 'src/app/shared/models/common/link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  @Input()
  linkGroups: LinkGroup[];

  @Input()
  socialMediaLinks: Link[];

  public readonly currentYear: number;

  constructor() {
    this.currentYear = (new Date()).getFullYear();
  }

}
