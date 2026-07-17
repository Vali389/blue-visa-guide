import { Link } from "@tanstack/react-router";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.18_0.03_240)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg gradient-primary">
              <Globe2 className="h-5 w-5" />
            </div>
            <span className="text-2xl font-bold">VisaGuide<span style={{ color: "var(--accent)" }}>.world</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Your worldwide travel visa guide. Learn requirements and how to apply for a visa to any country in the world.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: "var(--accent)" }} /> 200+ countries covered</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: "var(--accent)" }} /> hello@visaguide.world</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: "var(--accent)" }} /> +1 (555) 010-2030</div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/visas-by-country" className="hover:text-white">Visas by Country</Link></li>
            <li><Link to="/visas-by-policy" className="hover:text-white">Visas by Policy</Link></li>
            <li><Link to="/passport-index" className="hover:text-white">Passport Index</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} VisaGuide.world — All rights reserved.
      </div>
    </footer>
  );
}
