import Head from "next/head";
import { Inter } from "next/font/google";
import StreamerSubmissionForm from "@/components/StreamerSubmissionForm";
import StreamersList from "@/components/StreamersList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Streamers spotlight application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StreamerSubmissionForm />
      <StreamersList />
    </>
  );
}
