import { Database } from "./supabase";

export type ExtendedPostInsert =
  Database["public"]["Tables"]["posts"]["Insert"] & {
    weather: string;
  };
