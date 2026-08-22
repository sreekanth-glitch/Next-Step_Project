import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, GraduationCap, Globe2, Plane, ShieldCheck, Sparkles, Target, UsersRound } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import Reveal from '@/components/Reveal';
import DestinationVisual from '@/components/DestinationVisual';

const services = [
  { icon: GraduationCap, title: 'Study Abroad', text: 'University shortlisting, profile strategy, applications and visa guidance built around your goals.' },
  { icon: BriefcaseBusiness, title: 'Work Visa', text: 'Worldwide work visa guidance covering applications, documentation and process coordination.' },
  { icon: Globe2, title: 'Immigration', text: 'Structured support for eligible migration pathways and long-term settlement planning.' },
  { icon: Plane, title: 'Post-Arrival', text: 'Practical guidance after you land so your next chapter starts with confidence.' },
];

const destinations = ['Australia', 'United States', 'Canada', 'United Kingdom', 'Germany', 'New Zealand'];

export default function Home() {
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> YOUR DREAM. OUR GUIDANCE.</div>
            <h1>Take your <span>next step</span> towards a brighter future abroad.</h1>
            <p className="hero-lead">Study, work, migrate and settle with a clear plan, professional guidance and support from application to arrival.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Start Your Journey <ArrowRight size={18} /></Link>
              <Link className="btn btn-ghost" href="/services">Explore Services</Link>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={17} /> Process-focused guidance</span>
              <span><BadgeCheck size={17} /> Personal mentorship</span>
              <span><Globe2 size={17} /> Worldwide work visa support</span>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.12}>
            <DestinationVisual />
            <div className="floating-card float-two"><Target size={16} /><b>Next Step</b><span>Closer</span></div>
          </Reveal>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div><strong>12+</strong><span>Countries & destinations</span></div>
          <div><strong>360°</strong><span>Guidance from profile to arrival</span></div>
          <div><strong>1:1</strong><span>Personal mentorship</span></div>
          <div><strong>Global</strong><span>Work visa service support</span></div>
        </div>
      </section>

      <section className="section-pad" id="services-preview">
        <div className="container">
          <Reveal className="section-heading centered">
            <div className="eyebrow">WHAT WE DO</div>
            <h2>One trusted partner for your <span>global journey.</span></h2>
            <p>From your first consultation to your next destination, our services are designed to remove uncertainty and keep your application moving.</p>
          </Reveal>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} className="service-card" delay={i * 0.06}>
                <div className="icon-box"><Icon size={24} /></div>
                <div className="service-number">0{i + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/services">Learn more <ArrowRight size={15} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container split-grid">
          <Reveal>
            <div className="eyebrow light">WHY NEXT STEP</div>
            <h2>Guidance that feels <span>personal.</span> Strategy that stays practical.</h2>
            <p className="muted">Your destination is only one part of the journey. We help you understand the pathway, prepare the right documents and make informed decisions at every stage.</p>
            <div className="check-list">
              <div><BadgeCheck /> Personal profile assessment and counselling</div>
              <div><BadgeCheck /> Application filing and documentation support</div>
              <div><BadgeCheck /> Online application tracking and updates</div>
              <div><BadgeCheck /> Worldwide work visa guidance and process support</div>
            </div>
          </Reveal>
          <Reveal className="glass-panel" delay={0.1}>
            <div className="orb orb-a" /><div className="orb orb-b" />
            <UsersRound size={34} />
            <h3>Your plan. Your pace. Your next step.</h3>
            <p>Build a pathway around your academic profile, career goals, budget and preferred destination.</p>
            <Link className="text-link" href="/about">Meet Next Step <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-heading centered">
            <div className="eyebrow">POPULAR DESTINATIONS</div>
            <h2>Think global. <span>Go prepared.</span></h2>
          </Reveal>
          <div className="destination-grid">
            {destinations.map((country, i) => (
              <Reveal key={country} className="destination-card" delay={i * 0.04}>
                <span className="flag-chip">{['🇦🇺','🇺🇸','🇨🇦','🇬🇧','🇩🇪','🇳🇿'][i]}</span>
                <div><b>{country}</b><span>Explore opportunities</span></div>
                <ArrowRight size={18} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad cta-section">
        <div className="container cta-card">
          <div>
            <div className="eyebrow">READY FOR THE NEXT STEP?</div>
            <h2>Turn your abroad plan into an <span>action plan.</span></h2>
            <p>Share your details and our team can understand your goal and guide you on the right starting point.</p>
          </div>
          <Link className="btn btn-primary" href="/contact">Talk to an Advisor <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
