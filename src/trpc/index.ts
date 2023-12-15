import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "@/lib/validators/query-validator";
import { getPayLoadClient } from "../get-payload";

export const appRouter = router({
  auth: authRouter,
  getInfiniteProducts: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator,
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, ...queryOpts } = query;

      const payload = await getPayLoadClient();

      const { docs } = await payload.find({
        collection: "products",
        where: {
          approvedForSale: {
            equals: "approved",
          },
        },
        sort,
        depth: 1,
        limit,
      });
    }),
});

export type AppRouter = typeof appRouter;
