import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "./config";
import { generateRandomNumber } from "../utils/generateRandomNumber";

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

export const getCollectionSize = async () => {
  const wordsCol = collection(db, "words");

  try {
    const wordsSnapshot = await getDocs(wordsCol);
    const size = wordsSnapshot.size;
    return size;
  } catch (error) {
    throw new Error("Something went wrong: " + error.message);
  }
};

export const getRandomWord = async () => {
  let word = [];

  try {
    const collectionSize = await getCollectionSize();
    const randomNumber = generateRandomNumber(collectionSize);

    const q = query(collection(db, "words"), where("id", "==", randomNumber));

    const wordSnapshot = await getDocs(q);
    wordSnapshot.forEach((doc) => word.push(doc.data()));
    return word;
  } catch (error) {
    throw new Error("Something went wrong: " + error.message);
  }
};
