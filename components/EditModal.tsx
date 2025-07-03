import { FC } from "react";
import {
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  value: string;
  onChange: (v: string) => void;
  onSave: () => void;
  onClose: () => void;
  original: string; // 👈 orijinal değer
};

const EditModal: FC<Props> = ({
  visible,
  value,
  onChange,
  onSave,
  onClose,
  original,
}) => {
  const handleOutsidePress = () => {
    Keyboard.dismiss();

    // 👇 değişiklik yapılmamışsa ya da boşsa sadece kapat
    if (value.trim() === original.trim()) {
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 12,
                width: "80%",
              }}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Edit task"
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 12,
                }}
              />
              <TouchableOpacity
                onPress={onSave}
                style={{
                  backgroundColor: "#007bff",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditModal;
