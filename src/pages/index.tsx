import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

import { FaMapMarkedAlt, FaBusAlt, FaTrophy } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        <title>Wiesław Transport</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Usługi transportowe, przewóz osób autokarem, busem oraz samochodem osobowym. Wyjazdy krajowe i zagraniczne. Kontakt tel: 601 819 653. Adres email: wieslaw.trans@gmail.com, Matuszewski Wiesław."
        />
      </Helmet>

      <div id="navigation" className="px-12 py-8">
        <div className="flex flex-grow relative">
          <a href="/">
            <span className="font-display font-black border-b-4 border-gray-900">WiesławTrans</span>
          </a>

          <nav className="absolute flex w-full justify-center font-medium uppercase text-sm">
            <a className="px-5 opacity-60 hover:opacity-95" href="/">
              start
            </a>
            <a className="px-5 opacity-60 hover:opacity-95" href="/">
              o nas
            </a>
            <a className="px-5 opacity-60 hover:opacity-95" href="/">
              usługi
            </a>
            <a className="px-5 opacity-60 hover:opacity-95" href="/">
              kontakt
            </a>
          </nav>
        </div>
      </div>

      <main className="grid  gap-y-24 px-12 pb-12">
        <section id="hero-section" className="relative">
          <StaticImage src="../images/hero.png" alt="Autokar marki Mercedes na tle kościoła" />

          <div className="absolute top-12 left-12 text-center font-display font-bold text-white">
            <div className="text-6xl leading-snug">Wiesław Transport</div>
            <div className="text-2xl uppercase tracking-3.5 -mr-3.5">Usługi Transportowe</div>
          </div>
        </section>

        <section id="about-us-section">
          <div className="text-center font-display mb-8">
            <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">O nas</label>
            <h2 className="text-4xl">Kim jesteśmy</h2>
          </div>

          <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
            <div className="p-4">
              <FaMapMarkedAlt className="w-16 h-16 text-gray-900 mb-4" />
              <p className="text-justify">
                Jesteśmy na rynku przewozów autokarowych od 1993r. Specjalizujemy się w krajowym i międzynarodowym przewozie osób, posiadamy wszelkie niezbędne certyfikaty oraz
                licencje do przewozu osób w kraju i poza jego granicami.{' '}
              </p>
            </div>

            <div className="p-4">
              <FaBusAlt className="w-16 h-16 text-gray-900 mb-4" />
              <p className="text-justify">
                Posiadamy autokary najwyższej klasy i dbamy o to aby były one zawsze czyste i zadbane. Autokary posiadają wszelkie udogodnienia oraz wyposażone są nowoczesne
                akcesoria tj. klimatyzację, lodówkę, barek, DVD/TV, wygodne fotele z pasami bezpieczeństwa, itd.{' '}
              </p>
            </div>

            <div className="p-4">
              <FaTrophy className="w-16 h-16 text-gray-900 mb-4" />
              <p className="text-justify">
                Jesteśmy na rynku przewozów autokarowych od 1993r. Specjalizujemy się w krajowym i międzynarodowym przewozie osób, posiadamy wszelkie niezbędne certyfikaty oraz
                licencje do przewozu osób w kraju i poza jego granicami.{' '}
              </p>
            </div>
          </div>
        </section>

        <section id="inside-section">
          <StaticImage src="../images/inside.jpg" alt="Wnętrze autokaru marki Mercedes" />
        </section>
      </main>
    </div>
  );
}
