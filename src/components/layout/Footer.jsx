
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Campus & Life", href: "#campus" },
    { name: "Admissions", href: "#admissions" },
  ];

  return (
    <footer
      id="footer"
      className="bg-slate-950 px-6 pb-8 pt-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="lg:col-span-2">
            <a
              href="#top"
              className="text-3xl font-bold tracking-wide"
            >
              TIS
            </a>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Tulas International School — creating an environment
              where students can learn, explore, grow and prepare
              for the future.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-400">
              <p>Tulas International School</p>

              <p>Dehradun, Uttarakhand</p>

              <a
                href="tel:+919837983791"
                className="block transition-colors duration-300 hover:text-white"
              >
                +91-9837983791
              </a>

              <a
                href="mailto:info@tis.edu.in"
                className="block transition-colors duration-300 hover:text-white"
              >
                info@tis.edu.in
              </a>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tulas International School.
            All rights reserved.
          </p>

          <a
            href="#top"
            className="transition-colors duration-300 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
