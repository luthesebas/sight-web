import { Link, LinkGroup } from '../shared/models/common/link.model';

export const home: Link = {
  reference: '/',
  label: 'Homepage'
}

// Recipes

export const explore: Link = {
  reference: 'explore',
  label: 'Entdecken',
  iconName: 'explore'
}

export const cookBook: Link = {
  reference: 'cook-book',
  label: 'Mein Kochbuch',
  iconName: 'book'
}

export const recipeLinkGroup: LinkGroup = {
  label: 'Rezepte',
  links: [
    explore,
    cookBook
  ]
}

// Brand and Enterprise

export const aboutUs: Link = {
  reference: 'about-us',
  label: 'Über uns',
}

export const career: Link = {
  reference: 'career',
  label: 'Karriere',
}

export const legal: Link = {
  reference: 'legal',
  label: 'Nutzungsbedingungen', // Terms of use
}

export const privacy: Link = {
  reference: 'privacy',
  label: 'Datenschutzerklärung', // Privacy notice
}

export const imprint: Link = {
  reference: 'imprint',
  label: 'Impressum',
}

export const enterpriseLinkGroup: LinkGroup = {
  label: 'Unternehmen',
  links: [
    aboutUs,
    career,
    legal,
    privacy,
    imprint
  ]
}
