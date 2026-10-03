
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about-school.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            About TIS
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            More than a school.
            <span className="block text-blue-700">
              A place to discover your potential.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-600">
              Tulas International School was established in 2012 under
              the aegis of Rishabh Educational Trust. Located in Dehradun,
              TIS provides a learning environment designed to support
              academic excellence and the overall development of students.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At TIS, education extends beyond the classroom. Students
              are encouraged to explore academics, sports, arts and
              other activities while developing leadership, creativity
              and lifelong learning skills.
            </p>

            <a
              href="#academics"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-blue-700"
            >
              Discover TIS
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={aboutImage}
              alt="Tulas International School campus"
              className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-slate-100 p-8"
          >
            <p className="text-4xl font-bold text-blue-700">
              2012
            </p>

            <h3 className="mt-4 text-xl font-bold">
              Established
            </h3>

            <p className="mt-3 leading-6 text-slate-600">
              Tulas International School began its journey in
              Dehradun in 2012.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-blue-700 p-8 text-white"
          >
            <p className="text-4xl font-bold">
              16+
            </p>

            <h3 className="mt-4 text-xl font-bold">
              Olympic Sports
            </h3>

            <p className="mt-3 leading-6 text-blue-100">
              Students have opportunities to participate in a
              wide range of sports and activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-slate-900 p-8 text-white sm:col-span-2"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              The TIS Approach
            </p>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              Academic excellence with holistic development.
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              TIS combines academics with opportunities in sports,
              arts, music and extracurricular activities to encourage
              students to grow in different areas of life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;