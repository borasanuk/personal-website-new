import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  limit,
  orderBy,
} from "firebase/firestore";
import { getBytes, ref } from "firebase/storage";
import { BBlogPost } from "../models/BBlogPost";
import { db, storage } from "./firebaseConfig";

export const getAllBlogPosts = async (): Promise<BBlogPost[]> => {
  const docsSnap = await getDocs(
    query(collection(db, "posts"), orderBy("date", "desc"))
  );
  const posts: BBlogPost[] = [];
  docsSnap.forEach((doc) => {
    posts.push(doc.data() as BBlogPost);
  });
  return posts;
};

export const getRecentBlogPosts = async (
  l: number = 3
): Promise<BBlogPost[]> => {
  const docsSnap = await getDocs(query(collection(db, "posts"), orderBy("date", "desc"), limit(l)));
  const posts: BBlogPost[] = [];
  docsSnap.forEach((doc) => {
    posts.push(doc.data() as BBlogPost);
  });
  return posts;
};

export const getBlogPost = async (
  id: string
): Promise<BBlogPost | undefined> => {
  const docSnap = await getDoc(doc(db, "posts", id));
  if (!docSnap.exists()) {
    return undefined;
  }
  const data = (await docSnap.data()) as BBlogPost;
  const contentRef = ref(storage, "posts/" + id + "/content.md");
  const bytes = await getBytes(contentRef);
  const decoder = new TextDecoder("utf-8");
  const decodedContent = decoder.decode(bytes);
  data.content = decodedContent;
  return data;
};
