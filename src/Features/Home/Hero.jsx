import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaBars, FaX } from 'react-icons/fa6';
import LoginPopup from '../authentication/LoginPopup';
import { scrollToSection } from '@/Hooks/ScrollToSection';

const navigation = [
  { name: 'Personal', scroll: 'innovate' },
  { name: 'Contact', scroll: 'contact' },
  { name: 'Testimonies', scroll: 'testimonies' },
  { name: 'Lending', scroll: 'lend' },
  { name: 'About Us', scroll: 'about' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-bg bg-center bg-cover min-min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className=" font-bold text-xl text-blue-700">Futon MFB</div>
            </div>
          </div>
          <div className="flex lg:hidden gap-3">
            <LoginPopup />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} onClick={() => scrollToSection(item.scroll)} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LoginPopup />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FaX className="h-6 w-6 p-1 rounded-full bg-white text-blue-700" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToSection(item.scroll);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-blue-400"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>


      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className=" mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Online banking with zero limitations.{' '}

            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              When Businesses Borrow. <br />
              They Borrow from Us.
            </h1>
            <p className="mt-6 font-semibold bg-blue-300/30 rounded-lg p-4 text-lg leading-8 text-blue-900">
              Experience banking reinvented: where convenience meets security. Manage your finances effortlessly with our innovative platform. Personalized service, tailored to you. Join the digital banking revolution today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
