import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const faqs = [
  {
    q: "What is Boo-Boo Blaster used for?",
    a: "Boo-Boo Blaster is for first aid to help prevent infection in minor cuts, scrapes, and burns. It contains 5% povidone iodine, a trusted antiseptic ingredient.",
    category: "Product",
  },
  {
    q: "Does it sting?",
    a: "Boo-Boo Blaster is designed as a kid-friendly, no-sting formula. It's specifically formulated to make first aid less stressful for children and parents.",
    category: "Product",
  },
  {
    q: "What is the active ingredient?",
    a: "The active ingredient is Povidone Iodine 5%. This is a well-known, hospital-trusted antiseptic ingredient that has been used in first aid settings for generations.",
    category: "Ingredients",
  },
  {
    q: "Can I use it on deep wounds?",
    a: "Ask a doctor before use for deep or puncture wounds, animal bites, or serious burns. Boo-Boo Blaster is intended for minor everyday cuts, scrapes, and burns only.",
    category: "Safety",
  },
  {
    q: "How often can I use it?",
    a: "Spray directly on the affected area 1 to 3 times daily, or as directed. Always allow to dry before covering with a bandage.",
    category: "Directions",
  },
  {
    q: "Is this a replacement for a doctor?",
    a: "No. Stop use and ask a doctor if symptoms persist, worsen, or irritation develops. Boo-Boo Blaster is for minor everyday first aid, not serious medical conditions.",
    category: "Safety",
  },
  {
    q: "Where can I use Boo-Boo Blaster?",
    a: "Boo-Boo Blaster is great for home, school, sports bags, travel kits, and first aid kits — anywhere life's little accidents happen.",
    category: "Usage",
  },
  {
    q: "Is it safe for children?",
    a: "Yes, it is designed to be kid-friendly. Always supervise use and keep out of reach of children. Do not use in the eyes or allow children to self-apply without adult supervision.",
    category: "Safety",
  },
  {
    q: "What are the inactive ingredients?",
    a: "Purified Water, Glycerin, Sodium Hydroxide.",
    category: "Ingredients",
  },
  {
    q: "Can I use it if I'm allergic to iodine?",
    a: "No. Do not use Boo-Boo Blaster if you are allergic to iodine. If a reaction occurs, stop use and consult a doctor.",
    category: "Safety",
  },
  {
    q: "How should I store Boo-Boo Blaster?",
    a: "Store at 59–77°F (15–25°C). Keep the bottle tightly closed when not in use.",
    category: "Usage",
  },
  {
    q: "Is Boo-Boo Blaster available for bulk purchase or wholesale?",
    a: "Yes! We offer wholesale purchasing for pharmacies, schools, pediatric offices, daycares, camps, and sports programs. Visit our Wholesale page to submit an inquiry.",
    category: "Purchasing",
  },
];

const categories = ["All", "Product", "Ingredients", "Safety", "Directions", "Usage", "Purchasing"];

export default function FAQ() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4 max-w-2xl mx-auto">
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">Have Questions?</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black">Frequently Asked Questions</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
              Everything parents want to know about Boo-Boo Blaster.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-full-faq">
              {faqs.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                  <AccordionItem value={`item-${i}`} className="border-2 border-border rounded-2xl px-6 overflow-hidden" data-testid={`faq-item-${i}`}>
                    <AccordionTrigger className="font-black text-foreground hover:no-underline py-5 text-left text-lg">
                      <span>{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <p className="text-muted-foreground font-medium leading-relaxed">{item.a}</p>
                      <Badge className="mt-3 bg-muted text-muted-foreground border-0 text-xs font-bold">{item.category}</Badge>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-black text-foreground mb-3">Still Have Questions?</h2>
              <p className="text-muted-foreground font-medium mb-6">Our team is happy to help. Reach out and we'll get back to you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" data-testid="button-faq-contact">
                  <Button variant="outline" size="lg" className="rounded-full font-bold border-2">Contact Us</Button>
                </Link>
                <Link href="/shop" data-testid="button-faq-shop">
                  <Button size="lg" className="rounded-full font-bold">Shop Boo-Boo Blaster</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
