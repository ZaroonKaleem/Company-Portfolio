// import { About } from "@/components/about";
// import { Contact } from "@/components/contact";
// import { Features } from "@/components/features";
// import { Footer } from "@/components/footer";
// import { Hero } from "@/components/hero";
// import { Navbar } from "@/components/navbar";
// import { Story } from "@/components/story";

// const App = () => {
//   return (
//     <div className="relative min-h-screen w-screen overflow-x-hidden">
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Features />
//         <Story />
//         <Contact />
//       </main>

//       <Footer />
//     </div>
//   );
// };
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Story } from "@/components/story";
import { ContactPage } from "@/components/ContactPage"
// Import service pages (ensure file names match the casing)
import { Security } from "@/components/Security";
import { FacilityManagement } from "@/components/facility-management";
import { Cleaning } from "@/components/Cleaning";
import ScrollToHashElement from "./components/ScrollToHashComponent";



const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <ScrollToHashElement />
                  <Hero />
                  <About />
                  <Features />
                  <Story />
                  <Contact />
                </div>
              }
            />
            {/* Updated service routes to match "/services/*" format */}
            <Route path="/contact" element={<ContactPage />} /> {/* ✅ Add Contact Page */}
            <Route path="/services/security" element={<Security />} />
        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/facility" element={<FacilityManagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
