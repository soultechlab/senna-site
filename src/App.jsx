import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Condominio from "./pages/Condominio";
import Locacao from "./pages/Locacao";
import Venda from "./pages/Venda";
import ImovelDetalhes from "./pages/ImovelDetalhes";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/condominio" element={<Condominio />} />
          <Route path="/locacao" element={<Locacao />} />
          <Route path="/venda" element={<Venda />} />
          <Route path="/venda/:id" element={<ImovelDetalhes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
