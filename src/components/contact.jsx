import * as React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import theme from '../config/theme';
import './contact.scss';

const items = [
  {
    id: 1,
    Icon: FaMapMarkerAlt,
    text: 'Piaskowa 7, Pułtusk',
  },
  {
    id: 2,
    Icon: FaPhoneAlt,
    text: '601 819 653',
  },
  {
    id: 3,
    Icon: FaEnvelopeOpenText,
    text: 'wieslaw.trans@gmail.com',
  },
];

export default function Contact() {
  return (
    <section
      id="contact-section"
      className="contact-section w-full max-w-screen-md mx-auto"
    >
      <div className="text-center font-display mb-12">
        <label className="text-xs font-medium uppercase opacity-60 tracking-widest mb-2.5">
          Kontakt
        </label>
        <h2 className="text-4xl">Skontaktuj się z nami!</h2>
      </div>

      <div className="contact-details-grid mb-12">
        {items.map(({ id, Icon, text }) => (
          <a
            key={id}
            href="#"
            className="grid-item text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <Icon className="w-5 h-5" />
            <span className="">{text}</span>
          </a>
        ))}
      </div>

      <div>
        <div className="items-center grid gap-4 md:gap-8 md:grid-flow-col">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Imię i nazwisko
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              E-mail
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Wiadomość
          </label>

          <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className={`btn-filled bg-${theme.primary}-600 hover:bg-${theme.primary}-700`}
          >
            Wyślij wiadomość
          </button>
        </div>
      </div>
    </section>
  );
}
