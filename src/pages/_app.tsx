import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import { withTRPC } from "@trpc/next";
import type { AppRouter } from "@/backend/router";

export default withTRPC<AppRouter>({
  config(config) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @see https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";
    return {
      url,
      /**
       * @see https://tanstack.com/query/v3/docs/react/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @see https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
