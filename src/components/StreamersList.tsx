import { Section } from "./Section";
import { SectionTitle } from "./Section";
import { useStreamers } from "../context/streamers.context";
import { StreamerCard } from "./StreamerCard";
import { SkeletonStreamerCard } from "./Skeletons/SkeletonStreamerCard";
import { useMemo } from "react";

export default function StreamersList() {
  const { streamers, fetching } = useStreamers();
  useMemo(
    () =>
      streamers.sort(
        (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
      ),
    [streamers]
  );

  if (fetching)
    return (
      <Section>
        <SectionTitle>Streamers list</SectionTitle>
        <SkeletonStreamerCard />
        <SkeletonStreamerCard />
        <SkeletonStreamerCard />
        <SkeletonStreamerCard />
      </Section>
    );

  return (
    <Section>
      <SectionTitle>Streamers list</SectionTitle>
      {streamers.map((streamer) => (
        <StreamerCard key={streamer.id} streamer={streamer} />
      ))}
    </Section>
  );
}
