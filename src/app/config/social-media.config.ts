import { InjectionToken } from '@angular/core';

import { Link } from '../shared/models/common/link.model';
import { SocialMediaConfig } from '../shared/models/common/social-media-config.model';

const instagram: Link = {
  reference: '#',
  label: 'Instagram',
  iconName: 'instagram'
};
const facebook: Link = {
  reference: '#',
  label: 'Facebook',
  iconName: 'facebook'
};
const snapchat: Link = {
  reference: '#',
  label: 'Snapchat',
  iconName: 'snapchat'
};

export const SOCIAL_MEDIA_CONFIG = new InjectionToken<SocialMediaConfig>('social-media.config');

export const SOCIAL_MEDIA_VALUE: SocialMediaConfig = {
  allLinks: [
    instagram,
    facebook,
    snapchat
  ],
  instagram,
  facebook,
  snapchat
}
