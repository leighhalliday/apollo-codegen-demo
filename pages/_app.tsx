import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
