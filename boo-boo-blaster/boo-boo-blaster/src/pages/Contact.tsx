import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Please write at least a few words"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(_values: FormValues) {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you within 1-2 business days.",
    });
    form.reset();
  }

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4 max-w-2xl mx-auto">
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white border-0 font-bold px-4 py-1 rounded-full">Get in Touch</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black">Contact Ouch-B-Gone!</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 font-medium">
              Questions, feedback, or just want to say hi? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-black text-foreground mb-6">Reach Out</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-black text-foreground">Email</p>
                      <p className="text-muted-foreground font-medium">hello@ouchbgone.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <div className="bg-pink-100 text-pink-600 p-3 rounded-xl shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-black text-foreground">Phone</p>
                      <p className="text-muted-foreground font-medium">1-800-OUCH-BGN</p>
                      <p className="text-sm text-muted-foreground">Mon–Fri, 9am–5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <div className="bg-green-100 text-green-600 p-3 rounded-xl shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-black text-foreground">Address</p>
                      <p className="text-muted-foreground font-medium">Ouch-B-Gone!, USA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-muted rounded-2xl p-6">
                <h3 className="font-black text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground font-medium text-sm">We aim to respond to all inquiries within 1–2 business days. For wholesale inquiries, please use our dedicated Wholesale page for faster routing.</p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 bg-muted rounded-3xl p-8">
              <h2 className="text-2xl font-black text-foreground mb-6">Send a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} data-testid="input-contact-name" className="rounded-xl bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} data-testid="input-contact-email" className="rounded-xl bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Subject *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl bg-white" data-testid="select-contact-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="order">Order Issue</SelectItem>
                          <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                          <SelectItem value="feedback">Product Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Message *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" rows={5} {...field} data-testid="textarea-contact-message" className="rounded-xl bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" size="lg" className="w-full rounded-full font-black text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all" data-testid="button-contact-submit">
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
