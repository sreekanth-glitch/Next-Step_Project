import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';

export default function ContactPage() {
  return (
    <section className="inner-page contact-page">
      <div className="container">
        <Reveal className="page-hero">
          <div className="eyebrow">CONTACT NEXT STEP</div>
          <h1>Let’s plan your <span>next step.</span></h1>
          <p>Share your basic details and a document if you have one ready. Your enquiry will be sent securely to the configured business inbox.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="info-card"><Phone /><div><b>Call Us</b><a href="tel:+919059955582">90599 55582</a><a href="tel:+919059955584">90599 55584</a></div></div>
            <div className="info-card"><Mail /><div><b>Email</b><a href="mailto:info@nextstepoverseas.com">info@nextstepoverseas.com</a></div></div>
            <div className="info-card"><MapPin /><div><b>Visit Us</b><span>5th Floor, Plot No. 8, 9th Phase Rd, beside Lotus Mall, Kalyan Nagar Housing Board Colony, KPHB Phase 6, Kukatpally, Hyderabad, Telangana 500085</span></div></div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
