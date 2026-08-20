"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { playUiSound, type SoundKey } from "@/lib/sounds";

type SoundLinkProps = ComponentProps<typeof Link> & {
  sound?: SoundKey;
};

export default function SoundLink({
  sound = "button",
  onClick,
  children,
  ...props
}: SoundLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    playUiSound(sound);
    onClick?.(event);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}