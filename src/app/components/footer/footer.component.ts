import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Link, LinkGroup } from 'src/app/shared/models/common/link.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    @Input()
    linkGroups: LinkGroup[] | null = null;

    @Input()
    socialMediaLinks: Link[] | null = null;

    readonly currentYear: number = new Date().getFullYear();
}
