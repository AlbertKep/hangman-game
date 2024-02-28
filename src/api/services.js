import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "./config";

export const getCategories = async () => {
  const categoryCol = collection(db, "categories");

  try {
    const categoriesSnapshot = await getDocs(categoryCol);
    const categories = categoriesSnapshot.docs.map((doc) => doc.data());
    return categories;
  } catch (error) {
    throw new Error("Something went wrong: " + error.message);
  }
};

export const getWords = async (category) => {
  let words = [];
  const q = query(collection(db, "words"), where("category", "==", category));

  try {
    const wordsSnapshot = await getDocs(q);
    wordsSnapshot.forEach((doc) => words.push(doc.data()));
    return words;
  } catch (error) {
    throw new Error("Something went wrong: " + error.message);
  }
};
