export interface SubMenuItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  submenu?: SubMenuItem[];
}

export interface FooterNavSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
