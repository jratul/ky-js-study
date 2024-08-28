"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import navItems from "@/app/constants/NavItems";

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
        className={`fixed lg:p-5 inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 bg-white w-64 lg:w-1/6`}
      >
        <button
          className="lg:hidden m-3"
          onClick={(isOpen) => setIsOpen(!isOpen)}
        >
          <XMarkIcon className="w-10 h-10" />
        </button>
        <br />
        <a href="/" className="m-1">
          Home
        </a>
        {navItems.map((navGroup) => (
          <Disclosure
            key={navGroup.group}
            as="div"
            className="border-t border-gray-200 pt-1"
            defaultOpen={true}
          >
            <DisclosureButton className="group flex w-full items-center justify-between bg-slate-300 px-2 py-1">
              <span className="text-lg font-bold text-gray-900">
                {navGroup.group}
              </span>
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
            <DisclosurePanel>
              <div className="space-y-2">
                {navGroup.items.map((navItem) => (
                  <Disclosure
                    key={navItem.title}
                    as="div"
                    className="border-t border-gray-200 py-1"
                    defaultOpen={true}
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-2">
                      <span className="font-semibold text-gray-900">
                        {navItem.title}
                      </span>
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
                      <div className="space-y-1">
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
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </>
  );
}
