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
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed lg:hidden p-5">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Bars3Icon className="w-10 h-10" />
        </button>
      </div>
      <div
        className={`fixed overflow-y-auto lg:p-5 inset-y-0 left-0 transform ${
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
        <Link href="/" className="m-1">
          Home
        </Link>
        {navItems.map((navGroup) => (
          <Disclosure
            key={navGroup.group}
            as="div"
            className="border-gray-200 pt-1 border-t"
            defaultOpen={true}
          >
            <DisclosureButton className="flex justify-between items-center bg-slate-300 px-2 py-1 w-full group">
              <span className="font-bold text-gray-900 text-lg">
                {navGroup.group}
              </span>
              <span className="flex items-center ml-6">
                <PlusIcon
                  aria-hidden="true"
                  className="group-data-[open]:hidden w-5 h-5"
                />
                <MinusIcon
                  aria-hidden="true"
                  className="[.group:not([data-open])_&]:hidden w-5 h-5"
                />
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <div className="space-y-2">
                {navGroup.items.map((navItem) => (
                  <Disclosure
                    key={navItem.title}
                    as="div"
                    className="border-gray-200 py-1 border-t"
                    defaultOpen={true}
                  >
                    <DisclosureButton className="flex justify-between items-center bg-white px-2 py-2 w-full group">
                      <span className="font-semibold text-gray-900">
                        {navItem.title}
                      </span>
                      <span className="flex items-center ml-6">
                        <PlusIcon
                          aria-hidden="true"
                          className="group-data-[open]:hidden w-5 h-5"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="[.group:not([data-open])_&]:hidden w-5 h-5"
                        />
                      </span>
                    </DisclosureButton>

                    <DisclosurePanel key={navItem.title}>
                      <div className="space-y-1">
                        {navItem.items.map((item) => (
                          <div className="items-center ml-5" key={item.name}>
                            <Link href={item.href}>{item.name}</Link>
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
