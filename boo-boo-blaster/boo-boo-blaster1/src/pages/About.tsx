import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Shield, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ouch1Img from "@assets/1621E88E-2D70-4B01-AF4A-A5D7ABB3A236_1781133758016.png";
import cabinetImg from "@assets/73202550-DD1F-48B0-BA24-B2FCD488D86E_1781133758016.png";
import ouchBGoneLogo from "@assets/ouch-b-gone-logo-transparent.png";
import booBooBlasterLogo from "@assets/boo-boo-blaster-logo-transparent.png";
import mascotStanding from "@assets/mascot-standing-transparent.png";
import mascotRunning from "@assets/mascot-running-transparent.png";
import mascotFlying from "@assets/mascot-flying2-transparent.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const values = [
  {
    icon: Heart,
    color: "bg-pink-500",
    title: "Kid-Friendly First",
    desc: "Every decision we make starts with the child's comfort. Less tears, more smiles — that's the goal.",
  },
  {
    icon: Shield,
    color: "bg-blue-500",
    title: "Trust Through Transparency",
    desc: "We put everything on the label — no hidden ingredients, no confusion. Parents deserve to know exactly what they're using.",
  },
  {
    icon: Star,
    color: "bg-yellow-500",
    title: "Gentle & Effective",
    desc: "Kid-friendly doesn't mean less effective. Povidone iodine 5% is the same trusted antiseptic ingredient used in healthcare settings.",
  },
  {
    icon: Package,
    color: "bg-green-500",
    title: "Prepared for Every Ouch",
    desc: "Whether it's a scraped knee at the park or a cut in the kitchen, Boo-Boo Blaster is there for life's little moments.",
  },
];

export default function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 to-pink-700 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4 text-center lg:text-left flex-1">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <img src={ouchBGoneLogo} alt="Ouch-B-Gone!" className="h-20 w-auto brightness-200" />
                <img src={booBooBlasterLogo} alt="Boo-Boo Blaster" className="h-14 w-auto brightness-200 contrast-200" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">Our Story</Badge>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black leading-tight">
                Making First Aid Less Scary for Kids — and Easier for Parents
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
                "First aid that makes boo-boos less scary."
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="shrink-0"
            >
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                src={mascotStanding}
                alt="Boo-Boo Blaster superhero mascot"
                className="h-56 w-auto drop-shadow-2xl"
                data-testid="img-about-hero-mascot"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={ouch1Img} alt="Turning ouch moments into brave moments" className="rounded-3xl shadow-xl w-full" data-testid="img-about-story" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">Turning Ouch Moments Into Brave Moments</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                Parents already have enough stress when a child gets hurt. The last thing they need is a first aid routine that makes the moment worse — a screaming child, messy cotton balls, and stinging alcohol.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                Boo-Boo Blaster was born from a simple idea: what if first aid could be calmer, cleaner, and more manageable? What if kids didn't have to dread it?
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                We developed Boo-Boo Blaster using 5% povidone iodine — a trusted antiseptic used in healthcare for generations — in an easy no-touch spray formula that's gentle enough for kids and effective enough for parents to feel confident about.
              </motion.p>
              <motion.p variants={fadeUp} className="text-xl font-black text-foreground">
                Because every ouch moment deserves a happy ending.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground mb-3">Our Brand Values</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto">Everything we make starts here.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm" data-testid={`card-value-${v.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className={`${v.color} text-white p-3 rounded-xl shrink-0 shadow-sm`}>
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-foreground text-xl mb-2">{v.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 order-2 lg:order-1">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">Meet the Boo-Boo Blaster Superhero</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                The little superhero on the Boo-Boo Blaster label isn't just a character — it's a symbol. It represents being prepared, staying brave, and knowing that even the scariest ouch moments can have a happy ending.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                Kids love the superhero character. Parents love that it takes the fear out of first aid. That's exactly what Ouch-B-Gone! is all about.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/shop" data-testid="button-about-shop">
                  <Button size="lg" className="rounded-full font-black px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    Shop Boo-Boo Blaster
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2 flex justify-center gap-4">
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                src={mascotFlying}
                alt="Boo-Boo Blaster superhero flying"
                className="h-56 w-auto drop-shadow-2xl"
                data-testid="img-about-mascot-flying"
              />
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
                src={mascotRunning}
                alt="Boo-Boo Blaster superhero running"
                className="h-52 w-auto drop-shadow-2xl self-end"
                data-testid="img-about-mascot-running"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
