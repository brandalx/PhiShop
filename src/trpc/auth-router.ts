import { AuthCredentialsValidation } from "@/lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayLoadClient } from "@/get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidation)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayLoadClient();
      //check if user exits already
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });
      if (users.length !== 0) throw new TRPCError({ code: "CONFLICT" });
    }),
});
