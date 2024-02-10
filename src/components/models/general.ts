export interface EssentialLinkProps {
  title: string;
  link?: string;
}

export interface HeroCardProps {
  title: string;
  description?: string;
  image?: string;
  socials?: Social[];
}

export interface Social {
  icon: string;
  link: string;
}
