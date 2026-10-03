import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Campus", href: "#campus" },
    { name: "Admissions", href: "#admissions" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-6 py-3 backdrop-blur-md transition-all duration-300 ${
  isScrolled
    ? "bg-white shadow-xl"
    : "bg-white/90 shadow-lg"
}`}>
        
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-wide text-slate-900"
        >
          TIS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-700"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#admissions"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full p-2 text-slate-900 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mx-4 mt-2 rounded-3xl bg-white p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;