import { StreamerProfile } from "@/components/StreamerProfile";
import { get } from "http";
import { GetServerSideProps } from "next";

export default function StreamerRecord(props: any) {
  return (
    <>
      <StreamerProfile streamer={props.streamer} />
    </>
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
