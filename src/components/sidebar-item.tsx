"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "~/components/ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = (props: Props) => {
  const pathname = usePathname();
  const active = pathname === props.href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
      asChild
    >
      <Link href={props.href}>
        <Image
          src={props.iconSrc}
          alt={props.label}
          className="mr-5"
          height={32}
          width={32}
        />
        {props.label}
      </Link>
    </Button>
  );
};
