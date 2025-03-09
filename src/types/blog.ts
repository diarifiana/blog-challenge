import { User } from "./user";

export interface BLog {
  objectId: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
  thumbnail: string;
  created: number;
  totalView: number;
  user: User
}
