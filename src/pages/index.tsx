import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

import Navbar from '../components/navbar';
import AboutUsSection from '../components/about-us';
import ServicesSection from '../components/services';
import ContactSection from '../components/contact';

export default function Home() {
  return (
    <div className="w-full">
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        <title>Wiesław Transport</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Usługi transportowe, przewóz osób autokarem, busem oraz samochodem osobowym. Wyjazdy krajowe i zagraniczne. Kontakt tel: 601 819 653. Adres email: wieslaw.trans@gmail.com, Matuszewski Wiesław."
        />
      </Helmet>

      <Navbar />

      <main
        id="start"
        className="grid gap-y-12 sm:gap-y-24 px-4 sm:px-8 mb-12 pt-16 md:pt-28"
      >
        <section className="relative hero-section">
          <StaticImage
            src="../images/hero.png"
            alt="Autokar marki Mercedes na tle kościoła"
          />

          <div className="hidden sm:block title-box absolute text-center font-display font-bold text-white">
            <div className="primary-text leading-snug">Wiesław Transport</div>
            <div className="secondary-text uppercase">Usługi Transportowe</div>
          </div>
        </section>

        <AboutUsSection />

        <section id="inside-photo-section">
          <StaticImage
            src="../images/inside.jpg"
            alt="Wnętrze autokaru marki Mercedes"
          />
        </section>

        <ServicesSection />

        <section id="distant-photo-section">
          <StaticImage
            src="../images/distance.jpg"
            alt="Autokar marki Mercedes na tle kościoła"
          />
        </section>

        <ContactSection />
      </main>

      <footer className="p-4 sm:p-8">
        <div className="text-center text-sm">
          <span>
            <span className="opacity-60">
              Wiesław Transport &copy; 2021 by{' '}
            </span>
            <a
              href="https://macieksitkowski.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="opacity-60 hover:opacity-95">
                macieksitkowski.com
              </span>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
