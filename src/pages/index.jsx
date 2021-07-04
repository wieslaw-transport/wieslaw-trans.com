import React from 'react';
import { Helmet } from 'react-helmet';

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

          <nav className="absolute flex w-full justify-center">
            <a className="font-medium uppercase text-sm px-5 opacity-60 hover:opacity-95" href="/">
              start
            </a>
            <a className="font-medium uppercase text-sm px-5 opacity-60 hover:opacity-95" href="/">
              o nas
            </a>
            <a className="font-medium uppercase text-sm px-5 opacity-60 hover:opacity-95" href="/">
              usługi
            </a>
            <a className="font-medium uppercase text-sm px-5 opacity-60 hover:opacity-95" href="/">
              kontakt
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
