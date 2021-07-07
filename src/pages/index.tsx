import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { FaMapMarkedAlt, FaBusAlt, FaTrophy, FaRegCheckCircle } from 'react-icons/fa';

import Navigation from '../components/navigation';

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

      <Navigation />

      <main id="start" className="grid gap-y-24 px-4 md:px-8 mb-12 pt-16 md:pt-28">
        <section className="relative">
          <StaticImage src="../images/hero.png" alt="Autokar marki Mercedes na tle kościoła" />

          <div className="absolute top-12 left-12 text-center font-display font-bold text-white">
            <div className="text-6xl leading-snug">Wiesław Transport</div>
            <div className="text-2xl uppercase tracking-3.5 -mr-3.5">Usługi Transportowe</div>
          </div>
        </section>

        <section id="about-us-section">
          <div className="text-center font-display mb-8">
            <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">O nas</label>
            <h2 className="text-4xl">Kim jesteśmy?</h2>
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

        <section id="inside-photo-section">
          <StaticImage src="../images/inside.jpg" alt="Wnętrze autokaru marki Mercedes" />
        </section>

        <section id="services-section">
          <div className="max-w-screen-md mx-auto flex flex-col items-center">
            <div className="text-center font-display mb-12">
              <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">Usługi</label>
              <h2 className="text-4xl">Nasza oferta</h2>
            </div>

            <div className="flex mb-12">
              <ul className="px-8">
                {col1.map(text => (
                  <li key={text} className="flex items-center mb-4">
                    <FaRegCheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
              <ul className="px-8">
                {col2.map(text => (
                  <li key={text} className="flex items-center mb-4">
                    <FaRegCheckCircle className="w-6 h-6 text-green-500 mr-4" />
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Ceny wynajmu autokarów kalkulowane są w oparciu o czas wynajęcia autokaru, zaś w przypadku dłuższych tras, przeliczane są na podstawie ilości przejechanych
              kilometrów. Kalkulację na konkretną trasę przesyłamy zainteresowanym osobom na e-mail.
            </p>
          </div>
        </section>

        <section id="distant-photo-section">
          <StaticImage src="../images/distance.jpg" alt="Autokar marki Mercedes na tle kościoła" />
        </section>

        <section id="contact-section" className="w-full max-w-screen-md px-6 py-4 mx-auto">
          <div className="text-center font-display mb-12">
            <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">Kontakt</label>
            <h2 className="text-4xl">Skontaktuj się z nami!</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>

              <span className="mt-2">Piaskowa 7, Pułtusk</span>
            </a>

            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <span className="mt-2">601 819 653</span>
            </a>

            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>

              <span className="mt-2">wieslaw.trans@gmail.com</span>
            </a>
          </div>
          <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Imię i nazwisko</label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="email"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Wiadomość</label>

              <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Wyślij wiadomość
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-12">
        <div className="flex items-center justify-between text-sm">
          <span className="opacity-60">Wiesław Transport &copy; 2021</span>

          <span>
            <span className="opacity-60">made by </span>
            <a href="https://macieksitkowski.com" target="_blank" rel="noopener noreferrer">
              <span className="opacity-60 hover:opacity-95">macieksitkowski.com</span>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

const col1 = ['Wyjazdy krajowe i zagraniczne', 'Planowanie programu wycieczki', 'Wiecieczki szkolne i pielgrzymki', 'Transfer z/na lotnisko', 'Transfer z/do hotelu'];
const col2 = ['Wieczory kawalerskie i panieńskie', 'Przewóz gości weselnych', 'Przewóz na konferencje i szkolenia', 'Mikrobus/samochód osobowy z kierowcą', 'Umowy okresowe'];
