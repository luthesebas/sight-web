export interface Link {
    label: string;
    reference: string;
    iconName?: string;
}

export interface LinkGroup {
    label: string;
    links: Link[];
}
