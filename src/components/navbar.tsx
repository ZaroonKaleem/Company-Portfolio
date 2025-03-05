// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { useWindowScroll } from "react-use";
// import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// import { NAV_ITEMS } from "@/constants";

// export const Navbar = () => {
//   const navContainerRef = useRef<HTMLDivElement>(null);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isNavVisible, setIsNavVisible] = useState(false);
//   const location = useLocation(); // ✅ Get current URL
//   const navigate = useNavigate(); // ✅ Get navigate function

//   const { y: currentScrollY } = useWindowScroll();

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

//   // ✅ Scroll to section when the URL changes
//   useEffect(() => {
//     if (location.pathname.startsWith("/")) {
//       const sectionId = location.pathname.substring(1); // Remove `/`
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   }, [location]);

//   // ✅ Handle navigation click (Fixes dropdown closing)
//   const handleNavClick = (event: React.MouseEvent, href: string) => {
//     event.preventDefault();
//     event.stopPropagation(); // ✅ Prevent dropdown from closing

//     const section = document.getElementById(href.substring(1)); // Remove `#`
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
    
//     navigate(href); // ✅ Update URL properly using React Router
//     setOpenDropdown(null); // ✅ Close dropdown after navigation
//   };

//   return (
//     <header
//       ref={navContainerRef}
//       className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
//     >
//       <div className="absolute top-1/2 w-full -translate-y-1/2">
//         <nav className="flex size-full items-center justify-between p-4">
//           <div className="flex items-center gap-7">
//             <a href="/" className="transition hover:opacity-75">
//               <img src="/img/Sterniz-bg.png" alt="Logo" width={200} />
//             </a>
//           </div>
//           <div className="flex h-full items-center">
//             <div className="hidden md:block">
//               {NAV_ITEMS.map(({ label, href, subItems }) =>
//                 subItems ? (
//                   <div
//                     key={label}
//                     className="relative inline-block"
//                     onMouseEnter={() => setOpenDropdown(label)}
//                     onMouseLeave={() => setOpenDropdown(null)}
//                   >
//                     <button className="nav-hover-btn flex items-center gap-1">
//                       {label} ▼
//                     </button>
//                     {openDropdown === label && (
//                       <div
//                         className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
//                         onMouseEnter={() => setOpenDropdown(label)}
//                         onMouseLeave={() => setOpenDropdown(null)}
//                       >
//                         {subItems.map(({ label, href }) => (
//                           <a
//                             key={href}
//                             href={href}
//                             className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//                             onClick={(e) => handleNavClick(e, href)}
//                           >
//                             {label}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <a
//                     key={href}
//                     href={href}
//                     className="nav-hover-btn"
//                     onClick={(e) => handleNavClick(e, href)}
//                   >
//                     {label}
//                   </a>
//                 )
//               )}
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // ✅ Close mobile menu on navigation
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

          {/* ✅ Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex h-full items-center">
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

          {/* ✅ Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white p-4 shadow-lg">
              {NAV_ITEMS.map(({ label, href, subItems }) =>
                subItems ? (
                  <div key={label} className="relative">
                    <button
                      className="w-full text-left p-2"
                      onClick={() =>
                        setOpenDropdown(openDropdown === label ? null : label)
                      }
                    >
                      {label} ▼
                    </button>
                    {openDropdown === label && (
                      <div className="ml-4 border-l border-gray-500">
                        {subItems.map(({ label, href }) => (
                          <a
                            key={href}
                            href={href}
                            className="block p-2"
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
                    className="block p-2"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
