import { Layout } from "@/components/Layouts/Layout";
import { StreamerProfile } from "@/components/Streamers/StreamerProfile";
import { Streamer } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface StreamerRecordProps {
  streamer: Streamer;
}

export default function StreamerRecord(props: StreamerRecordProps) {
  return (
    <Layout>
      <Head>
        <title>{props.streamer.name}</title>
      </Head>
      <StreamerProfile streamer={props.streamer} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { streamerId } = context.query;
  const res = await fetch(
    `http://localhost:3000/api/streamer/${streamerId}`
  ).then((res) => res.json());

  if (!res || res.result === "error") {
    return {
      notFound: true,
    };
  }
  const streamer = res.data;

  return {
    props: {
      streamer: streamer,
    },
  };
};
