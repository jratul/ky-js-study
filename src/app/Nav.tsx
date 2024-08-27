import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import NavItems from "@/constants/NavItems";

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export default function Nav() {
  return (
    <div className="col-span-1">
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
  );
}
