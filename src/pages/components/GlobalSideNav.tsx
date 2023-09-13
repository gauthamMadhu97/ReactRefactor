import React, { Fragment, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  Square3Stack3DIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, UsersIcon, Squares2X2Icon, ArrowTrendingUpIcon, ClipboardDocumentCheckIcon, ChartBarIcon, MagnifyingGlassIcon, PlusCircleIcon, UserGroupIcon, PlusIcon, ClipboardDocumentListIcon, ChevronUpIcon, PlayIcon, UserIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { Button } from 'antd'
import { NavLink } from "react-router-dom";
import './global.css'

const userNavigation = [
  { name: 'Your profile', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const GlobalSideNav = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const router = { pathname: "churn/" };
  const navigation = [
    { name: 'Plays', href: '/plays', icon: ClipboardDocumentCheckIcon, current: router.pathname === "/plays" },
    { name: 'Customer', href: '/churn/customer', icon: UsersIcon, current: router.pathname === "/churn/customer" },
    { name: 'Deal Coach', href: '/sales/dealcoach', icon: ArrowTrendingUpIcon, current: router.pathname === "/sales/dealcoach" },
    { name: 'Feature', href: '/churn/feature', icon: ChartBarIcon, current: router.pathname === "/churn/feature" },
    { name: 'Integrations', href: '/integrations', icon: PlusCircleIcon, current: router.pathname === '/Integrations'}
  ];


  const popoverStyle = {
    paddingLeft: '-5px'
  }

  const Dashboardcontent = (
    <div className='h-screen'>
      <div className="text-xl mx-2 my-8 text-black font-bold text-start">
        Dashboard:
      </div>
      <NavLink
                  to="/churn/overview"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-black', 'flex flex-col items-center mx-2', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg font-medium self-start text-black group-hover:text-white">Overview</span>
                      </>
                    );
                  }}
                end
                />
      <NavLink
                  to="/churn/customer"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-black', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start font-medium text-black group-hover:text-white">Customers</span>
                      </>
                    );
                  }}
                end
                />
    </div>
  );

  const PlayContent = (
    <div className='h-screen'>
      <div className="text-xl mx-2 my-8 text-black font-bold text-start">
        Plays:
      </div>
      <NavLink
                  to="/plays"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-black', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">My Plays</span>
                      </>
                    );
                  }}
                end
                />
      <NavLink
                  to="/plays/config"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-black', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Create a Play</span>
                      </>
                    );
                  }}
                end
                />
    </div>
  );

  const CustomersContent = (
    <div className='h-screen'>
      <div className="text-xl mx-2 my-8 text-black font-bold text-start">
        Customers:
      </div>
      <NavLink
                  to="/sales/dealcoach"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-black', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Deal Coach</span>
                      </>
                    );
                  }}
                end
                />
      <NavLink
                  to="/customer-users"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-black', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Customer Users</span>
                      </>
                    );
                  }}
                end
                />
    </div>
  );

  const TeamsContent = (
    <div className='h-screen'>
      <div className="text-xl mx-2 my-8 text-black font-bold text-start">
        Teams:
      </div>
      <NavLink
                  to="/churn/overview"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-white', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">My Teams</span>
                      </>
                    );
                  }}
                end
                />
      <NavLink
                  to="/churn/overview"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-white', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Team Trends</span>
                      </>
                    );
                  }}
                end
                />
    </div>
  );

  const ProductsContent = (
    <div className='h-screen'>
      <div className="text-xl mx-2 my-8 text-black font-bold text-start">
        Products:
      </div>
      <NavLink
                  to="/churn/feature"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-white', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Feature Usage</span>
                      </>
                    );
                  }}
                end
                />
      <NavLink
                  to="/churn/overview"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-white', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', '', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Support Tickets</span>
                      </>
                    );
                  }}
                end
                />
    </div>
  );

  const SettingsContent = (
    <div className='h-screen'>
      <div className="text-xl mx-2 my-8 text-black font-bold text-start">
        Settings:
      </div>
      <NavLink
                  to="/Users/00001"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-white', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Users</span>
                      </>
                    );
                  }}
                end
                />
      <NavLink
                  to="/OrganizationSettings"
                  className={({ isActive }: any) => (
                    classNames(isActive ? 'bg-white text-blue-950 flex flex-col items-center' : 'text-white', 'flex flex-col items-center', 'rounded-md', 'p-3', 'my-5', 'mx-2', 'text-sm', 'font-semibold', 'flex', 'gap-x-3', 'items-center', 'hover:bg-slate-400', 'group')
                  )}
                  children={({ isActive }: any) => {
                    return (
                      <>
                        <span className="text-lg self-start text-black group-hover:text-white">Organization Settings</span>
                      </>
                    );
                  }}
                end
                />
    </div>
  );

  return (
    <>
      <div className="h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setSidebarOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-950 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="/logo1cropped.png"
                        alt="Clinchit Logo"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>Dashboard</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-1 pt-1 text-sm text-white">
                        <ul className="flex flex-col items-center justify-between">
                          <a href="/churn/overview" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>Overview</a>
                          <a href="/churn/customer" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 mt-2'>Customers</a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>Plays</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-1 pt-1 text-sm text-white">
                        <ul className="flex flex-col items-center justify-between">
                          <a href="/plays" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>My Plays</a>
                          <a href="#" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 mt-2'>Create a Play</a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>Customers</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-1 pt-1 text-sm text-white">
                        <ul className="flex flex-col items-center justify-between">
                          <a href="/sales/dealcoach" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>Deal Coach</a>
                          <a href="#" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 mt-2'>Customer Users</a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>Teams</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-1 pt-1 text-sm text-white">
                        <ul className="flex flex-col items-center justify-between">
                          <a href="#" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>My Teams</a>
                          <a href="#" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 mt-2'>Team Trends</a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>Products</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-1 pt-1 text-sm text-white">
                        <ul className="flex flex-col items-center justify-between">
                          <a href="/churn/feature" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'>Feature Usage</a>
                          <a href="/#" className='flex w-full justify-between rounded-lg bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-950 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 mt-2'>Support Tickets</a>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                          >
                            <PlusCircleIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Integrations
                          </a>
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-24 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col justify-center items-center gap-y-5 overflow-y-auto bg-blue-950 px-2 pb-4 bg-d overflow-hidden">
            <a href="/">
              <img
                className="h-12 w-auto mt-4"
                src="/logo1cropped.png"
                alt="ClinchIt Logo"
              />
            </a>
            <div className="h-full flex flex-col items-center overflow-hidden">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none focus-visible:none focus-visible:none focus-visible:none">
                      <span><div
                        className="group -mx-2 flex mt-6 gap-x-3 w-screen rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center"
                      >
                        <Squares2X2Icon
                          className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        <div className="text-white text-xs">Dashboard</div>
                      </div></span>
                      <div
                        className={`${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          } absolute -right-2 transform origin-center transition-all ease-in-out duration-150`}
                        style={{
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '8px solid white',
                        }}
                      ></div>
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        className="bg-gray-100 absolute top-0 left-full w-24 max-w-sm transform"
                        style={{ minWidth: '200px' }}
                      >
                        {Dashboardcontent}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none focus-visible:none focus-visible:none focus-visible:none">
                      <span><div
                        className="group -mx-2 flex mt-6 gap-x-3 w-screen rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center"
                      >
                        <ClipboardDocumentCheckIcon
                          className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        <div className="text-white text-xs">Plays</div>
                      </div></span>
                      <div
                        className={`${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          } absolute -right-2 transform origin-center transition-all ease-in-out duration-150`}
                        style={{
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '8px solid white',
                        }}
                      ></div>
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        className="bg-gray-100 absolute top-0 left-full w-24 max-w-sm transform"
                        style={{ minWidth: '200px' }}
                      >
                        {PlayContent}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none focus-visible:none focus-visible:none focus-visible:none">
                      <span><div
                        className="group -mx-2 flex mt-6 gap-x-3 w-screen rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center"
                      >
                        <UsersIcon
                          className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        <div className="text-white text-xs">Customers</div>
                      </div></span>
                      <div
                        className={`${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          } absolute -right-2 transform origin-center transition-all ease-in-out duration-150`}
                        style={{
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '8px solid white',
                        }}
                      ></div>
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        className="bg-gray-100 absolute top-0 left-full w-24 max-w-sm transform"
                        style={{ minWidth: '200px' }}
                      >
                        {CustomersContent}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none focus-visible:none focus-visible:none focus-visible:none">
                      <span><div
                        className="group -mx-2 flex mt-6 gap-x-3 w-screen rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center"
                      >
                        <UserGroupIcon
                          className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        <div className="text-white text-xs">Teams</div>
                      </div></span>
                      <div
                        className={`${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          } absolute -right-2 transform origin-center transition-all ease-in-out duration-150`}
                        style={{
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '8px solid white',
                        }}
                      ></div>
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        className="bg-gray-100 absolute top-0 left-full w-24 max-w-sm transform"
                        style={{ minWidth: '200px' }}
                      >
                        {TeamsContent}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none focus-visible:none focus-visible:none focus-visible:none group -mx-2 flex mt-6 gap-x-3 w-screen rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center">
                      <ClipboardDocumentListIcon
                        className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                        aria-hidden="true"
                      />
                      <div className="text-white text-xs">Products</div>
                      <div
                        className={`${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          } absolute -right-2 transform origin-center transition-all ease-in-out duration-150`}
                        style={{
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '8px solid white',
                        }}
                      ></div>
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        className="bg-gray-100 absolute top-0 left-full w-24 max-w-sm transform"
                        style={{ minWidth: '200px' }}
                      >
                        {ProductsContent}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
                <NavLink to='/integrations' 
                            className="cursor-pointer mt-6 group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center"
                          >
                            <PlusCircleIcon
                              className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            <div className="text-white text-xs">Integrations</div>
                          </NavLink>    
                          <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="focus:outline-none focus-visible:none focus-visible:none focus-visible:none group -mx-2 flex mt-6 gap-x-3 w-screen rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white flex flex-col justify-center items-center">
                      <Cog6ToothIcon
                        className="h-6 w-6 text-white shrink-0 text-indigo-200 group-hover:text-white"
                        aria-hidden="true"
                      />
                      <div className="text-white text-xs">Settings</div>
                      <div
                        className={`${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          } absolute -right-2 transform origin-center transition-all ease-in-out duration-150`}
                        style={{
                          top: '100%',
                          width: '0',
                          height: '0',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '8px solid white',
                        }}
                      ></div>
                    </Popover.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        className="bg-gray-100 absolute top-0 left-full w-24 max-w-sm transform"
                        style={{ minWidth: '200px' }}
                      >
                        {SettingsContent}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>       
              {/* <a
                href="#"
                className="group -mx-2 flex gap-x-3 flex-col justify-center items-center rounded-md p-2 text-sm font-semibold mt-8 leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 text-indigo-200 text-xs group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </a> */}
            </div>
          </div>
        </div>

        <div className="lg:pl-24 h-full">
          <div className="top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-48 border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

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
                        <form action="/logout" method="post">
                          <button
                            type="submit"
                            className="block px-3 py-1 text-sm leading-6 text-gray-900 w-full text-left"
                          >
                            Logout
                          </button>
                        </form>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-2 h-full max-h-full bg-white">
            <div className="px-4 sm:px-6 lg:px-8 h-min pt-4 pb-4">
                {props.children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
};

export default GlobalSideNav;
