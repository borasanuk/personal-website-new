import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getBytes, ref } from "firebase/storage";
import { BBlogPost } from "../models/BBlogPost";
import { db, storage } from "./firebaseConfig";

export const getAllBlogPosts = async (): Promise<BBlogPost[]> => {
  const docsSnap = await getDocs(collection(db, "posts"));
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
  const contentRef = ref(storage, "posts/" + id + ".md");
  const bytes = await getBytes(contentRef);
  const decoder = new TextDecoder("utf-8");
  const decodedContent = decoder.decode(bytes);
  data.content = decodedContent;
  return data;
};