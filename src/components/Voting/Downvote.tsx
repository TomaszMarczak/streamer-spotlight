import { FaPoo } from "react-icons/fa";
import { Badge, Box, ButtonBase, Tooltip } from "@mui/material";
import { VoteProps } from "./Upvote";
import { useStreamers } from "@/context/streamers.context";

export const Downvote = ({ count, streamerId }: VoteProps) => {
  const { sendVote, voting } = useStreamers();
  const handleVote = (e: any) => {
    e.stopPropagation();
    if (voting) return;
    sendVote(streamerId, "down");
  };
  return (
    <Badge
      badgeContent={count}
      color="primary"
      max={999}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Tooltip title="Hate it" arrow>
        <ButtonBase
          onClick={(e) => handleVote(e)}
          sx={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            backgroundColor: "error.main",
            color: "white",
            "&:hover": {
              backgroundColor: "error.dark",
              boxShadow: 2,
            },
          }}
        >
          <FaPoo size={20} />
        </ButtonBase>
      </Tooltip>
    </Badge>
  );
};
