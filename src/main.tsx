import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style.css";
import global_eng from "./translations/eng/global.json";
import global_cz from "./translations/cz/global.json";
import { projectsData, projectsDataEn } from "./lib/data";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const lng: string | null = window.localStorage.getItem("language");

i18next.init({
  interpolation: { escapeValue: true },
  lng: lng || "",
  resources: {
    eng: {
      global: global_eng,
      project: projectsDataEn,
    },
    cz: {
      global: global_cz,
      project: projectsData,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
);
