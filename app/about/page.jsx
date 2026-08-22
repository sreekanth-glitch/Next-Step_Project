import Image from "next/image";
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Compass, HeartHandshake, Lightbulb, ShieldCheck, Target } from 'lucide-react';
import Reveal from '@/components/Reveal';

const values = [
  ['Clarity', 'We simplify complex pathways into clear, practical next actions.', Compass],
  ['Personal Guidance', 'Your profile, goals and destination matter. Advice should never feel one-size-fits-all.', HeartHandshake],
  ['Responsible Process', 'We focus on accurate documentation, transparent communication and organised follow-up.', ShieldCheck],
  ['Long-Term Thinking', 'The goal is not just an application; it is a stronger next chapter abroad.', Target],
];

export default function AboutPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <Image
          src="/About.jpg"
          alt="Next Step Private Limited"
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="service img"
          style={{ width: "100%", height: "auto" }}
        />
        <Reveal className="page-hero">
          <div className="eyebrow">ABOUT NEXT STEP</div>
          <h1>Your ambition deserves a <span>clear pathway.</span></h1>
          <p>Next Step Private Limited is an abroad consultancy focused on helping individuals explore study, work, immigration and settlement opportunities with structured guidance.</p>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-story">
            <div className="mini-label">OUR APPROACH</div>
            <h2>From “Where do I start?” to “I’m ready.”</h2>
            <p>We bring together profile assessment, counselling, application support, visa guidance and post-arrival services so you can make decisions with more confidence.</p>
            <p>We also provide work visa services worldwide, helping individuals with work visa applications and processes across different countries.</p>
            <div className="about-badges"><span><BadgeCheck /> Application-focused</span><span><BadgeCheck /> Destination-aware</span></div>
            <Link className="btn btn-primary" href="/contact">Discuss Your Goal <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal className="about-orbit" delay={0.12}>
            <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
            <div className="orbit-core"><Lightbulb size={40} /><b>NEXT</b><span>STEP</span></div>
            <div className="orbit-pill p1">Study</div><div className="orbit-pill p2">Work</div><div className="orbit-pill p3">Settle</div>
          </Reveal>
        </div>

        <Reveal className="section-heading centered about-heading">
          <div className="eyebrow">WHAT WE VALUE</div>
          <h2>Professional guidance with a <span>human touch.</span></h2>
        </Reveal>
        <div className="values-grid">
          {values.map(([title, text, Icon], i) => (
            <Reveal className="value-card" key={title} delay={i * 0.06}>
              <Icon size={25} /><h3>{title}</h3><p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
