"use client";

import { motion } from "framer-motion";
import { Coffee, Wine, Utensils, MapPin, Instagram, ArrowRight, Star, Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-sapo-cream overflow-x-hidden font-sans">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-[100] flex justify-between items-center px-8 py-3 bg-white border-sapo rounded-full">
        <div className="text-3xl font-black tracking-tighter uppercase font-syne text-primary">Sapo.</div>
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-widest">
          <a href="#about" className="hover:text-sapo-terracotta transition-colors">La Cueva</a>
          <a href="#menu" className="hover:text-sapo-terracotta transition-colors">Caffeine</a>
          <a href="#cuisine" className="hover:text-sapo-terracotta transition-colors">Cuisine</a>
          <a href="#events" className="hover:text-sapo-terracotta transition-colors">Vino & Vibes</a>
        </div>
        <button className="bg-sapo-pink text-black px-6 py-2 rounded-full text-xs font-black uppercase border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-y-[2px] hover:shadow-none transition-all">
          Saltar
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden pt-32 lg:pt-20">
        {/* Background elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sapo-pink/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sapo-terracotta/20 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 z-10 h-full max-h-[800px]">
          
          {/* COLUMNA DE TEXTO: Ajustada para entrar en el viewport */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start z-20 justify-center"
          >
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: -2 }}
              className="inline-block bg-sapo-pink border-2 border-black px-4 py-1.5 mb-6 lg:mb-8 shadow-[4px_4px_0px_#000]"
            >
              <span className="font-marker text-lg md:text-2xl uppercase tracking-widest">Caffeine & Cuisine</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black font-syne leading-[0.85] tracking-tighter uppercase text-primary text-shadow-sapo mb-6">
              SALTÁ POR <br />
              EL CAFÉ.
            </h1>
            
            <div className="relative mb-8 lg:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-marker text-sapo-terracotta lg:-rotate-2 leading-tight">
                Specialty coffee <br className="lg:hidden" /> & morfi del bueno
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-white px-10 py-4 lg:py-5 rounded-2xl font-black uppercase flex items-center justify-center gap-4 border-2 border-black shadow-[6px_6px_0px_#D36B41] hover:translate-y-1 hover:shadow-none transition-all text-lg lg:text-xl active:scale-95">
                Ver el Menú <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* COLUMNA DEL SAPO: Tamaño optimizado para no empujar el contenido */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[35vh] lg:h-[75vh] w-full flex justify-center lg:justify-end items-center mt-4 lg:mt-0"
          >
            <div className="relative w-full h-full max-w-[700px] animate-float">
              <Image 
                src="/sapo-hero.png" 
                alt="Sapo Hero" 
                fill
                className="object-contain object-center lg:object-right-bottom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- EL SAPO SABE (STORYTELLING) --- */}
      <section id="about" className="py-32 bg-primary text-white px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="font-marker text-sapo-pink text-3xl mb-4">La Cueva del Sapo</div>
            <h2 className="text-5xl md:text-7xl font-bold font-syne uppercase leading-none mb-10">
              Menos pose, <br /> más <span className="text-sapo-terracotta italic">soul</span>.
            </h2>
            <div className="space-y-6 text-xl opacity-90 font-medium max-w-lg">
              <p>
                Sapo no es solo una cafetería. Es el personaje que vive en el ruido de la ciudad y elige el grano más noble para que vos puedas seguir saltando.
              </p>
              <p>
                Nuestra estética es ruda porque somos honestos. Nuestra comida es simple porque lo bueno no necesita adornos.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-white/10 p-4 border-sapo border-white/20 rounded-2xl flex items-center gap-3">
                <Heart size={24} className="text-sapo-pink fill-sapo-pink" />
                <span className="text-xs font-black uppercase tracking-tighter">Hecho con ganas</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sapo-terracotta border-sapo rounded-full z-10 flex items-center justify-center rotate-12">
               <span className="font-marker text-2xl text-white">Original</span>
            </div>
            <div className="relative aspect-square bg-zinc-800 rounded-[3rem] overflow-hidden border-sapo border-white/20 transform -rotate-2">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800')] bg-cover bg-center opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CAFFEINE & CUISINE (MENU) --- */}
      <section id="menu" className="py-32 px-6 bg-sapo-pink relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
            <div className="md:col-span-8">
              <h2 className="text-6xl md:text-[9rem] font-black font-syne uppercase leading-[0.8] tracking-tighter text-black">
                CAFFEINE <br />
                <span className="font-marker text-white text-shadow-sapo">& CUISINE</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="font-black uppercase text-sm leading-tight border-t-4 border-black pt-4">
                Curado por el Sapo <br />
                para paladares inquietos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Item 1 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white border-sapo p-6 rounded-[2rem]">
              <div className="h-64 bg-sapo-cream rounded-2xl mb-6 overflow-hidden border-2 border-black">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800')] bg-cover bg-center" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black font-syne uppercase">Filtrado Real</h3>
                <span className="bg-sapo-terracotta text-white px-2 py-1 text-[10px] font-black rounded uppercase">Top</span>
              </div>
              <p className="font-medium text-sm opacity-70">Granos de altura, tostado lento. Como un abrazo de cafeína.</p>
            </motion.div>

            {/* Item 2 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white border-sapo p-6 rounded-[2rem]">
              <div className="h-64 bg-sapo-cream rounded-2xl mb-6 overflow-hidden border-2 border-black">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800')] bg-cover bg-center" />
              </div>
              <h3 className="text-2xl font-black font-syne uppercase mb-2">The Toast</h3>
              <p className="font-medium text-sm opacity-70">Masa madre, palta cremosa y un toque que no te vamos a contar.</p>
            </motion.div>

            {/* Item 3 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white border-sapo p-6 rounded-[2rem]">
              <div className="h-64 bg-sapo-cream rounded-2xl mb-6 overflow-hidden border-2 border-black">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800')] bg-cover bg-center" />
              </div>
              <h3 className="text-2xl font-black font-syne uppercase mb-2">Bakery Picante</h3>
              <p className="font-medium text-sm opacity-70">Todo lo dulce que necesitás para justificar el segundo café.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VINO & VIBES (EVENTS) --- */}
      <section id="events" className="py-32 bg-sapo-terracotta text-white px-6 relative overflow-hidden">
        {/* Background Sapo */}
        <div className="absolute top-0 right-0 opacity-10 w-[500px] h-[500px] -mr-40 rotate-12 pointer-events-none">
          <Image 
            src="/sapo-hero.png" 
            alt="Sapo Background" 
            width={500} 
            height={500} 
            className="object-contain invert brightness-0"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-7xl md:text-9xl font-black font-syne uppercase leading-[0.85] mb-8">
                Sapo <br /> After <br /> Hours.
              </h2>
              <p className="text-2xl font-medium mb-10 max-w-md">
                Cuando el sol baja, el Sapo cambia el café por el vino. Catas, vinilos y gente con buena energía.
              </p>
              <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase text-lg border-2 border-white shadow-[6px_6px_0px_#E8A2C1] hover:scale-105 transition-all">
                Próxima Noche
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-white/10 aspect-[3/4] rounded-[2rem] p-6 border-2 border-white/20 flex flex-col justify-end">
                  <Wine size={40} className="mb-4" />
                  <h4 className="font-black uppercase text-xl">Vino Boutique</h4>
               </div>
               <div className="bg-sapo-pink aspect-[3/4] rounded-[2rem] p-6 border-2 border-black flex flex-col justify-end transform translate-y-12">
                  <Star size={40} className="mb-4 text-black" />
                  <h4 className="font-black uppercase text-xl text-black">Vinilos Live</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN --- */}
      <section id="visit" className="py-32 px-6 bg-sapo-cream text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 mb-10 border-sapo bg-white rotate-2">
            <h2 className="text-4xl md:text-6xl font-marker uppercase">¡Vení a saltar!</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 text-left mt-10">
            <div className="bg-white border-sapo p-8 rounded-[2rem]">
               <MapPin size={32} className="mb-4 text-sapo-terracotta" />
               <h4 className="font-black uppercase text-2xl mb-2">La Cueva</h4>
               <p className="font-medium opacity-70 italic text-lg">Rodríguez Peña 22, Martínez, BA</p>
            </div>
            <div className="bg-white border-sapo p-8 rounded-[2rem]">
               <Coffee size={32} className="mb-4 text-sapo-pink" />
               <h4 className="font-black uppercase text-2xl mb-2">El Reloj</h4>
               <p className="font-medium opacity-70 italic text-lg">8:30 a 19:30 | Mar-Dom</p>
            </div>
          </div>

          <div className="mt-20 flex justify-center gap-10">
            <a href="https://www.instagram.com/sapo.caffeine/?hl=es" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white border-sapo rounded-2xl flex items-center justify-center group-hover:bg-sapo-pink transition-all">
                <Instagram size={30} />
              </div>
              <span className="font-black uppercase text-[10px] tracking-widest">Follow the Frog</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-8 bg-primary text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-4xl font-black font-syne uppercase tracking-tighter">Sapo</div>
        <div className="font-marker text-sapo-pink text-xl">Caffeine & Cuisine</div>
        <div className="text-[10px] font-black uppercase opacity-40">
          © 2026 Sapo — Salta o morí en el intento.
        </div>
      </footer>
    </main>
  );
}
