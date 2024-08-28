"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import NavItems from "@/app/constants/NavItems";

import {
  Bars3Icon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="p-5 fixed lg:hidden">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Bars3Icon className="w-10 h-10" />
        </button>
      </div>
      <div
        className={`fixed lg:static lg:p-5 inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 bg-white w-64 lg:w-auto`}
      >
        <div className="lg:hidden m-3" onClick={() => setIsOpen(false)}>
          <XMarkIcon className="w-10 h-10" />
        </div>
        <a href="/" className="m-1">
          Home
        </a>
        {NavItems.map((navItem) => (
          <Disclosure
            key={navItem.title}
            as="div"
            className="border-t border-gray-200 py-3"
            defaultOpen={true}
          >
            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{navItem.title}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon
                  aria-hidden="true"
                  className="h-5 w-5 group-data-[open]:hidden"
                />
                <MinusIcon
                  aria-hidden="true"
                  className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </DisclosureButton>

            <DisclosurePanel key={navItem.title}>
              <div className="space-y-2">
                {navItem.items.map((item) => (
                  <div className="items-center ml-5" key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </>
  );
}
