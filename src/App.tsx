import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Solucoes } from "./pages/soluções";
import { Layout } from "./components/layout";
import { ScrollProvider } from "./hooks/useRef";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/style/themes";
import { GlobalStyle } from "./assets/style/globalStyle";
import { Sobre } from "./pages/sobre";


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