import * as React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services-section">
      <div className="max-w-screen-md mx-auto flex flex-col items-center">
        <div className="text-center font-display mb-12">
          <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">Usługi</label>
          <h2 className="text-4xl">Nasza oferta</h2>
        </div>

        <ul className="w-full grid gap-4 sm:grid-cols-2 mb-12">
          {items.map(text => (
            <li key={text} className="flex items-center">
              <FaRegCheckCircle className="w-6 h-6 text-green-500 mr-4" />
              <p>{text}</p>
            </li>
          ))}
        </ul>

        <p>
          Ceny wynajmu autokarów kalkulowane są w oparciu o czas wynajęcia autokaru, zaś w przypadku dłuższych tras, przeliczane są na podstawie ilości przejechanych kilometrów.
          Kalkulację na konkretną trasę przesyłamy zainteresowanym osobom na e-mail.
        </p>
      </div>
    </section>
  );
}

const items = [
  'Wyjazdy krajowe i zagraniczne',
  'Planowanie programu wycieczki',
  'Wiecieczki szkolne i pielgrzymki',
  'Transfer z/na lotnisko',
  'Transfer z/do hotelu',
  'Wieczory kawalerskie i panieńskie',
  'Przewóz gości weselnych',
  'Przewóz na konferencje i szkolenia',
  'Mikrobus/samochód osobowy z kierowcą',
  'Umowy okresowe',
];
