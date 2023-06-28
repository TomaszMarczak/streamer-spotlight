import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const streamers = await prisma.streamer.findMany();
      const response = {
        result: "success",
        message: "Streamers retrieved successfully.",
        data: streamers,
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
  if (req.method === "POST") {
    try {
      const data = await JSON.parse(req.body);
      if (!data.name || !data.description || !data.platform) {
        const response = {
          result: "error",
          message: "Streamer submission failed.",
          error: "Missing required fields.",
        };
        return res.status(400).json(response);
      }
      const newStreamer = await prisma.streamer.create({ data });
      const response = {
        result: "success",
        message: "Streamer submitted successfully.",
        data: newStreamer,
      };
      return res.status(200).json(response);
    } catch (error) {
      const response = {
        result: "error",
        message: "Streamer submission failed.",
        error,
      };
      console.log(error);
      return res.status(500).json(response);
    }
  }
  //For testing purposes only
  if (req.method === "DELETE") {
    try {
      const streamers = await prisma.streamer.deleteMany();
      const response = {
        result: "success",
        message: "Streamers deleted successfully.",
        data: streamers,
      };
      return res.status(200).json(response);
    } catch (error) {
      const response = {
        result: "error",
        message: "Streamer deletion failed.",
        error,
      };
      return res.status(500).json(response);
    }
  }
}
