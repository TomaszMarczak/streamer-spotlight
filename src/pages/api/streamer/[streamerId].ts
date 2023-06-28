import { prisma } from "../../../db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const streamerId = req.query.streamerId as string;

      if (!streamerId || streamerId === "undefined") {
        const response = {
          result: "error",
          message: "Streamer retrieval failed. Missing streamerId.",
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
          message: "Streamer retrieval failed. Streamer not found.",
          error: "Streamer not found.",
        };
        return res.status(404).json(response);
      }
      const response = {
        result: "success",
        message: "Streamer retrieved successfully.",
        data: streamer,
      };
      return res.status(200).json(response);
    } catch (error) {
      const response = {
        result: "error",
        message: "Streamer retrieval failed.",
        error,
      };
      return res.status(500).json(response);
    }
  }
}
