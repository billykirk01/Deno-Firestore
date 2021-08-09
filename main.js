import "https://deno.land/x/xhr@0.1.1/mod.ts";
import { firebaseConfig } from "./config.js";
import { initializeApp } from "https://cdn.skypack.dev/firebase@v9.0.0-beta.2/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
} from "https://cdn.skypack.dev/firebase@v9.0.0-beta.2/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docs = await getDocs(query(collection(db, "people")));

docs.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

Deno.exit(0);
