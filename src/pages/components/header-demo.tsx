import { Dialog, Popover, Menu, Transition } from '@headlessui/react'
import { Form } from "antd";
import { useLocation } from 'react-router-dom';
import {
  Bars3Icon, XMarkIcon,

  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  Square3Stack3DIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,

} from '@heroicons/react/24/outline'

import { Fragment, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, UsersIcon, Squares2X2Icon, ArrowTrendingUpIcon, ClipboardDocumentCheckIcon, ChartBarIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'


const userNavigation = [
  { name: 'Your profile', href: '#' },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Customers', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Pricing', href: '#' }
]

export default function HeaderDemo(props: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPoper, setPoperShow] = useState(false);
  const user = undefined;

  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
      icon: IconOne,
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
      icon: IconTwo,
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
      icon: IconThree,
    },
  ]

  function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }

  const searchParams = useLocation();

  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function IconThree() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
    )
  }

  const [classname, setClassname] = useState<string>("text-white");
  const [offcanvasShow, setoffcanvasShow] = useState<boolean>(false);

  const handleHoverIn = (name: string) => {
    setClassname("text-black bg-white")
    setoffcanvasShow(true);
  }

  const divRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setClassname("text-white bg-blue-950");
        setoffcanvasShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 headerNav">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6 ">
          {/* <div className="hidden md:flex"></div> xl:grid-cols-8*/}
          <div className="flex flex-row items-center col-span-6 justify-between gap-2 ml-6 mr-6 my-5">
            <div className="flex">
              <a href="https://clinchit.io/" className="-m-1.5 p-1.5">
                <span className={"sr-only"}>ClinchIt</span>
                <img
                  className="h-8 w-auto"
                  src="/clinchitLogo.svg"
                  alt="clinchit logo"
                />
              </a>
            </div>
            {/* <nav className={""} aria-label="Global">
              <div className="hidden xl:flex lg:gap-x-2">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} style={{fontSize: "18px" }} className="group inline-flex items-center rounded-md px-3 py-2 text-xl font-medium text-teal-600 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav> */}
            <div className="hidden xl:flex flex flex-row col-span-1 items-center justify-end gap-2">
              {user != undefined ? (<>

                <div className="hidden xl:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        <Form action="/logout" method="post">
                          <button
                            type="submit"
                            className="block px-3 py-1 text-sm leading-6 text-gray-900 w-full text-left"
                          >
                            Logout
                          </button>
                        </Form>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {searchParams.pathname !== '/request-demo' && <a href='/request-demo' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">BOOK A DEMO</a>}

                {/* <Form action="/logout" method="post">
                          <button
                            type="submit"
                            className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Logout
                          </button>
                        </Form> */}
              </>) : (<>
                <div style={{ borderRadius:"5px"}}className='flex flex-row justify-end items-center'>
                  {/*<svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#05766F" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg> &nbsp; &nbsp; */}

                   {/* <a
                    style={{fontWeight:700  }}
                    href="/login"
                    className="text-teal-600  text-md font-semibold text-teal-600"
                  >
                    Log-In
                  </a> */}
                  &nbsp; &nbsp;
                  {
                    searchParams.pathname !== '/request-demo' &&
                    <a href='/request-demo' className="CustomSubmit-btn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">BOOK A DEMO</a>}
                </div> 
                {/* <div>
                  <a
                    href="/login"
                    className="CustomSubmit-btn text-teal-600 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </a>
                </div> */}

              </>)}

            </div>
            {/* <div className="flex justify-end xl:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 mx-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div> */}
          </div>
          {/* <div className="hidden lg:flex flex flex-col col-span-1 items-start justify-start gap-2 "></div> */}


        </div>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          {/* <div className="fixed inset-0 z-50" /> */}
          <Dialog.Panel className=" bgLightGreen fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/clinchitLogo.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                {/* <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      // href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}
                <div className="py-6 mt-4">
                  <a
                    href="/login"
                    style={{ fontSize: "20px",display: "flex",
                    padding: "12px 24px",
                    alignItems: "center",
                    justifyContent: "center"}}
                    className="CustomSubmit-btn text-teal-600 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign In
                  </a>
                  {/* <a
                    href="/request-demo"
                    style={{ fontFamily: "Segoe UI", fontSize: "20px" }}
                    className="ml-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Request demo
                  </a> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {offcanvasShow &&
        <div className="absolute inset-x-0 top-24 z-50 bg-white shadow" style={{ height: "45vh" }} ref={divRef}>
          {/* Drawer content */}
          <div className="p-4">
            <p>Drawer Content</p>
          </div>
          {/* Close button */}
        </div>
      }
    </div>
  )
}
