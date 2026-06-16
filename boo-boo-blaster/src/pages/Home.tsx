import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Droplets, Droplet, Heart, Star, Check, X, ChevronRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bottleImg from "@assets/C14547C2-D8A9-45CA-8D9A-7755D278B8A0_1781133758015.png";
import familyOutdoorImg from "@assets/2AF21C94-0EDA-4E82-8ECE-A955A1E6DF23_1781133758016.png";
import lessTearImg from "@assets/080F030B-3AA6-43A6-8BEF-F5F8E1326C51_1781133758016.png";
import comparisonImg from "@assets/7721200F-97D3-4285-975D-B2A8C6415259_1781133758016.png";
import fromTearsImg from "@assets/3F221800-CC8E-4F35-B052-80B01CA02BAA_1781133758016.png";
import whyIodineImg from "@assets/6F231134-E758-476A-BB45-E5B1E9864907_1781133758016.png";
import cabinetImg from "@assets/73202550-DD1F-48B0-BA24-B2FCD488D86E_1781133758016.png";
import ouchBGoneLogo from "@assets/ouch-b-gone-logo-transparent.png";
import booBooBlasterLogo from "@assets/boo-boo-blaster-logo-transparent.png";
import mascotFlying from "@assets/mascot-flying1-transparent.png";
import mascotRunning from "@assets/mascot-flying2-transparent.png";
import mascotStanding from "@assets/mascot-standing-transparent.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  { icon: Heart, color: "bg-pink-500", label: "No Sting Formula", desc: "Less tears, more comfort" },
  { icon: Droplet, color: "bg-blue-500", label: "Easy Spray", desc: "Quick, no-touch application" },
  { icon: Shield, color: "bg-green-500", label: "Kills Germs", desc: "Helps prevent infection in minor wounds" },
  { icon: Star, color: "bg-yellow-500", label: "Gentle & Effective", desc: "First aid parents can trust" },
  { icon: Package, color: "bg-purple-500", label: "For Everyday Ouchies", desc: "Cuts, scrapes, burns, bug bites" },
];

const oldWay = ["Cotton balls & messy liquid", "Stings & burns on contact", "Touches the wound", "More tears & stress"];
const newWay = ["Easy no-touch spray", "No sting formula", "Helps prevent infection", "Less tears, more smiles"];

const trustStats = [
  { value: "150+", label: "Years of iodine use in medicine" },
  { value: "5%", label: "Povidone iodine — hospital trusted" },
  { value: "0", label: "Sting formula — kid approved" },
  { value: "#1", label: "First choice for minor wounds*" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-pink-50 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <img src={ouchBGoneLogo} alt="Ouch-B-Gone!" className="h-24 w-auto" data-testid="img-hero-ouch-logo" />
                <img src={booBooBlasterLogo} alt="Boo-Boo Blaster" className="h-16 w-auto" data-testid="img-hero-bbb-logo" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <Badge className="bg-blue-100 text-blue-800 border-0 text-sm font-bold px-4 py-1 rounded-full">
                  5% Povidone Iodine Antiseptic Spray
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                First Aid Made{" "}
                <span className="text-primary">Easy,</span>{" "}
                <span className="text-secondary">Gentle</span>{" "}
                &amp; Kid-Friendly
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Boo-Boo Blaster is a 5% povidone iodine antiseptic spray that helps prevent infection in minor cuts, scrapes, and burns — with an easy no-touch spray kids and parents can feel better about.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop" data-testid="button-hero-shop">
                  <Button size="lg" className="rounded-full font-bold text-lg px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                    Shop Boo-Boo Blaster
                  </Button>
                </Link>
                <Link href="/why-povidone-iodine" data-testid="button-hero-learn">
                  <Button size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 border-2 w-full sm:w-auto hover:-translate-y-1 transition-all">
                    Learn Why Povidone Iodine
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
                {["Kills Germs", "Less Tears", "No Sting"].map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 text-sm font-bold text-green-700">
                    <Check className="h-4 w-4 text-green-500" />
                    {tag}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={familyOutdoorImg} alt="Family using Boo-Boo Blaster outdoors" className="w-full h-auto object-cover" data-testid="img-hero-family" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block"
              >
                <img src={bottleImg} alt="Boo-Boo Blaster bottle" className="h-28 w-auto" data-testid="img-hero-bottle" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-8 -right-6 hidden lg:block"
              >
                <img src={mascotFlying} alt="Boo-Boo Blaster superhero mascot" className="h-36 w-auto drop-shadow-2xl" data-testid="img-hero-mascot-flying" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Parents Love It */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Why Parents Love It</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Every feature designed with one thing in mind: making first aid less scary for everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {benefits.map((b) => (
                <motion.div key={b.label} variants={fadeUp} className="bg-muted rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition-shadow" data-testid={`card-benefit-${b.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className={`${b.color} text-white p-3 rounded-xl shrink-0 shadow-sm`}>
                    <b.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-foreground text-lg mb-1">{b.label}</h3>
                    <p className="text-muted-foreground font-medium">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-1">
                <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[140px]">
                  <img src={lessTearImg} alt="Less Tears More Comfort" className="w-full h-full object-cover" data-testid="img-benefits-lesstears" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* First Aid Has Changed — comparison */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground mb-3">First Aid Has Changed</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">No Touch. No Sting. Less Tears.</motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden shadow-2xl mb-10">
            <img src={comparisonImg} alt="First Aid Has Changed — Old Way vs Boo-Boo Blaster" className="w-full h-auto" data-testid="img-comparison" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="font-black text-red-700 text-xl mb-4">The Old Way</h3>
              <ul className="space-y-3">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-red-800 font-semibold">
                    <X className="h-5 w-5 text-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="font-black text-green-700 text-xl mb-4">Boo-Boo Blaster</h3>
              <ul className="space-y-3">
                {newWay.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-green-800 font-semibold">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Povidone Iodine teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={whyIodineImg} alt="Why Povidone Iodine education graphic" className="rounded-3xl shadow-xl w-full" data-testid="img-why-iodine-teaser" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Badge className="bg-blue-100 text-blue-800 border-0 font-bold px-4 py-1 rounded-full">Trusted for 150+ Years</Badge>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">Why Povidone Iodine?</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                A time-tested iodine-based antiseptic used in hospitals, clinics, and first aid settings for generations. Povidone iodine helps prevent infection in minor cuts, scrapes, and burns — a trusted alternative to plain alcohol.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {["Used in hospitals and clinics for decades", "Broad germ protection on contact", "Water-soluble and easy to apply", "A trusted iodine-based alternative to plain alcohol"].map((pt) => (
                  <motion.li key={pt} variants={fadeUp} className="flex items-start gap-2 text-foreground font-semibold">
                    <Check className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    {pt}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/why-povidone-iodine" data-testid="link-why-iodine-learn-more">
                  <Button variant="outline" className="rounded-full font-bold border-2 gap-2">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">How To Use Boo-Boo Blaster</h2>
              <p className="text-muted-foreground text-lg">Three simple steps — fast, easy, and stress-free.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Clean the area", desc: "Gently clean the affected area before applying.", color: "bg-blue-500" },
                { step: "2", title: "Spray directly", desc: "Apply to the affected area 1–3 times daily.", color: "bg-pink-500" },
                { step: "3", title: "Cover if needed", desc: "May be covered with a sterile bandage. Let dry first.", color: "bg-green-500" },
              ].map((s) => (
                <motion.div key={s.step} variants={fadeUp} className="text-center" data-testid={`card-step-${s.step}`}>
                  <div className={`${s.color} text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    {s.step}
                  </div>
                  <h3 className="font-black text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-medium">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="text-center text-sm text-muted-foreground mt-8 font-medium">For external use only. Use as directed.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-foreground text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center" data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{s.value}</div>
                <div className="text-white/80 font-semibold text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-8">*Based on Povidone Iodine as an active ingredient in first aid antiseptics.</p>
        </div>
      </section>

      {/* From Tears to Smiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={fromTearsImg} alt="From Tears to Smiles" className="w-full h-auto" data-testid="img-from-tears-to-smiles" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cabinet — The first thing parents reach for */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 order-2 lg:order-1">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground">
                The First Thing<br />
                <span className="text-primary">Parents Reach For</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                A must-have in every home medicine cabinet, school bag, sports kit, and first aid box. Boo-Boo Blaster is the confident choice for parents who want to be prepared for every little ouch.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["Home", "School", "Sports", "Travel", "Daycare", "Camp"].map((tag) => (
                  <Badge key={tag} className="bg-blue-100 text-blue-800 border-0 font-bold px-4 py-1.5 rounded-full text-sm">{tag}</Badge>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link href="/shop" data-testid="button-cabinet-shop">
                  <Button size="lg" className="rounded-full font-bold px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Shop Boo-Boo Blaster
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
              <img src={cabinetImg} alt="The first thing parents reach for" className="rounded-3xl shadow-xl w-full" data-testid="img-cabinet" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6 max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black">Ready to Blast Away Boo-Boos?</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
              Be prepared. Be protected. Be confident.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" data-testid="button-cta-final-shop">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-black text-lg px-10 shadow-lg hover:-translate-y-1 transition-all w-full sm:w-auto">
                  Shop Now — $14.99
                </Button>
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/70 text-sm">For minor cuts, scrapes, and burns. Use as directed.</motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
