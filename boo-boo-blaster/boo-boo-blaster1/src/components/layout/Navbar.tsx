import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ouchBGoneLogo from "@assets/ouch-b-gone-logo-transparent.png";
import booBooBLasterLogo from "@assets/boo-boo-blaster-logo-transparent.png";
import mascotStanding from "@assets/mascot-standing-transparent.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Why Povidone Iodine", href: "/why-povidone-iodine" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Drug Facts", href: "/drug-facts" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Wholesale", href: "/wholesale" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
              <img src={mascotStanding} alt="Boo-Boo Blaster mascot" className="h-16 w-auto" />
              <div className="flex flex-col gap-0">
                <img src={ouchBGoneLogo} alt="Ouch-B-Gone!" className="h-[3.465rem] w-auto -mb-3" />
                <img src={booBooBLasterLogo} alt="Boo-Boo Blaster" className="h-9 w-auto" />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            <div className="flex items-center gap-4 lg:gap-6">
              {navLinks.slice(1, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/shop" data-testid="link-nav-shop-cta">
              <Button size="lg" className="rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-md px-6">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/shop" data-testid="link-nav-mobile-shop-cta">
              <Button size="sm" className="rounded-full font-bold">Shop</Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 -mr-2"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b bg-background absolute top-20 left-0 w-full shadow-lg">
          <div className="flex flex-col space-y-3 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-foreground/90 hover:text-primary p-2 rounded-lg hover:bg-muted"
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
