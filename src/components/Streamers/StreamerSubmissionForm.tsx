import { Button, MenuItem, TextField, Grid, Divider, Box } from "@mui/material";
import { createElement, useState } from "react";
import { Section } from "../Section";
import { ImageUpload } from "./ImageUpload";
import { useStreamers } from "../../context/streamers.context";
import { Streamer } from "@prisma/client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { StreamerSubmissionSchema } from "@/Schema/StreamerSubmissionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { platforms } from "@/assets/platforms";

export default function StreamerSubmissionForm() {
  const [image, setImage] = useState<string>("");

  const { saveStreamer } = useStreamers();

  const onSubmit: SubmitHandler<FieldValues> = async (data, event) => {
    const streamer = {
      name: data.name,
      description: data.description,
      platform: data.platform,
      image: image ? image : "",
    };
    saveStreamer(streamer as Streamer).then(() => {
      setImage("");
    });
    reset();
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(StreamerSubmissionSchema),
    defaultValues: {
      name: null,
      description: null,
      platform: null,
    },
  });

  return (
    <Section title="Submit a streamer">
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
            {platforms.map((platform) => (
              <MenuItem key={platform.name} value={platform.name}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {createElement(platform.icon)} {platform.name}
                </Box>
              </MenuItem>
            ))}
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
