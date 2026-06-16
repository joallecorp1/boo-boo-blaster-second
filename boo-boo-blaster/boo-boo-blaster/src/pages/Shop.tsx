import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Check, Shield, Truck, RefreshCw, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import bottleImg from "@assets/C14547C2-D8A9-45CA-8D9A-7755D278B8A0_1781133758015.png";
import familyOutdoorImg from "@assets/2AF21C94-0EDA-4E82-8ECE-A955A1E6DF23_1781133758016.png";
import lessTearImg from "@assets/080F030B-3AA6-43A6-8BEF-F5F8E1326C51_1781133758016.png";
import ouch1Img from "@assets/1621E88E-2D70-4B01-AF4A-A5D7ABB3A236_1781133758016.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const bullets = [
  "Helps prevent infection in minor cuts, scrapes, and burns",
  "No-touch spray application — no cotton balls needed",
  "Kid-friendly first aid — less tears, more comfort",
  "No sting formula — gentle on sensitive skin",
  "Great for home, school, sports, travel, and first aid kits",
];

const reviews = [
  { name: "Sarah M.", stars: 5, text: "Works great on my 4-year-old's scraped knee! No crying, and it actually cleans the wound properly. Will definitely be buying again.", location: "Austin, TX" },
  { name: "Jason P.", stars: 5, text: "Finally — no more tears at first aid time! My kids used to run away when they got hurt. Now they actually ask for the Boo-Boo Blaster.", location: "Denver, CO" },
  { name: "Lauren K.", stars: 5, text: "Love the easy spray. My son actually lets me use it now. So much better than alcohol wipes. Keeps one in every room.", location: "Portland, OR" },
];

const faqItems = [
  { q: "What is Boo-Boo Blaster used for?", a: "For first aid to help prevent infection in minor cuts, scrapes, and burns." },
  { q: "Does it sting?", a: "It is designed as a kid-friendly, no-sting formula." },
  { q: "What is the active ingredient?", a: "Povidone iodine 5%." },
  { q: "How often can I use it?", a: "Spray directly on the affected area 1 to 3 times daily." },
  { q: "Can I use it on deep wounds?", a: "Ask a doctor before use for deep or puncture wounds, animal bites, or serious burns." },
];

const trustBadges = [
  { icon: Truck, label: "Free Shipping $25+" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Heart, label: "Safe for Kids" },
  { icon: Shield, label: "Hospital Trusted Ingredient" },
];

const images = [bottleImg, familyOutdoorImg, lessTearImg, ouch1Img];

export default function Shop() {
  const [qty, setQty] = useState(1);
  const [subscribe, setSubscribe] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const { toast } = useToast();

  const price = subscribe ? 12.74 : 14.99;

  function addToCart() {
    toast({
      title: "Added to cart!",
      description: `${qty} x Boo-Boo Blaster added to your cart.`,
    });
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-muted py-3 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground font-medium">
          <span>Home</span> / <span className="text-foreground font-bold">Shop</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4">
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border-2 border-border bg-muted/30">
              <img src={images[selectedImg]} alt="Boo-Boo Blaster product" className="w-full h-auto object-contain max-h-[500px]" data-testid="img-product-main" />
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImg(i)} className={`rounded-xl overflow-hidden border-2 transition-all ${selectedImg === i ? "border-primary shadow-md" : "border-border hover:border-primary/50"}`} data-testid={`button-product-image-${i}`}>
                  <img src={img} alt={`Product view ${i + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp}>
              <Badge className="bg-green-100 text-green-800 border-0 font-bold mb-3">In Stock — Ships Fast</Badge>
              <h1 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
                Boo-Boo Blaster 5% Povidone Iodine Antiseptic Spray
              </h1>
              <p className="text-muted-foreground font-medium mt-1">By Ouch-B-Gone! | 2 fl oz (59.1 mL)</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="font-bold text-foreground">4.9</span>
              <span className="text-muted-foreground text-sm">(48 reviews)</span>
            </motion.div>

            {/* Subscribe toggle */}
            <motion.div variants={fadeUp} className="space-y-3">
              <div
                onClick={() => setSubscribe(false)}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${!subscribe ? "border-primary bg-blue-50" : "border-border"}`}
                data-testid="option-one-time"
              >
                <div>
                  <p className="font-bold text-foreground">One-time purchase</p>
                  <p className="text-sm text-muted-foreground">No commitment</p>
                </div>
                <span className="text-2xl font-black text-foreground">$14.99</span>
              </div>
              <div
                onClick={() => setSubscribe(true)}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${subscribe ? "border-primary bg-blue-50" : "border-border"}`}
                data-testid="option-subscribe"
              >
                <div>
                  <p className="font-bold text-foreground">Subscribe &amp; Save 15%</p>
                  <p className="text-sm text-green-700 font-semibold">Delivered every 30 days — cancel anytime</p>
                </div>
                <span className="text-2xl font-black text-green-700">$12.74</span>
              </div>
            </motion.div>

            {/* Qty + Cart */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="flex items-center border-2 border-border rounded-full overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-muted transition-colors" data-testid="button-qty-minus">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 font-black text-lg min-w-[2.5rem] text-center" data-testid="text-qty">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-muted transition-colors" data-testid="button-qty-plus">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button size="lg" onClick={addToCart} className="flex-1 rounded-full font-black text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2" data-testid="button-add-to-cart">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart — ${(price * qty).toFixed(2)}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-muted rounded-xl p-3">
                  <b.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-foreground">{b.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Bullet benefits */}
            <motion.div variants={fadeUp} className="space-y-2">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{b}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Drug Facts */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 border-4 border-foreground rounded-2xl overflow-hidden max-w-2xl mx-auto" data-testid="section-drug-facts">
          <div className="bg-foreground text-white px-6 py-4">
            <h2 className="text-2xl font-black tracking-tight">Drug Facts</h2>
          </div>
          <div className="p-6 space-y-4 text-sm font-medium">
            <div className="border-b pb-3">
              <span className="font-black text-foreground">Active Ingredient:</span>
              <span className="text-muted-foreground ml-2">Povidone Iodine 5% — First Aid Antiseptic</span>
            </div>
            <div className="border-b pb-3">
              <span className="font-black text-foreground">Uses:</span>
              <span className="text-muted-foreground ml-2">First aid to help prevent infection in minor cuts, scrapes, and burns.</span>
            </div>
            <div className="border-b pb-3">
              <span className="font-black text-foreground">Warnings:</span>
              <p className="text-muted-foreground mt-1">For external use only. Do not use in the eyes or over large areas of the body. Stop use and ask a doctor if condition worsens or symptoms persist more than 10 days. Keep out of reach of children.</p>
            </div>
            <div className="border-b pb-3">
              <span className="font-black text-foreground">Directions:</span>
              <p className="text-muted-foreground mt-1">Clean the affected area. Apply to the area 1 to 3 times daily. May be covered with a sterile bandage. Allow to dry.</p>
            </div>
            <div className="border-b pb-3">
              <span className="font-black text-foreground">Inactive Ingredients:</span>
              <span className="text-muted-foreground ml-2">Purified Water, Glycerin, Sodium Hydroxide</span>
            </div>
            <div>
              <span className="font-black text-foreground">Storage:</span>
              <span className="text-muted-foreground ml-2">Store at 59–77°F (15–25°C). Keep tightly closed.</span>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <div className="mt-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-8 text-center">What Parents Are Saying</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-muted rounded-2xl p-6" data-testid={`card-review-${i}`}>
                <div className="flex text-yellow-400 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground font-medium mb-4 leading-relaxed">"{r.text}"</p>
                <div>
                  <p className="font-black text-foreground">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-8 text-center">Frequently Asked Questions</motion.h2>
          <Accordion type="single" collapsible className="space-y-3" data-testid="accordion-shop-faq">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="font-bold text-foreground hover:no-underline py-4 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium pb-4">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
