import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../assets/school-hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
  src={heroImage}
  alt="Tulas International School campus"
  initial={{ scale: 1.05 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  className="h-full w-full object-cover"
/>

        <div className="absolute inset-0 bg-slate-950/65" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">
        
        <div className="max-w-4xl">
          
          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300"
          >
            Tulas International School
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl"
          >
            Shaping
            <span className="block text-blue-300">
              Tomorrow's
            </span>
            Global Leaders.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg"
          >
            Discover an inspiring learning environment where academic
            excellence, character development, and global perspectives
            prepare students for a changing world.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            
            <a
              href="#about"
              className="group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-xl"
            >
              Explore TIS

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#admissions"
              className="flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-950"
            >
              <Play size={18} />
              Admissions
            </a>

          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-8"
          >
            
            <div>
              <p className="text-3xl font-bold sm:text-4xl">2012</p>

              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Established
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold sm:text-4xl">22</p>

              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Acre Campus
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold sm:text-4xl">16+</p>

              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Olympic Sports
              </p>
            </div>

          </motion.div>

        </div>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/70 sm:flex"
>
  <span>Scroll to explore</span>

  <motion.span
    animate={{ y: [0, 6, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="text-lg"
  >
    ↓
  </motion.span>
</motion.div>
      </div>
    </section>
  );
}

export default Hero;