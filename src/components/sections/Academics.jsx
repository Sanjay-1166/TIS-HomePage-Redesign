
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Academics() {
  const programs = [
    {
      number: "01",
      title: "Primary School",
      description:
        "Building strong foundations through curiosity, creativity and meaningful learning experiences.",
    },
    {
      number: "02",
      title: "Middle School",
      description:
        "Encouraging students to think critically, explore new ideas and develop independent learning skills.",
    },
    {
      number: "03",
      title: "Senior School",
      description:
        "Preparing students for higher education through academic rigour, guidance and future-focused learning.",
    },
  ];

  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32"
    >
      {/* Decorative Background Shape */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Academics
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Learning that goes
            <span className="block text-blue-300">
              beyond the classroom.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            TIS encourages students to develop knowledge, confidence,
            creativity and the skills they need to grow into responsible
            global citizens.
          </p>
        </motion.div>

        {/* Programs */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-blue-300">
                  {program.number}
                </span>

                <ArrowUpRight
                  size={22}
                  className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                />
              </div>

              <h3 className="mt-16 text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {program.description}
              </p>

              <div className="mt-8 h-px w-full bg-white/10" />

              <p className="mt-4 text-sm font-medium text-blue-300">
                Explore learning →
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Academics;
