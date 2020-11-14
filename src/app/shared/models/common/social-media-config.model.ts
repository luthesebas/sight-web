import { Link } from './link.model';

export interface SocialMediaConfig {
  readonly allLinks: Link[];
  readonly instagram: Link;
  readonly facebook: Link;
  readonly snapchat: Link;
}
