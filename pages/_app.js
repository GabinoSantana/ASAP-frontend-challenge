import "@/styles/globals.css";
import { lightTheme } from "@/themes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </SnackbarProvider>
  );
}
