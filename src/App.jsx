import "./App.css";

// Importa o componente Button de mudança das Linguagens
import Button from "./components/Button";

// Importa o hook useTranslation da biblioteca react-i18next para utilizar traduções
import { useTranslation } from "react-i18next";

function App() {
  // Utiliza o hook useTranslation para acessar a função de tradução 't'
  const { t } = useTranslation();

  return (
    <>
      {/* Renderiza o componente Button */}
      <Button />

      {/* Renderiza um título h1, com o texto traduzido da chave 'OlaMundo' */}
      <h1>{t("OlaMundo")}</h1>

      {/* Renderiza um subtítulo h2, com o texto traduzido da chave 'Texto' */}
      <h2>{t("Texto")}</h2>
    </>
  );
}

export default App;
