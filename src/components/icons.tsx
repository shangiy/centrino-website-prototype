import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import Image from 'next/image';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <Image src="/centrino logo.png" alt="Centrino Logo" width={140} height={40} />
  );
}

export function SmsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.8 3h14.4c1.32 0 2.4 1.08 2.4 2.4v10.8c0 1.32-1.08 2.4-2.4 2.4H7.2l-4.8 4.8V5.4C2.4 4.08 3.48 3 4.8 3Zm3.6 7.2c.495 0 .945-.195 1.275-.525s.525-.78.525-1.275s-.195-.945-.525-1.275S9.295 6.6 8.8 6.6H7.2v4.8h1.2v-1.2Zm5.4-1.2c.495 0 .945-.195 1.275-.525s.525-.78.525-1.275s-.195-.945-.525-1.275s-.78-.525-1.275-.525h-2.4v4.8h1.2v-1.2h1.2Zm-1.2-1.2h-1.2V7.8h1.2c.24 0 .45.09.6.24c.15.15.24.36.24.6s-.09.45-.24.6c-.15.15-.36.24-.6.24Zm3 .6c.495 0 .945-.195 1.275-.525s.525-.78.525-1.275s-.195-.945-.525-1.275s-.78-.525-1.275-.525h-2.4v4.8h1.2v-1.2h1.2Zm-.6-2.4c.24 0 .45.09.6.24c.15.15.24.36.24.6s-.09.45-.24.6c-.15.15-.36.24-.6.24h-1.2V7.8h1.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
