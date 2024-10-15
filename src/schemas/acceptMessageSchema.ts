import exp from "constants";
import { z } from "zod";

export const AcceptMessagesSchema = z.object({
  acceptMessages: z.string(),
});
