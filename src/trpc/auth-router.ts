import { getPayLoadClient } from "../get-payload";
import { AuthCredentialsValidation } from "../lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";

import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidation)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayLoadClient();

      // check if user already exists
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) throw new TRPCError({ code: "CONFLICT" });

      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          role: "user",
        },
      });

      return { success: true, sentToEmail: email };
    }),
});
