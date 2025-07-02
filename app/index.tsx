import { FirebasAuth } from "@/FireBaseConfig example";
import { LoginStyles } from "@/styles/Login.style";
import {
  sendEmailVerification,
  signInAnonymously,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function index() {
  // this is essentially login page
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const style = LoginStyles();

  const anonym = useCallback(async () => {
    try {
      const useCredential = await signInAnonymously(FirebasAuth);
      router.replace("/Todo");
      console.log("anon user", useCredential.user.uid);
    } catch (e: any) {
      Alert.alert("Something went Wrong");
      console.log(e);
    }
  }, []);

  const logIn = useCallback(async () => {
    try {
      const useCreditential = await signInWithEmailAndPassword(
        // get auth from firebase take Email and Password
        FirebasAuth,
        Email,
        Password
      );

      const user = useCreditential.user;

      if (user && !user.emailVerified) {
        //send virfication mail to user
        await sendEmailVerification(user);
        Alert.alert("Please verify your Email");
      }

      if (user.emailVerified) {
        // if user exist and verified route to Todo page
        router.replace("/Todo");
        console.log("userLogged In");
      }
    } catch (e: any) {
      Alert.alert("Something Went Wrong While logging in");
      console.log(e, e.message); //catch error
    }
  }, [Email, Password]);

  return (
    <View style={style.container}>
      <Text style={style.title}>Log In</Text>

      <TextInput
        style={style.input}
        placeholder="Email"
        placeholderTextColor="#888"
        autoCapitalize="none"
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        placeholderTextColor="#888"
        autoCapitalize="none"
        secureTextEntry
        value={Password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={logIn} style={style.button}>
        <Text style={style.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Text>
          <Text
            style={style.blueLink}
            onPress={() => router.replace("/SignIn")}
          >
            Sign in{" "}
          </Text>
          Or Be
          <Text style={style.blueLink} onPress={anonym}>
            {" "}
            Anonym
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
