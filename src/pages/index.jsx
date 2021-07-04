import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

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

      <section className="relative mx-8">
        <StaticImage src="../images/hero.png" alt="Autokar marki Mercedes na tle kościoła" />

        <div className="absolute top-12 left-12 text-center font-display font-bold text-white">
          <div className="text-6xl leading-snug">Wiesław Transport</div>
          <div className="text-2xl uppercase tracking-3.5 -mr-3.5">Usługi Transportowe</div>
        </div>
      </section>
    </div>
  );
}
