import { StreamersProvider } from "@/context/streamers.context";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import { TopBarWrapper } from "../TopNav/TopBarWrapper";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { theme } from "../../style/theme";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <StreamersProvider>
        <ThemeProvider theme={theme}>
          <motion.div
            layout
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <Container maxWidth="md">
              <TopBarWrapper />
              <ToastContainer autoClose={1000} hideProgressBar />
              {children}
            </Container>
          </motion.div>
        </ThemeProvider>
      </StreamersProvider>
    </>
  );
};
