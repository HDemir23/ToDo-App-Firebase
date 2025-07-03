import { FirebasAuth } from "@/firebaseConfig";
import { LoginStyles } from "@/styles/Login.style";
import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useCallback, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const style = LoginStyles();

  const signIn = useCallback(async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex check

      if (!emailRegex.test(Email)) {
        // if email is not valid send alert
        Alert.alert("Invalid Email ");
        return;
      }

      if (Password !== checkPassword) {
        // if passwords aren't same send alert
        Alert.alert("passwords must be same");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        //create user with email and password
        FirebasAuth,
        Email,
        Password
      );

      const user = userCredential.user; // get user details

      if (user && !user.emailVerified) {
        // check user exist and email verified if user exist but email not verified send email verification
        await sendEmailVerification(user);
        Alert.alert("Please Verify your Email");
        router.replace("/");
      }

      if (user && user.emailVerified) {
        // if user exist and mail verified route user to main page
        Alert.alert("Welcomee");
        router.replace("/Todo");
      }
    } catch (error) {}
  }, [Email, Password, checkPassword]);

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

      <TextInput
        style={style.input}
        placeholder="Password"
        placeholderTextColor="#888"
        autoCapitalize="none"
        secureTextEntry
        value={checkPassword}
        onChangeText={setCheckPassword}
      />
      <TouchableOpacity onPress={signIn} style={style.button}>
        <Text style={style.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text style={style.blueLink}>Back to LogIn</Text>
      </TouchableOpacity>
    </View>
  );
}
