import { Section } from "../Section";
import { useStreamers } from "../../context/streamers.context";
import { StreamerCard } from "./StreamerCard";
import { SkeletonStreamerCard } from "../Skeletons/SkeletonStreamerCard";
import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <Section title="Streamers list">
        <SkeletonStreamerCard />
        <SkeletonStreamerCard />
        <SkeletonStreamerCard />
        <SkeletonStreamerCard />
      </Section>
    );

  return (
    <Section title="Streamers list">
      <AnimatePresence>
        {streamers.map((streamer) => (
          <motion.div
            layout
            key={streamer.id}
            transition={{
              opacity: { duration: 1 },
              layout: { duration: 0.5 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StreamerCard key={streamer.id} streamer={streamer} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Section>
  );
}
