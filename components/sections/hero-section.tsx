"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-noise-grid p-10 shadow-glow md:p-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-[0.25em] text-white/65">
          Estúdio criativo premium
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Design autoral com direção de arte cinematográfica e precisão digital.
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          A JGVisuals transforma linguagem visual em presença de marca, através de estética sofisticada, interatividade e narrativa.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projetos" className="rounded-full bg-white px-6 py-3 text-black">Ver projetos</Link>
          <Link href="/contato" className="rounded-full border border-white/20 px-6 py-3">Iniciar contato</Link>
        </div>
      </div>
    </section>
  );
}
