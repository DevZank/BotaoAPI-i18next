import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Importa o arquivo de configuração do i18n, que inicializa as funcionalidades de internacionalização
import "./i18n.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
