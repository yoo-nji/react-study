import { create } from "zustand";
import { TPost } from "../type/post";
type TPostStoe = {
  posts: TPost[];
  fetchPosts: (url: string) => Promise<void>;
  addPost: (formData: TPost) => Promise<boolean>;
};
const usePostStore = create<TPostStoe>((set) => ({
  posts: [],
  fetchPosts: async (url: string) => {
    try {
      // http://localhost:3000/posts?필드명_like=값
      // http://localhost:3000/posts?title_like=hello
      const response = await fetch("http://localhost:3000" + url);
      const data = await response.json();
      set({ posts: data });
    } catch (e) {
      console.error(e);
    }
  },
  addPost: async (formData) => {
    try {
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        return true;
      }
      return false;
    } catch (e) {
      console.error("데이터 전송에 실패했습니다.");
      return false;
    }
  },
}));
export default usePostStore;
