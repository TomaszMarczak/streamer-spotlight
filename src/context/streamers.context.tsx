import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import { Streamer } from "@prisma/client";

interface StreamersContextProps {
  streamers: Streamer[];
  saveStreamer: (streamer: Streamer) => Promise<Streamer>;
  sendVote: (streamerId: string, vote: "up" | "down") => Promise<void>;
  voting: boolean;
  fetching: boolean;
}

export const StreamersContext = createContext({} as StreamersContextProps);

export function useStreamers() {
  return useContext(StreamersContext);
}

export function StreamersProvider({ children }: { children: ReactNode }) {
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  const [voting, setVoting] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchStreamers = async () => {
    try {
      const response = await fetch("/api/streamers").then((res) => res.json());
      const streamers = response.data;
      if (response.result === "success") {
        setStreamers(streamers as Streamer[]);
        setFetching(() => false);
      }
      if (response.result === "error") {
        toast.error(response.message);
        setFetching(() => false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStreamers();
  }, []);

  const saveStreamer = async (streamer: Streamer) => {
    try {
      const response = await fetch("/api/streamers", {
        method: "POST",
        body: JSON.stringify(streamer),
      }).then((res) => res.json());
      if (response.result === "success") {
        setStreamers([...streamers, response.data]);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const sendVote = async (streamerId: string, vote: "up" | "down") => {
    setVoting(() => true);
    try {
      const response = await fetch(`/api/streamer/${streamerId}/vote`, {
        method: "PUT",
        body: JSON.stringify({ vote }),
      }).then((res) => res.json());
      if (response.result === "success") {
        fetchStreamers();
        toast.success(response.message);
        setVoting(() => false);
      } else {
        toast.error(response.message);
        setVoting(() => false);
      }
      return response;
    } catch (e) {
      console.log(e);
      setVoting(() => false);
    }
  };

  return (
    <StreamersContext.Provider
      value={{ streamers, saveStreamer, sendVote, voting, fetching }}
    >
      {children}
    </StreamersContext.Provider>
  );
}
