import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Component from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/Talks";
import Invite from "./components/Invite";


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
      <GlobalStyle />
      <Header />
      <Component />
      <About />
      <Invite />
      <Footer />
  
      </>
     
    </ThemeProvider>
  )
}

