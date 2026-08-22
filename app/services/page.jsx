import Image from "next/image";
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, FileCheck2, GraduationCap, Globe2, Handshake, Home, Plane, SearchCheck, WalletCards } from 'lucide-react';
import Reveal from '@/components/Reveal';

const services = [
  { icon: GraduationCap, title: 'Study Abroad', text: 'Build a stronger study pathway with profile assessment, destination guidance, institution shortlisting, application filing and visa support.' },
  { icon: BriefcaseBusiness, title: 'Worldwide Work Visa', text: 'We provide work visa services worldwide, helping individuals with work visa applications and processes across different countries.' },
  { icon: Globe2, title: 'Immigration Guidance', text: 'Understand potential immigration routes, documentation requirements and process milestones with structured guidance.' },
  { icon: FileCheck2, title: 'Application Filing', text: 'Organise forms, supporting documents and submission steps with a process designed to reduce avoidable errors.' },
  { icon: WalletCards, title: 'Loan Assistance', text: 'Get practical guidance on education-finance preparation and the documents commonly needed for a funding conversation.' },
  { icon: Plane, title: 'Post-Arrival Services', text: 'Continue your journey with support around the transition after arrival and the practical next steps.' },
];

const process = [
  ['01', 'Discover', SearchCheck, 'Tell us your education, experience, budget, preferred destination and long-term goal.'],
  ['02', 'Plan', Handshake, 'We map a practical pathway around your profile and intended outcome.'],
  ['03', 'Prepare', FileCheck2, 'Get organised for applications, documents and visa-related processes.'],
  ['04', 'Move Forward', Home, 'Track progress, stay informed and prepare for your next chapter abroad.'],
];

export default function ServicesPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <Image src="/stydy, work, settle pic.png" alt="Next Step Private Limited" width={1200} height={900} />
        <Reveal className="page-hero">
          <div className="eyebrow">OUR SERVICES</div>
          <h1>Everything you need for your <span>next move.</span></h1>
          <p>Focused services for students, professionals and individuals planning a future through study, work, immigration or settlement abroad.</p>
        </Reveal>
        <div className="services-list">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal className="service-row" key={title} delay={i * 0.04}>
              <div className="service-row-icon"><Icon /></div>
              <div><span className="service-kicker">SERVICE 0{i + 1}</span><h2>{title}</h2><p>{text}</p></div>
              <BadgeCheck className="service-row-check" />
            </Reveal>
          ))}
        </div>

        <Reveal className="process-block">
          <div className="section-heading centered">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>A simple path from idea to <span>action.</span></h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, Icon, text]) => (
              <div className="process-card" key={number}><span>{number}</span><Icon size={24} /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </Reveal>

        <div className="service-bottom-cta">
          <div><b>Not sure which service fits?</b><span>Start with a profile assessment and we’ll help you identify the right direction.</span></div>
          <Link className="btn btn-primary" href="/contact">Get Started <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
