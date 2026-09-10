import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Curriculum } from "./pages/Curriculum";
import { HowItWorks } from "./pages/HowItWorks";
import { Journey } from "./pages/Journey";
import { GetInvolved } from "./pages/GetInvolved";
import { Impact } from "./pages/Impact";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "curriculum", Component: Curriculum },
      { path: "how-it-works", Component: HowItWorks },
      { path: "journey", Component: Journey },
      { path: "get-involved", Component: GetInvolved },
      { path: "impact", Component: Impact },
      { path: "contact", Component: Contact },
      { path: "donate", Component: Donate },
    ],
  },
]);
