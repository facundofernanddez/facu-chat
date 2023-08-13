"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import { Session } from "next-auth";

export const NextAuthProvider = (
  { children }: { children: ReactNode },
  session: Session
) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
