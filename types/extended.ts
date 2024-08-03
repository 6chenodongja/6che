import { Database } from "./supabase";

export type ExtendedPostInsert =
  Database["public"]["Tables"]["posts"]["Insert"] & {
    gender?: string;
    style?: string;
    seasons?: string[];
    locations?: string[];
  };
