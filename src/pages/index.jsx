import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

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
    </div>
  );
}
