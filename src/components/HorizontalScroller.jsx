import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const panels = [
  { id: 'about', title: 'About Us' },
  { id: 'capabilities', title: 'Our AI Capabilities' },
  { id: 'work', title: 'Portfolio & Showcase' },
  { id: 'contact', title: 'Contact' },
];

export default function HorizontalScroller() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const totalPanels = panels.length;
  const x = useTransform(scrollYProgress, [0, 1], [0, -((totalPanels - 1) * 100)]);

  return (
    <section aria-label="Horizontal experience" className="relative" id="horizontal">
      <div ref={trackRef} className="relative h-[400vh]">
        <motion.div style={{ x: x.to(v => `${v}vw`) }} className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full w-[400vw]">
            <PanelAbout />
            <PanelCapabilities />
            <PanelShowcase />
            <PanelContact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionShell({ id, label, children, bg }) {
  return (
    <section id={id} className="relative w-screen h-full flex items-center justify-center">
      <div className={`absolute inset-0 ${bg || ''}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 pointer-events-none" />
      <div className="relative z-10 max-w-6xl w-full px-6">
        <div className="uppercase tracking-[0.35em] text-xs text-white/60 mb-6">{label}</div>
        {children}
      </div>
    </section>
  );
}

function MaskReveal({ children }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PanelAbout() {
  return (
    <SectionShell id="about" label="About" bg="bg-[radial-gradient(80%_60%_at_30%_40%,rgba(255,0,128,0.08),transparent)]">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <MaskReveal>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We build cinematic, interactive 3D websites powered by AI.
          </h2>
        </MaskReveal>
        <MaskReveal>
          <p className="text-white/80">
            Addis AI is a premium creative technology studio. We blend strategy, design, and engineering to deliver unforgettable digital experiences. Our work spans real-time 3D, generative content, and intelligent interfaces that convert and delight.
          </p>
        </MaskReveal>
        <div className="md:col-span-2">
          <MaskReveal>
            <div className="mt-4 flex gap-3 flex-wrap">
              <Badge>3D Web</Badge>
              <Badge>AI Agents</Badge>
              <Badge>GenAI Pipelines</Badge>
              <Badge>Realtime Graphics</Badge>
              <Badge>Advanced Animations</Badge>
            </div>
          </MaskReveal>
        </div>
      </div>
    </SectionShell>
  );
}

function PanelCapabilities() {
  return (
    <SectionShell id="capabilities" label="Capabilities" bg="bg-[radial-gradient(80%_60%_at_70%_30%,rgba(0,192,255,0.08),transparent)]">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'AI Strategy & Prototyping',
            desc: 'Rapid ideation, proofs-of-concept, and pilot builds to validate ROI with measurable outcomes.'
          },
          {
            title: 'Custom AI Agents',
            desc: 'Task-driven agents connected to your data and tools, from sales to creative automation.'
          },
          {
            title: '3D Web & Interactions',
            desc: 'Spline-powered hero scenes, smooth scroll choreography, and premium motion design.'
          },
          {
            title: 'Generative Media',
            desc: 'Image, video, and text generation pipelines integrated into editorial workflows.'
          },
          {
            title: 'Data & Retrieval',
            desc: 'RAG, vector search, and knowledge graphs that keep responses accurate and grounded.'
          },
          {
            title: 'Enterprise Integration',
            desc: 'Secure deployments, observability, and governance baked in from day one.'
          }
        ].map((item, i) => (
          <Card key={i} index={i} title={item.title} desc={item.desc} />
        ))}
      </div>
    </SectionShell>
  );
}

function Card({ title, desc, index }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, rotateX: -10 }}
      whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/20 transition-colors [transform-style:preserve-3d]"
    >
      <div className="text-lg font-semibold mb-2">{title}</div>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
      <div className="mt-6 inline-flex items-center gap-1 text-fuchsia-300/90 group-hover:text-fuchsia-300 transition-colors">
        <span className="text-xs">Explore</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </motion.div>
  );
}

function PanelShowcase() {
  return (
    <SectionShell id="work" label="Portfolio" bg="bg-[radial-gradient(80%_60%_at_50%_50%,rgba(128,0,255,0.08),transparent)]">
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
          >
            <div className="aspect-video bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-sky-500/30" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="rounded-lg bg-black/40 px-3 py-2 text-sm backdrop-blur">
                Case Study {i}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <a href="#contact" className="inline-flex rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">Start a Project</a>
      </div>
    </SectionShell>
  );
}

function PanelContact() {
  return (
    <SectionShell id="contact" label="Contact" bg="bg-[radial-gradient(80%_60%_at_50%_50%,rgba(255,255,255,0.04),transparent)]">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <MaskReveal>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Build with AI</h3>
          </MaskReveal>
          <MaskReveal>
            <p className="text-white/80 mb-6">Tell us about your challenge. We'll respond within 24 hours with next steps and a tailored approach.</p>
          </MaskReveal>
          <div className="space-y-2 text-white/70">
            <div>Brand: addisai.no</div>
            <div>Location: Global / Remote</div>
          </div>
        </div>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name">
              <input required className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-white/30" placeholder="Jane Doe" />
            </Field>
            <Field label="Email">
              <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-white/30" placeholder="jane@company.com" />
            </Field>
          </div>
          <Field label="Project Details" className="mt-4">
            <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-white/30" placeholder="What would you like to build?" />
          </Field>
          <div className="mt-5 flex items-center gap-3">
            <button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-medium hover:opacity-95 transition-opacity">Submit</button>
            <a href="mailto:hello@addisai.no" className="text-white/80 hover:text-white text-sm">hello@addisai.no</a>
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 text-xs px-3 py-1 border border-white/10">{children}</span>
  );
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <div className="text-xs uppercase tracking-wider text-white/60 mb-2">{label}</div>
      {children}
    </label>
  );
}
