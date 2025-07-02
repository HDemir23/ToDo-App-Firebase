import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/services/todoService";
import { TodoStyles } from "@/styles/Todo.style";
import { getAuth } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ToDO = {
  id: string;
  text: string;
  completed: boolean;
  createdAt?: any; // Creation timestamp (may be undefined)
};

export default function Todo() {
  const style = TodoStyles();

  const [task, setTask] = useState(""); // Taskt to be added
  const [todos, setTodos] = useState<ToDO[]>([]); // List Of todos

  const auth = getAuth();
  const uid = auth.currentUser?.uid;

  const handleAdd = useCallback(async () => {
    // add Todos
    if (!uid) return;
    await addTodo(uid, task);
    await fetchTodos();
  }, [uid, task]);

  const handleDelete = useCallback(
    //Delete Todos
    async (id: string) => {
      if (!uid) return;
      await deleteTodo(uid, id);
      await fetchTodos();
    },
    [uid]
  );

  const handleUpdate = useCallback(
    // Update Todos
    async (id: string, text?: string, completed?: boolean) => {
      if (!uid) return;
      await updateTodo(uid, id, { text, completed });
      await fetchTodos();
    },
    [uid]
  );

  const fetchTodos = useCallback(async () => {
    //fetch Todos
    if (!uid) return;
    const data = (await getTodos(uid)) as ToDO[];
    setTodos(data);
  }, [uid]);

  useEffect(() => {
    // render items when opened
    fetchTodos();
  }, [fetchTodos]);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Add ToDO"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Text>ADD</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        style={style.FlatList}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={style.FlatListItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
