import Head from "next/head";
import "@mui/material/styles";
import StreamerSubmissionForm from "@/components/Streamers/StreamerSubmissionForm";
import StreamersList from "@/components/Streamers/StreamersList";
import { Layout } from "@/components/Layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Streamers spotlight application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StreamerSubmissionForm />
      <StreamersList />
    </Layout>
  );
}
