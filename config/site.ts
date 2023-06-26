import { SiAboutdotme, SiCodeproject } from "react-icons/si";
import { GiAztecCalendarSun } from "react-icons/gi";
import {
  MdConnectWithoutContact,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { ImBlog } from "react-icons/im";

// pretty neat little trick to get the type of the object
export type SiteConfig = typeof siteConfig;
import generateUniqueId from "@/lib/generateUniqueId";

export const siteConfig = {
  name: "elluis.codes",
  description: "elluis.codes, a blog about web development and other stuff",
  navigation: [
    {
      id: generateUniqueId(),
      label: "About",
      href: "/about",
      isActive: false,
      icon: SiAboutdotme,
      activeIcon: GiAztecCalendarSun,
      description: "About me",
    },
    {
      id: generateUniqueId(),
      label: "Contact",
      href: "/contact",
      isActive: false,
      icon: MdConnectWithoutContact,
      activeIcon: MdOutlineConnectWithoutContact,
      description: "Contact me",
    },
    {
      id: generateUniqueId(),
      label: "Blog",
      href: "/blog",
      isActive: false,
      icon: ImBlog,
      activeIcon: ImBlog,
      description: "Blog",
    },
    {
      id: generateUniqueId(),
      label: "Projects",
      href: "/projects",
      isActive: false,
      icon: ImBlog,
      activeIcon: ImBlog,
      description: "Projects",
    },
    {
      id: generateUniqueId(),
      label: "Home",
      href: "/",
      isActive: false,
      icon: SiCodeproject,
      activeIcon: SiCodeproject,
      description: "Home",
    },
  ],
  links: {
    twitter: "https://twitter.com/elluis_codes",
    github: "https://github.com/elLui",
    docs: "/",
  },
};
