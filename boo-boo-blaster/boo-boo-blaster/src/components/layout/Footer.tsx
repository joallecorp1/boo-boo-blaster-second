import { Link } from "wouter";
import ouchBGoneLogo from "@assets/ouch-b-gone-logo-transparent.png";
import booBooBLasterLogo from "@assets/boo-boo-blaster-logo-transparent.png";
import mascotFlying from "@assets/mascot-flying1-transparent.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Why Povidone Iodine", href: "/why-povidone-iodine" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Drug Facts", href: "/drug-facts" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 inline-flex" data-testid="link-footer-logo">
              <img src={mascotFlying} alt="Boo-Boo Blaster mascot" className="h-24 w-auto drop-shadow-lg" />
              <div className="flex flex-col gap-0.5">
                <img src={ouchBGoneLogo} alt="Ouch-B-Gone!" className="h-[5.2rem] w-auto brightness-200" />
                <img src={booBooBLasterLogo} alt="Boo-Boo Blaster" className="h-12 w-auto brightness-200" />
              </div>
            </Link>
            <p className="text-lg font-bold text-white/90 mb-6">
              First aid made less scary.
            </p>
            <div className="text-sm text-white/70 space-y-4 max-w-md">
              <p>
                <strong>Legal disclaimer:</strong> For minor cuts, scrapes, and burns. Use as directed. 
                These statements have not been evaluated by the FDA. This product is not intended to 
                diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {links.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-primary transition-colors font-medium"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">More Info</h3>
            <ul className="space-y-3">
              {links.slice(5).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-primary transition-colors font-medium"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-medium">
            &copy; {currentYear} Ouch-B-Gone! All rights reserved.
          </p>
          <div className="flex gap-4 text-white/60 text-sm font-medium">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
