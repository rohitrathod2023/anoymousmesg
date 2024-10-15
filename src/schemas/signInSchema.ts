import exp from "constants";
import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
