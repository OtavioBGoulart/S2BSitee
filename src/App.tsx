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
import { Compras } from "./pages/neoagro/buy";
import { Distribution } from "./pages/neoagro/Distribution";
import { Invoicing } from "./pages/neoagro/invoicing";
import { Marketing } from "./pages/neoagro/marketing";
import { Lab } from "./pages/neoagro/lab";
import { Production } from "./pages/neoagro/production";
import { SalesManagement } from "./pages/neoagro/salesManagement";


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