
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Admissions() {
  return (
    <section
      id="admissions"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-blue-700 px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-20"
        >
          {/* Decorative Circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-white/5" />

          {/* Content */}
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              Admissions
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Start your child's
              <span className="block text-blue-200">
                journey with TIS.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Discover a learning environment where students can develop
              academically, creatively and personally while preparing for
              the opportunities ahead.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#Admissions"
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-50 hover:shadow-xl"
              >
                Explore Admissions

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:+919837983791"
                className="flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
              >
                <Phone size={18} />
                Contact School
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Admissions;

