import { InjectionToken } from '@angular/core';

import { Link, LinkGroup } from '../shared/models/common/link.model';
import * as LINKS from './link.config';

export interface NavigationConfig {
    sideNavigation: Link[];
    mainNavigation: Menu[];
    allLinkGroups: LinkGroup[];
}

export interface Menu {
    id: string;
    self: Link;
    links?: Link[];
}

export const NAVIGATION_CONFIG = new InjectionToken<NavigationConfig>(
    'config:navigation'
);

export const NAVIGATION_CONFIG_VALUE: NavigationConfig = {
    sideNavigation: [LINKS.explore, LINKS.cookBook],
    mainNavigation: [
        {
            id: 'exploreMenu',
            self: LINKS.explore,
        },
        {
            id: 'cookbookMenu',
            self: {
                label: 'Kochbuch',
                iconName: 'book',
                reference: '', // TODO
            },
            links: [LINKS.cookBook],
        },
    ],
    allLinkGroups: [LINKS.recipeLinkGroup, LINKS.enterpriseLinkGroup],
};
