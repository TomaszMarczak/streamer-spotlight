import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.min.css";
import { Layout } from "@/components/Layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function MyApp(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}
