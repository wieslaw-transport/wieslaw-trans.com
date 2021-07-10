import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { clsx } from '../utils/strings';

export default function Navbar() {
  const [isScrolledDown, setIsScrolledDown] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <Popover
      className={clsx(
        'z-50 fixed w-inherit bg-white',
        isScrolledDown && 'shadow-md',
      )}
    >
      {({ open }) => (
        <>
          <div
            className={clsx(
              'px-4 py-4 sm:px-8 flex justify-between items-center transition-all',
              isScrolledDown ? 'md:py-4' : 'md:py-8',
            )}
          >
            <div className="h-8 md:h-12 flex justify-center items-center">
              <Logo />
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              {open ? (
                <IconButton srLabel="Close menu" Icon={FaTimes} />
              ) : (
                <IconButton srLabel="Open menu" Icon={FaBars} />
              )}
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <NavLink to="#start">start</NavLink>
              <NavLink to="#o-nas">o nas</NavLink>
              <NavLink to="#uslugi">usługi</NavLink>
            </Popover.Group>

            <div className="hidden md:flex items-center justify-end">
              <FilledNavLink to="#kontakt">kontakt</FilledNavLink>
            </div>
          </div>

          <Transition
            show={open}
            as={React.Fragment}
            enter="duration-100 ease-out"
            enterFrom="opacity-0 scale-85"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-85"
          >
            <Popover.Panel
              focus
              static
              className="transition transform origin-top md:hidden"
            >
              <div className="p-4 shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <nav className="grid gap-y-4 text-center">
                  <NavLink to="#start">start</NavLink>
                  <NavLink to="#o-nas">o nas</NavLink>
                  <NavLink to="#uslugi">usługi</NavLink>
                  <FilledNavLink to="#kontakt">kontakt</FilledNavLink>
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

const Logo = () => (
  <a href="/">
    <span className="font-display font-black border-b-4 border-gray-900">
      WiesławTrans
    </span>
  </a>
);

const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const NavLink = props => (
  <Link
    className="uppercase font-medium text-sm opacity-60 hover:opacity-95"
    {...props}
  />
);

const FilledNavLink = props => (
  <Link
    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-center text-base capitalize font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    {...props}
  />
);

const IconButton = ({ srLabel, Icon, ...props }) => (
  <Popover.Button
    className="bg-white rounded-md px-2 py-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    {...props}
  >
    <span className="sr-only">{srLabel}</span>
    <Icon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
);
