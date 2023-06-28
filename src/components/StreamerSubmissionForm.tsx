import { Button, MenuItem, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { Section } from "./Section";
import { SectionTitle } from "./Section";
import { ImageUpload } from "./ImageUpload";
import { useStreamers } from "../context/streamers.context";
import { Streamer } from "@prisma/client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { StreamerSubmissionSchema } from "@/Schema/StreamerSubmissionSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function StreamerSubmissionForm() {
  const [image, setImage] = useState<string>("");

  const { saveStreamer } = useStreamers();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const streamer = {
      name: data.name,
      description: data.description,
      platform: data.platform,
      image: image ? image : "",
    };
    saveStreamer(streamer as Streamer);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(StreamerSubmissionSchema),
  });

  return (
    <Section>
      <SectionTitle>Streamer submission form</SectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="streamer-name"
            label="Streamer name"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message?.toString()}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="streamer-platform"
            label="Platform"
            select
            {...register("platform")}
            defaultValue={""}
            error={!!errors.platform}
            helperText={errors.platform?.message?.toString()}
            required
            fullWidth
          >
            <MenuItem value="Twitch">Twitch</MenuItem>
            <MenuItem value="YouTube">YouTube</MenuItem>
            <MenuItem value="TikTok">TikTok</MenuItem>
            <MenuItem value="Kick">Kick</MenuItem>
            <MenuItem value="Rumble">Rumble</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="streamer-description"
            label="Streamer description"
            multiline
            minRows={4}
            maxRows={8}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message?.toString()}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <ImageUpload image={image} setImage={setImage} />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </Section>
  );
}
