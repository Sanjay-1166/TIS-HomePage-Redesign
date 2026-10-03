
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "TIS provides students with opportunities to learn, explore their interests and grow with confidence.",
      name: "Student Experience",
      role: "Tulas International School",
    },
    {
      quote:
        "The school encourages students to participate in academics, sports and activities beyond the classroom.",
      name: "School Community",
      role: "Tulas International School",
    },
    {
      quote:
        "Learning at TIS is about developing knowledge, creativity, leadership and the confidence to take on new challenges.",
      name: "Learning Journey",
      role: "Tulas International School",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 text-slate-900 sm:py-32">
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
            Student Voices
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Experiences that
            <span className="block text-blue-700">
              stay with you.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A school experience is shaped by the people, opportunities
            and memories students take with them.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group flex flex-col rounded-3xl bg-slate-100 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote
                size={32}
                className="text-blue-700"
              />

              <p className="mt-8 flex-1 text-lg leading-8 text-slate-700">
                “{testimonial.quote}”
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-bold text-slate-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

