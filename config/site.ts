export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "work",
      href: "/docs",
    },
    {
      label: "about",
      href: "/pricing",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/profile",
    },
    {
      label: "Work",
      href: "/dashboard",
    },
    {
      label: "About",
      href: "/projects",
    },
   
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
