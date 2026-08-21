import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Image src="/logo.png" alt="Next Step Private Limited" width={185} height={70} /><p>Study • Work • Settle Abroad<br />Your dream. Our guidance.</p></div>
        <div><h4>Explore</h4><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Contact</h4><a href="tel:+919059955582"><Phone size={15} />90599 55582</a><a href="tel:+919059955584"><Phone size={15} />90599 55584</a><a href="mailto:info@nextstepoverseas.com"><Mail size={15} />info@nextstepoverseas.com</a><span><MapPin size={15} />Hyderabad, Telangana</span></div>
        <div><h4>Start here</h4><p>Ready to explore your options?</p><Link className="footer-link" href="/contact">Talk to an advisor <ArrowUpRight size={15} /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Next Step Private Limited. All rights reserved.</span><span>Study • Work • Settle</span></div>
    </footer>
  );
}
