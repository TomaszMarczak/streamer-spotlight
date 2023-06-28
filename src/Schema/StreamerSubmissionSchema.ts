import { z } from "zod";

export const StreamerSubmissionSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").max(20),
  platform: z.enum(["Twitch", "YouTube", "TikTok", "Kick", "Rumble"]),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(100, "Description must be less than 100 characters long"),
  image: z.string().optional(),
});

export type FieldValues = z.infer<typeof StreamerSubmissionSchema>;
