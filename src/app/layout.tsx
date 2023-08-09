import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./components/Providers";
import { authOptions } from "./lib/auth";
import { getServerSession } from "next-auth/next";
import { Image } from "next/dist/client/image-component";
import { Logout, NavLogin } from "./components/Buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facu Chat",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <nav className="flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white">
            <h1 className="text-black text-3xl font-bold">
              Facu<span className="text-indigo-600">Chat</span>
            </h1>

            {session ? (
              <div className="flex items-center">
                <Image
                  src={session.user?.image as string}
                  alt="user profile photo"
                  className="w-12 h-12 rounded-full mr-3"
                  width={50}
                  height={50}
                />
                <Logout />
              </div>
            ) : (
              <div>
                <NavLogin />
              </div>
            )}
          </nav>
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
