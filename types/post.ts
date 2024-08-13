import { Tables } from "./supabase";

export type PostItemType = Tables<'posts'> & { users: Tables<'users'> | null };

export type postListLikedType =    Pick<Tables<'post_likes'>, "post_id">

export type postLikedItemType = Tables<'post_likes'> & { users: Tables<'users'> | null };

export type postLikedItem = Tables<'post_likes'> & {
    posts: (Tables<'posts'> & { users: Tables<'users'> | null }) | null;
  };
export type PostDetailItem = Tables<'posts'> & { users: Tables<'users'> | null };