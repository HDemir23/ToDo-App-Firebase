// services/todoService.ts

import { db } from "@/firebaseConfig";
import { TodoType } from "@/Types/Todo";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

//  Add Todo Task
export const addTodo = async (uid: string, text: string) => {
  if (!text.trim()) return;

  await addDoc(collection(db, `users/${uid}/todos`), {
    text,
    completed: false,
    createdAt: serverTimestamp(),
  });
};

//  Get Todos
export const getTodos = async (uid: string) => {
  const q = query(
    collection(db, `users/${uid}/todos`),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

//  Delete Todo
export const deleteTodo = async (uid: string, id: string) => {
  await deleteDoc(doc(db, `users/${uid}/todos/${id}`));
};

// Update Todo
export const updateTodo = async (
  uid: string,
  id: string,
  data: Partial<TodoType>
) => {
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([_, v]) => v !== undefined)
  );

  const docRef = doc(db, "users", uid, "todos", id);
  await updateDoc(docRef, filteredData);
};
