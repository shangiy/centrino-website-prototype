import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import Image from 'next/image';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <Image src="/centrino logo.png" alt="Centrino Logo" width={140} height={40} />
  );
}
