// import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";


interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "News", href: "#"},
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "#",
    subItems: [
      { label: "Security", href: "/services/security" },
      { label: "Cleaning", href: "/services/cleaning" },
      // { label: "Facility Management", href: "/services/facility" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];


// export const NAV_ITEMS = [
//   { label: "About", href: "#about" },
//   {
//     label: "Services",
//     href: "#", // Prevent default navigation
//     subItems: [
//       { label: "Web Development", href: "/services/web" },
//       { label: "Mobile Apps", href: "/services/mobile" },
//       { label: "UI/UX Design", href: "/services/ui-ux" },
//     ],
//   },
//   { label: "Services", href: "#nexus" },
//   { label: "Contact", href: "#contact" },
// ] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/game-website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
] as const;

// export const SOCIAL_LINKS = [
//   {
//     href: "https://discord.com",
//     icon: FaDiscord,
//   },
//   {
//     href: "https://twitter.com",
//     icon: FaTwitter,
//   },
//   {
//     href: "https://youtube.com",
//     icon: FaYoutube,
//   },
//   {
//     href: "https://twitch.com",
//     icon: FaTwitch,
//   },
// ] as const;
