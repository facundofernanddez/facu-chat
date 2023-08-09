"use client";

import { signOut, signIn } from "next-auth/react";

export function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 texte-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
    >
      Logout
    </button>
  );
}

export function NavLogin() {
  return (
    <button
      onClick={() => signIn("github")}
      className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 texte-center text-sm font-semibold text-white ring-indigo-300 transition duration-100 hover:bg-indigo-700 md:text-base"
    >
      Login
    </button>
  );
}

export function MainLogin() {
  return (
    <button
      onClick={() => signIn("github")}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 texte-center text-sm font-semibold text-white ring-indigo-300 transition duration-100 hover:bg-indigo-700 md:text-base"
    >
      Login with GitHub
    </button>
  );
}
