import { prisma } from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const streamerIdRegExp = /(?<=streamer\/)(.*)(?=\/vote)/;
    const streamerIdRaw = req.url?.match(streamerIdRegExp);

    const streamerId = streamerIdRaw ? streamerIdRaw[0] : null;
    const request = await JSON.parse(req.body);
    try {
      if (!streamerId || streamerId === undefined) {
        const response = {
          result: "error",
          message: "Vote submission failed. Missing streamerId.",
          error: "Missing required fields.",
        };
        return res.status(400).json(response);
      }
      if (!request.vote) {
        const response = {
          result: "error",
          message: "Vote submission failed. Invalid vote.",
          error: "Missing required fields.",
        };
        return res.status(400).json(response);
      }

      const streamer = await prisma.streamer.findUnique({
        where: { id: streamerId },
      });
      if (!streamer) {
        const response = {
          result: "error",
          message: "Vote submission failed. Streamer not found.",
          error: "Missing required fields.",
        };
        return res.status(400).json(response);
      }
      const updatedStreamer = await prisma.streamer.update({
        where: { id: streamerId },
        data: {
          upvotes:
            request.vote === "up" ? streamer.upvotes + 1 : streamer.upvotes,
          downvotes:
            request.vote === "down"
              ? streamer.downvotes + 1
              : streamer.downvotes,
        },
      });

      const response = {
        result: "success",
        message: "Vote submitted successfully.",
        data: {
          streamer: updatedStreamer,
        },
      };
      return res.status(200).json(response);
    } catch (error) {
      const response = {
        result: "error",
        message: "Vote submission failed.",
        error: "Internal server error.",
      };
      return res.status(500).json(response);
    }
  }
}
