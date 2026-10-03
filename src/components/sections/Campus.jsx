
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import campusImage from "../../assets/school-hero.jpg";

function Campus() {
  const experiences = [
    {
      title: "Sports & Fitness",
      description:
        "Opportunities for students to stay active, build teamwork and develop a competitive spirit.",
    },
    {
      title: "Arts & Creativity",
      description:
        "A space for students to explore creativity through arts, music and cultural activities.",
    },
    {
      title: "Life Beyond Academics",
      description:
        "Activities and experiences that encourage confidence, leadership and personal growth.",
    },
  ];

  return (
    <section
      id="campus"
      className="bg-slate-100 px-6 py-24 text-slate-900 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Campus & Life
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A place to learn,
            <span className="block text-blue-700">
              explore and grow.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            School life is about more than academics. Students get
            opportunities to discover their interests, build friendships
            and develop skills that stay with them beyond the classroom.
          </p>
        </motion.div>

        {/* Main Campus Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-slate-900"
        >
          <img
            src={campusImage}
            alt="Tulas International School campus"
            className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-8 text-white sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Student Experience
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Every day is an opportunity to discover something new.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              From classrooms and sports to creative activities and
              community experiences, students are encouraged to make
              the most of their school journey.
            </p>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold">
                  {experience.title}
                </h3>

                <ArrowUpRight
                  size={21}
                  className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700"
                />
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Campus;

