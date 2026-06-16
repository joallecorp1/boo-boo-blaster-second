import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import familyImg from "@assets/2AF21C94-0EDA-4E82-8ECE-A955A1E6DF23_1781133758016.png";
import momSonImg from "@assets/080F030B-3AA6-43A6-8BEF-F5F8E1326C51_1781133758016.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const steps = [
  {
    step: "01",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    title: "Clean the Area",
    desc: "Gently clean the affected area before applying Boo-Boo Blaster. Remove any visible dirt or debris.",
    tip: "A gentle rinse with clean water works great.",
  },
  {
    step: "02",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    borderColor: "border-pink-200",
    title: "Spray Directly",
    desc: "Apply Boo-Boo Blaster directly to the affected area 1–3 times daily. The no-touch spray means no cotton balls, no mess, and no contact with the wound.",
    tip: "Hold 2–4 inches away and spray evenly over the area.",
  },
  {
    step: "03",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    borderColor: "border-green-200",
    title: "Cover if Needed",
    desc: "After applying, the area may be covered with a sterile bandage. Let the spray dry first for best results.",
    tip: "Allow to dry completely before covering with a bandage.",
  },
];

const useCases = [
  { label: "Minor Cuts", color: "bg-blue-100 text-blue-800" },
  { label: "Scrapes", color: "bg-pink-100 text-pink-800" },
  { label: "Burns", color: "bg-yellow-100 text-yellow-800" },
  { label: "Bug Bites", color: "bg-green-100 text-green-800" },
  { label: "Blisters", color: "bg-purple-100 text-purple-800" },
  { label: "Abrasions", color: "bg-orange-100 text-orange-800" },
];

export default function HowItWorks() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4 max-w-2xl mx-auto">
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">Simple & Fast</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black">How It Works</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
              Three simple steps — fast, gentle, and stress-free first aid that kids and parents can feel good about.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className={`${s.lightColor} border-2 ${s.borderColor} rounded-2xl p-8 flex gap-6 items-start`} data-testid={`card-step-${s.step}`}>
                <div className={`${s.color} text-white text-2xl font-black w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-md`}>
                  {s.step}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-sm font-bold text-foreground/70 italic">{s.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 text-center">
            <p className="text-muted-foreground font-semibold text-lg bg-muted rounded-xl px-6 py-4 inline-block">
              For external use only. Use as directed. Ask a doctor before use on deep or puncture wounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-8">
            Great For Everyday Ouchies
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
            {useCases.map((u) => (
              <motion.span key={u.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`${u.color} font-bold px-5 py-2 rounded-full text-lg`} data-testid={`badge-use-case-${u.label.toLowerCase().replace(/\s+/g, "-")}`}>
                {u.label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src={momSonImg} alt="Mom applying Boo-Boo Blaster to son's knee" className="rounded-3xl shadow-xl w-full" data-testid="img-how-momson" />
            <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src={familyImg} alt="Family using Boo-Boo Blaster outdoors" className="rounded-3xl shadow-xl w-full" data-testid="img-how-family" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl font-black text-foreground mb-4">Ready to Try It?</h2>
            <p className="text-muted-foreground font-medium text-lg mb-8">Be prepared for every little ouch — at home, at school, at the park.</p>
            <Link href="/shop" data-testid="button-how-it-works-shop">
              <Button size="lg" className="rounded-full font-black px-10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Shop Boo-Boo Blaster
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
