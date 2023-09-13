import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export type TimeRangeSelectItemsType = {
  active: boolean;
  value: string;
  label: string;
}

export type TimeRangeSelectPropsType = {
  title: string;
  items: TimeRangeSelectItemsType[];
  iconStyle?: string;
};

export default function TimeRangeSelect(props:TimeRangeSelectPropsType) {
  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div className='w-full'>
        <Menu.Button className="inline-flex w-full text-sm justify-center gap-x-1.5 capitalize">
          {props.title}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.items && props.items.map((menuItem:TimeRangeSelectItemsType) => (
            <Menu.Item key={menuItem.label}>
              <a
                href={menuItem.value}
                className={classNames(
                  menuItem.active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm truncate'
                )}
              >
                {menuItem.label}
              </a>
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
