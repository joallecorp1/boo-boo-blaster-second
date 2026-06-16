import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, Building2, Shield, Zap, Droplets, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import whyIodineImg from "@assets/6F231134-E758-476A-BB45-E5B1E9864907_1781133758016.png";
import hospitalImg from "@assets/B1A8F41B-1CDC-4B53-87F8-A5FED96B4BA6_1781133758016.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const reasons = [
  {
    number: "1",
    icon: Clock,
    color: "bg-blue-500",
    title: "Trusted for Generations",
    desc: "Iodine antiseptics have been used for over 150 years. This is not a new ingredient — it's a time-tested one that families and healthcare professionals have relied on for generations.",
  },
  {
    number: "2",
    icon: Building2,
    color: "bg-pink-500",
    title: "Healthcare Trusted",
    desc: "Povidone iodine is used in hospitals, clinics, and first aid settings around the world. It's the same type of antiseptic ingredient trusted by healthcare professionals.",
  },
  {
    number: "3",
    icon: Shield,
    color: "bg-green-500",
    title: "Proven First Aid Antiseptic",
    desc: "Povidone iodine helps prevent infection in minor cuts, scrapes, and burns — exactly what you need when life's little accidents happen.",
  },
  {
    number: "4",
    icon: Zap,
    color: "bg-yellow-500",
    title: "Broad Germ Protection",
    desc: "An iodine-based antiseptic known for broad microbicidal activity — working against bacteria and other common wound pathogens.",
  },
  {
    number: "5",
    icon: Droplets,
    color: "bg-purple-500",
    title: "A Trusted Alternative to Plain Alcohol",
    desc: "Many families choose iodine-based first aid as a familiar, well-known alternative for everyday minor wound care. A trusted iodine-based alternative to plain alcohol.",
  },
];

const beyond = [
  {
    title: "Stays Where You Apply",
    desc: "Helps provide lasting contact on the skin for effective protection.",
  },
  {
    title: "Water-Soluble Formula",
    desc: "Easy to rinse and clean — no harsh residue.",
  },
  {
    title: "Family Friendly Choice",
    desc: "A dependable option for everyday minor wound care for the whole family.",
  },
];

export default function WhyPovidoneIodine() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">Education</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black">
              Why Povidone Iodine?
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 leading-relaxed">
              A time-tested iodine-based antiseptic — families know and trust it.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/80 font-medium max-w-xl mx-auto">
              Most parents know alcohol, peroxide, Neosporin, and bacitracin. But povidone iodine has been trusted in healthcare settings for over 150 years — and it's the active ingredient in Boo-Boo Blaster.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main infographic */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={whyIodineImg} alt="Why Povidone Iodine infographic" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto" data-testid="img-why-iodine-main" />
          </motion.div>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground mb-4">5 Reasons Families Trust Povidone Iodine</motion.h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div key={r.number} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex gap-6 items-start bg-muted rounded-2xl p-6" data-testid={`card-reason-${r.number}`}>
                <div className={`${r.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-md`}>
                  {r.number}
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital trusted image */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={hospitalImg} alt="Hospital trusted wound care ingredient" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto" data-testid="img-hospital-trusted" />
          </motion.div>
        </div>
      </section>

      {/* Beyond plain alcohol */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground mb-3">Beyond Plain Alcohol</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto">Trusted iodine-based first aid protection for your family.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {beyond.map((b) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 text-center" data-testid={`card-beyond-${b.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-black text-foreground text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground font-medium">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-foreground text-white rounded-3xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-2xl font-black mb-2">Clean. Protect. Feel Confident.</p>
            <p className="text-white/80 font-medium mb-6">Boo-Boo Blaster has your family covered.</p>
            <Link href="/shop" data-testid="button-why-iodine-shop-cta">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full font-black px-8">
                Shop Boo-Boo Blaster
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
