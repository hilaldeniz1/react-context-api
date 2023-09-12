import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BasketProvider } from "./context/basketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*
     *provider = saglayıcı
     *bütün uygulamayı sarmalayacak sekilde konumlandırıyoruz
     * bu sayede uygulamanın ıcındekı butun bılesenler
     * saglayıcının value sunda tanımlanan degerlere erısebılıyor
     */}
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
