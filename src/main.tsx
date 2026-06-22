  import "./i18n/config";
  import { ThemeProvider } from "next-themes"
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./i18n/config";

  createRoot(document.getElementById("root")!).render( 
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <App />
  </ThemeProvider>);
  