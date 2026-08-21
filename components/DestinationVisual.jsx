'use client';

import { motion } from 'framer-motion';

export default function DestinationVisual() {
  return (
    <div className="destination-visual" aria-label="3D-inspired abroad destinations illustration">
      <div className="visual-glow" />
      <div className="planet"><div className="planet-line" /><div className="continent c1" /><div className="continent c2" /><div className="continent c3" /></div>
      <motion.div className="route route-a" animate={{ rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="route route-b" animate={{ rotate: [0, -2, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      <div className="destination-tower tower-a"><span /><b>AU</b></div>
      <div className="destination-tower tower-b"><span /><b>UK</b></div>
      <div className="destination-tower tower-c"><span /><b>CA</b></div>
      <motion.div className="paper-plane" animate={{ x: [0, 12, 0], y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity }}>✦</motion.div>
      <div className="visual-caption"><span>EXPLORE</span><b>GLOBAL</b><em>OPPORTUNITIES</em></div>
    </div>
  );
}
