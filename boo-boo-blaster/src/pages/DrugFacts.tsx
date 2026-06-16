import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hospitalImg from "@assets/B1A8F41B-1CDC-4B53-87F8-A5FED96B4BA6_1781133758016.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const drugFactsRows = [
  { label: "Active Ingredient", value: "Povidone Iodine 5%", note: "First Aid Antiseptic" },
  { label: "Inactive Ingredients", value: "Purified Water, Glycerin, Sodium Hydroxide", note: null },
  { label: "Storage", value: "Store at 59–77°F (15–25°C). Keep tightly closed.", note: null },
  { label: "Distributed by", value: "Ouch-B-Gone!, USA", note: null },
];

export default function DrugFacts() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4 max-w-2xl mx-auto">
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">Transparency & Trust</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black">Drug Facts &amp; Safety</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
              We believe parents deserve to know exactly what's in Boo-Boo Blaster and how it works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hospital trusted image */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src={hospitalImg} alt="Hospital trusted wound care ingredient" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto" data-testid="img-drug-facts-hospital" />
        </div>
      </section>

      {/* Drug Facts Panel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="border-4 border-foreground rounded-2xl overflow-hidden shadow-xl" data-testid="section-official-drug-facts">
                {/* Header */}
                <div className="bg-foreground text-white px-8 py-6 text-center">
                  <p className="text-sm font-bold text-white/70 mb-1">OFFICIAL OTC DRUG LABEL</p>
                  <h2 className="text-3xl font-black tracking-tight">Drug Facts</h2>
                </div>

                {/* Active Ingredient */}
                <div className="border-b-4 border-foreground px-8 py-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-black text-foreground text-lg">Active Ingredient (in each mL)</p>
                      <p className="text-muted-foreground font-medium mt-1">Povidone Iodine 5%</p>
                    </div>
                    <p className="font-bold text-foreground text-right shrink-0 ml-4">Purpose<br /><span className="text-muted-foreground font-medium">First Aid Antiseptic</span></p>
                  </div>
                </div>

                {/* Uses */}
                <div className="border-b-4 border-foreground px-8 py-5">
                  <p className="font-black text-foreground text-lg mb-3">Uses</p>
                  <p className="text-muted-foreground font-medium">First aid to help prevent infection in minor:</p>
                  <ul className="list-disc list-inside text-muted-foreground font-medium mt-2 space-y-1 ml-2">
                    <li>cuts</li>
                    <li>scrapes</li>
                    <li>burns</li>
                  </ul>
                </div>

                {/* Warnings */}
                <div className="border-b-4 border-foreground px-8 py-5 bg-red-50">
                  <p className="font-black text-foreground text-lg mb-3">Warnings</p>
                  <div className="space-y-3 text-sm font-medium text-foreground">
                    <p><span className="font-black">For external use only.</span></p>
                    <p><span className="font-black">Do not use</span> in the eyes or apply over large areas of the body.</p>
                    <p><span className="font-black">Stop use and ask a doctor if:</span></p>
                    <ul className="list-disc list-inside ml-2 space-y-1 text-muted-foreground">
                      <li>condition worsens</li>
                      <li>symptoms persist more than 10 days</li>
                      <li>redness, irritation, swelling, pain, or other symptoms occur or increase</li>
                    </ul>
                    <p><span className="font-black">Ask a doctor before use</span> for deep or puncture wounds, animal bites, or serious burns.</p>
                    <p><span className="font-black">Do not use</span> if you are allergic to iodine.</p>
                    <p><span className="font-black">Keep out of reach of children.</span> If swallowed, get medical help or contact a Poison Control Center right away.</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="border-b-4 border-foreground px-8 py-5">
                  <p className="font-black text-foreground text-lg mb-3">Directions</p>
                  <ul className="list-disc list-inside text-muted-foreground font-medium space-y-2">
                    <li>Clean the affected area.</li>
                    <li>Apply to the area 1 to 3 times daily.</li>
                    <li>May be covered with a sterile bandage.</li>
                    <li>Allow to dry before covering.</li>
                  </ul>
                </div>

                {/* Inactive Ingredients */}
                <div className="border-b-4 border-foreground px-8 py-5">
                  <p className="font-black text-foreground text-lg mb-2">Inactive Ingredients</p>
                  <p className="text-muted-foreground font-medium">Purified Water, Glycerin, Sodium Hydroxide</p>
                </div>

                {/* Storage */}
                <div className="border-b-4 border-foreground px-8 py-5">
                  <p className="font-black text-foreground text-lg mb-2">Storage</p>
                  <p className="text-muted-foreground font-medium">Store at 59–77°F (15–25°C). Keep tightly closed.</p>
                </div>

                {/* Distributor */}
                <div className="px-8 py-5">
                  <p className="font-black text-foreground text-lg mb-2">Distributed By</p>
                  <p className="text-muted-foreground font-medium">Ouch-B-Gone!, USA</p>
                  <p className="text-xs text-muted-foreground mt-3">Boo-Boo Blaster is a 2 fl oz (59.1 mL) antiseptic spray product.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional info table */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-8 text-center">Product Summary</motion.h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md divide-y divide-border">
            {drugFactsRows.map((row) => (
              <motion.div key={row.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-4 px-6 py-4" data-testid={`row-drug-fact-${row.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="font-black text-foreground w-40 shrink-0">{row.label}</span>
                <div>
                  <span className="text-muted-foreground font-medium">{row.value}</span>
                  {row.note && <span className="text-sm text-muted-foreground font-medium ml-2">({row.note})</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-foreground">First Aid You Can Feel Confident In</h2>
            <p className="text-muted-foreground font-medium">For life's little ouch moments.</p>
            <Link href="/shop" data-testid="button-drug-facts-shop">
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
