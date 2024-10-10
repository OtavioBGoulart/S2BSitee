import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Solucoes } from "./pages/soluções";
import { Layout } from "./components/layout";
import { ScrollProvider } from "./hooks/useRef";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/style/themes";
import { GlobalStyle } from "./assets/style/globalStyle";
import { Sobre } from "./pages/sobre";
import { Neoagro } from "./pages/neoagro";
import { Form } from "./components/form";
import { Compras } from "./pages/neoagro/modules/buy";
import { Distribution } from "./pages/neoagro/modules/distribution";
import { Invoicing } from "./pages/neoagro/modules/invoicing";
import { Marketing } from "./pages/neoagro/modules/marketing";
import { Lab } from "./pages/neoagro/modules/lab";
import { Production } from "./pages/neoagro/modules/production";
import { SalesManagement } from "./pages/neoagro/modules/salesManagement";
import { Accounting } from "./pages/neoagro/subModules/accounting";
import { Credit } from "./pages/neoagro/subModules/Credit";
import { Costing } from "./pages/neoagro/subModules/costing";
import { FinDep } from "./pages/neoagro/subModules/finance-dep";
import { TaxDep } from "./pages/neoagro/subModules/tax-dep";
import { Budget } from "./pages/neoagro/subModules/budget";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/solucoes",
        element: <Solucoes />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/neoagro",
        element: <Neoagro />,
      },
      {
        path: "/neoagro/compras",
        element: <Compras />
      },
      {
        path: "/neoagro/controladoria/contabilidade",
        element: <Accounting />
      },
      {
        path: "/neoagro/controladoria/credito-e-cobranca",
        element: <Credit />
      },
      {
        path: "/neoagro/controladoria/custeio",
        element: <Costing />
      },
      {
        path: "/neoagro/controladoria/departamento-financeiro",
        element: <FinDep />
      },
      {
        path: "/neoagro/controladoria/departamento-fiscal",
        element: <TaxDep />
      },
      {
        path: "/neoagro/controladoria/orcamento",
        element: <Budget />
      },
      {
        path: "/neoagro/gerenciamento-de-vendas",
        element: <SalesManagement />
      },
      {
        path: "/neoagro/distribuicao",
        element: <Distribution />
      },
      {
        path: "/neoagro/faturamento",
        element: <Invoicing />
      },
      {
        path: "/neoagro/marketing",
        element: <Marketing />
      },
      {
        path: "/neoagro/producao",
        element: <Production />
      },
      {
        path: "/neoagro/laboratorio",
        element: <Lab />
      },
      {
        path: "/contatos",
        element: <Form />
      }
    ]
  }
]);

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
    </ThemeProvider>

  )
}