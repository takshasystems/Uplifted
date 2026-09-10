import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Toaster } from "sonner";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
      <ScrollRestoration />
      <Toaster position="top-right" richColors closeButton />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
