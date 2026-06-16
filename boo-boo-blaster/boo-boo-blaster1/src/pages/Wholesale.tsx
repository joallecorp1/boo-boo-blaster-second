import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, GraduationCap, Plus, Luggage, Baby, Trophy, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import schoolImg from "@assets/63FFBBC0-865B-4A90-B009-E8B2A77E2B67_1781133758016.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Business name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  quantity: z.string().min(1, "Please select a quantity range"),
  message: z.string().min(10, "Please provide a brief message"),
});

type FormValues = z.infer<typeof schema>;

const targets = [
  { icon: Building2, label: "Pharmacies", color: "bg-blue-100 text-blue-800" },
  { icon: Plus, label: "Pediatric Offices", color: "bg-pink-100 text-pink-800" },
  { icon: GraduationCap, label: "School Nurses", color: "bg-green-100 text-green-800" },
  { icon: Luggage, label: "Camps", color: "bg-yellow-100 text-yellow-800" },
  { icon: Baby, label: "Daycare Centers", color: "bg-purple-100 text-purple-800" },
  { icon: Trophy, label: "Sports Programs", color: "bg-orange-100 text-orange-800" },
  { icon: Package, label: "First Aid Kit Suppliers", color: "bg-teal-100 text-teal-800" },
];

export default function Wholesale() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", business: "", email: "", phone: "", quantity: "", message: "" },
  });

  function onSubmit(_values: FormValues) {
    toast({
      title: "Inquiry submitted!",
      description: "Thanks for reaching out. Our wholesale team will contact you within 2 business days.",
    });
    form.reset();
  }

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4 max-w-2xl mx-auto">
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">B2B Wholesale</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black">
              For Retailers, Clinics &amp; Schools
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
              Bring Boo-Boo Blaster to families through your business, practice, or organization.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src={schoolImg} alt="Boo-Boo Blaster in school setting" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto" data-testid="img-wholesale-school" />
        </div>
      </section>

      {/* Target markets */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground mb-3">Perfect For</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">Anywhere kids need first aid — Boo-Boo Blaster belongs there.</motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {targets.map((t) => (
              <motion.div key={t.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`${t.color} flex items-center gap-2 px-5 py-3 rounded-full font-bold text-lg`} data-testid={`badge-target-${t.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <t.icon className="h-5 w-5" />
                {t.label}
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { title: "Bulk Pricing", desc: "Competitive wholesale pricing for qualified businesses and organizations." },
              { title: "Easy Reorder", desc: "Simple reorder process so you're never out of stock when kids need it." },
              { title: "Trusted by Parents", desc: "Parents already love the brand — stock what they're already looking for." },
            ].map((b) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-muted rounded-2xl p-6 text-center" data-testid={`card-wholesale-benefit-${b.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 className="font-black text-foreground text-xl mb-2">{b.title}</h3>
                <p className="text-muted-foreground font-medium">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto bg-muted rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-black text-foreground mb-2">Submit a Wholesale Inquiry</h2>
            <p className="text-muted-foreground font-medium mb-8">Fill out the form below and our wholesale team will get back to you within 2 business days.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Smith" {...field} data-testid="input-wholesale-name" className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="business" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Business Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="ABC Pharmacy" {...field} data-testid="input-wholesale-business" className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane@business.com" {...field} data-testid="input-wholesale-email" className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Phone (optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-wholesale-phone" className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="quantity" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Quantity Interest *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl" data-testid="select-wholesale-quantity">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1–10 units</SelectItem>
                        <SelectItem value="11-50">11–50 units</SelectItem>
                        <SelectItem value="51-100">51–100 units</SelectItem>
                        <SelectItem value="100+">100+ units</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Message *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your business and how you'd like to stock Boo-Boo Blaster..." rows={4} {...field} data-testid="textarea-wholesale-message" className="rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" size="lg" className="w-full rounded-full font-black text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all" data-testid="button-wholesale-submit">
                  Submit Wholesale Inquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
