import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css";

interface NavbarProps {
  title: string;
  href: string;
}

const links: NavbarProps[] = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  {
    title: "My CV 📄",
    href: "https://drive.google.com/file/d/1YV90Jnf49i-IIuwerRag0b08lyzNCFRU/view?usp=sharing",
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="fixed container z-20 px-[20px] lg:px-[130px] py-[25px] w-full bg-black/90 backdrop-blur-sm border-b border-white/10"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-bold text-[25px]">Khaaisnt.</div>
          <div className="block lg:hidden">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block relative z-30 ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="hamburger-line bg-white"></span>
              <span className="hamburger-line bg-white"></span>
              <span className="hamburger-line bg-white"></span>
            </button>
          </div>
          <div className="font-medium hidden lg:flex items-center gap-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white text-[16px] font-medium hover:text-blue-400 transition-colors duration-300 
                after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:-bottom-1 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                target={link.href.startsWith("http") ? "_blank" : "_self"}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-b border-white/10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col items-center justify-center py-6 gap-y-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white text-[18px] font-medium hover:text-blue-400 transition-colors duration-300 
                  after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:-bottom-1 
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  onClick={toggleMenu}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <style jsx>{`
        .hamburger-line {
          display: block;
          width: 25px;
          height: 2px;
          margin: 5px auto;
          transition: all 0.3s ease-in-out;
          border-radius: 4px;
        }
        #hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        #hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        #hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}</style>
    </>
  );
};

export default Navbar;
