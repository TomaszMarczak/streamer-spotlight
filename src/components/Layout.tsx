import { StreamersProvider } from "@/context/streamers.context";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { TopBarWrapper } from "./TopBarWrapper";
import { ReactNode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { darkTheme, lightTheme } from "@/styles/theme";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [mode, setMode] = useLocalStorage("themeMode", "light");
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <StreamersProvider>
        <CssBaseline />
        <Container maxWidth="md">
          <TopBarWrapper mode={mode} setMode={setMode} />
          <ToastContainer />
          {children}
        </Container>
      </StreamersProvider>
    </ThemeProvider>
  );
};
