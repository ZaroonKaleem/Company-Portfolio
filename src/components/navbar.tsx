// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";
// // import { FaGithub } from "react-icons/fa";
// // import { TiLocationArrow } from "react-icons/ti";
// import { useWindowScroll } from "react-use";
// import { Link } from "react-router-dom"
// import { NAV_ITEMS } from "@/constants";
// // import { cn } from "@/lib/utils";

// // import { Button } from "./button";

// export const Navbar = () => {
//   const navContainerRef = useRef<HTMLDivElement>(null);
//   const audioElementRef = useRef<HTMLAudioElement>(null);

//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [isIndicatorActive, setIsIndicatorActive] = useState(false);
//   // const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   // const [isNavVisible, setIsNavVisible] = useState(t
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const { y: currentScrollY } = useWindowScroll();

//   const toggleAudioIndicator = () => {
//     setIsAudioPlaying((prevAudioPlaying) => !prevAudioPlaying);
//     setIsIndicatorActive((prevIndicatorActive) => !prevIndicatorActive);
//   };

//   useEffect(() => {
//     if (isAudioPlaying) void audioElementRef.current?.play();
//     else audioElementRef.current?.pause();
//   }, [isAudioPlaying]);
 
//   useEffect(() => {
//     if (currentScrollY === 0) {
//       setIsNavVisible(true);
//       navContainerRef.current?.classList.remove("floating-nav");
//     } else if (currentScrollY > lastScrollY) {
//       setIsNavVisible(false);
//       navContainerRef.current?.classList.add("floating-nav");
//     } else if (currentScrollY < lastScrollY) {
//       setIsNavVisible(true);
//       navContainerRef.current?.classList.add("floating-nav");
//     }

//     setLastScrollY(currentScrollY);
//   }, [currentScrollY, lastScrollY]);

//   useEffect(() => {
//     gsap.to(navContainerRef.current, {
//       y: isNavVisible ? 0 : -100,
//       opacity: isNavVisible ? 1 : 0,
//       duration: 0.2,
//     });
//   }, [isNavVisible]);

//   return (
//     <header
//       ref={navContainerRef}
//       className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
//     >
//       <div className="absolute top-1/2 w-full -translate-y-1/2">
//         <nav className="flex size-full items-center justify-between p-4">
//           <div className="flex items-center gap-7">
//             <a href="#hero" className="transition hover:opacity-75">
//               <img src="/img/Sterniz-bg.png" alt="Logo" width={200} />
//             </a>

//           </div>
//           <div className="flex h-full items-center">
//             <div className="hidden md:block">
//               {NAV_ITEMS.map(({ label, href }) => (
//                 <a key={href} href={href} className="nav-hover-btn">
//                   {label}
//                 </a>
//               ))}
//             </div>

//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };


import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { NAV_ITEMS } from "@/constants";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation(); // ✅ Get current URL
  const navigate = useNavigate(); // ✅ Get navigate function

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // ✅ Scroll to section when the URL changes
  useEffect(() => {
    if (location.pathname.startsWith("/")) {
      const sectionId = location.pathname.substring(1); // Remove `/`
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // ✅ Handle navigation click (Fixes dropdown closing)
  const handleNavClick = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    event.stopPropagation(); // ✅ Prevent dropdown from closing

    const section = document.getElementById(href.substring(1)); // Remove `#`
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    navigate(href); // ✅ Update URL properly using React Router
    setOpenDropdown(null); // ✅ Close dropdown after navigation
  };

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="/" className="transition hover:opacity-75">
              <img src="/img/Sterniz-bg.png" alt="Logo" width={200} />
            </a>
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NAV_ITEMS.map(({ label, href, subItems }) =>
                subItems ? (
                  <div
                    key={label}
                    className="relative inline-block"
                    onMouseEnter={() => setOpenDropdown(label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="nav-hover-btn flex items-center gap-1">
                      {label} ▼
                    </button>
                    {openDropdown === label && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                        onMouseEnter={() => setOpenDropdown(label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {subItems.map(({ label, href }) => (
                          <a
                            key={href}
                            href={href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={(e) => handleNavClick(e, href)}
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={href}
                    href={href}
                    className="nav-hover-btn"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
