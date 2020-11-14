import { Menu } from './menu.model';
import { Link } from './link.model';
import { LinkGroup } from './link-group.model';

export interface NavigationConfig {
  sideNavigation: Link[];
  mainNavigation: {
    explore: Link;
    cookBook: Menu;
  };
  allLinkGroups: LinkGroup[];
}
