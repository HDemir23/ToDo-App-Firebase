import EditModal from "@/components/EditModal";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/services/todoService";
import { TodoStyles } from "@/styles/Todo.style";
import { TodoType } from "@/Types/Todo";
import { getAuth } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function Todo() {
  const style = TodoStyles();

  const [task, setTask] = useState(""); // Taskt to be added
  const [todos, setTodos] = useState<TodoType[]>([]); // List Of todos

  const [editItem, setEditItem] = useState<TodoType | null>(null);
  const [editText, setEditText] = useState("");

  const [completed, setCompleted] = useState(false);

  const auth = getAuth();
  const uid = auth.currentUser?.uid;

  const handleAdd = useCallback(async () => {
    // add task
    if (!uid) return;
    const trimmed = task.trim();
    if (trimmed.length === 0 || trimmed.length > 150) {
      Alert.alert("Invalid", "Todo must be between 1 and 150 characters.");
      return;
    }
    await addTodo(uid, trimmed);
    setTask("");
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
    // handle update
    async (id: string, text?: string, completed?: boolean) => {
      if (!uid) return;

      const updateData: any = {};
      if (text !== undefined) updateData.text = text;
      if (completed !== undefined) updateData.completed = completed;

      await updateTodo(uid, id, updateData);
      await fetchTodos();
    },
    [uid]
  );

  const fetchTodos = useCallback(async () => {
    //fetch Todos
    if (!uid) return;
    const data = (await getTodos(uid)) as TodoType[];
    setTodos(data);
  }, [uid]);

  useEffect(() => {
    // render items when opened
    fetchTodos();
  }, [fetchTodos]);

  const openEdit = (item: TodoType) => {
    setEditItem(item);
    setEditText(item.text);
  };

  const saveEdit = async () => {
    if (!editItem) return;

    const trimmed = editText.trim();

    // Validation
    if (trimmed.length === 0 || trimmed.length > 150) {
      Alert.alert("Invalid", "Todo must be between 1 and 150 characters.");
      return;
    }

    try {
      await handleUpdate(editItem.id, trimmed);
      setEditItem(null); // Close modal
      setEditText("");
    } catch (error) {
      console.error("Update failed:", error);
      Alert.alert("Error", "Failed to update todo. Please try again.");
    }
  };

  const toggleCompleted = async (item: TodoType) => {
    try {
      await handleUpdate(item.id, undefined, !item.completed);
    } catch (error) {
      console.error("Toggle failed", error);
      Alert.alert("Error", "Could not toggle task status.");
    }
  };

  const renderItem = ({ item }: { item: TodoType }) => {
    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity
            style={style.deleteButton}
            onPress={() => handleDelete(item.id)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
          </TouchableOpacity>
        )}
      >
        <View style={style.FlatListItem}>
          {/* Complete Button */}
          <TouchableOpacity onPress={() => toggleCompleted(item)}>
            <Text style={{ fontSize: 18, marginRight: 12 }}>
              {item.completed ? "✅" : "⬜️"}
            </Text>
          </TouchableOpacity>

          {/* Edit Button */}
          <TouchableOpacity style={{ flex: 1 }} onPress={() => openEdit(item)}>
            <Text
              style={[
                style.TaskStyle,
                item.completed && {
                  textDecorationLine: "line-through",
                  color: "#888",
                },
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Todos</Text>
      <TextInput
        style={style.input}
        maxLength={150}
        placeholder="Add ToDO"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={style.button} onPress={handleAdd}>
        <Text style={style.buttonText}>ADD</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        style={style.FlatList}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={renderItem}
      />

      <EditModal
        visible={editItem !== null}
        value={editText}
        onChange={setEditText}
        onClose={() => {
          setEditItem(null);
          setEditText("");
        }}
        onSave={saveEdit}
        original={editItem?.text || ""}
      />
    </View>
  );
}
