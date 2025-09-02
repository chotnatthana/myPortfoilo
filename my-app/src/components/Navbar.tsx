"use client";

import Link from "next/link";
import { FaGithub, FaMoon } from "react-icons/fa";
import TrueFocus from "@/components/animations/true-fouse";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50">
      <div className="text-2xl font-bold">
        <Link href="#Home">
          chotnatthana <span className="text-[#F7A408]">.dev</span>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#Resume">Resume</Link>
        <Link href="#Contact">Contact</Link>
        <FaGithub className="cursor-pointer" />
      </div>
    </nav>
  );
}
