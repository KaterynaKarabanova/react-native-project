import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const Login = () => {
  const [userPassword, setUserPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [userName, setUserName] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const isInputFocused = (inputName) => {
    return focusedInput === inputName;
  };
  const toggleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/registrationBg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            placeholder="Логін"
            value={userName}
            onChangeText={setUserName}
            style={[
              styles.input,
              isInputFocused("username") && styles.inputFocused,
            ]}
            onFocus={() => handleFocus("username")}
            onBlur={handleBlur}
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Пароль"
              value={userPassword}
              onChangeText={setUserPassword}
              style={[
                styles.input,
                isInputFocused("userPassword") && styles.inputFocused,
              ]}
              secureTextEntry={!isPasswordVisible}
              onFocus={() => handleFocus("userPassword")}
              onBlur={handleBlur}
            />
            <Text style={styles.showPassword} onPress={toggleShowPassword}>
              Показати
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("Home")}
            >
              Увійти
            </Text>
          </TouchableOpacity>
          <Text
            style={styles.login}
            onPress={() => navigation.navigate("Registration")}
          >
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formWrapper: {
    display: "block",
    width: "100%",
    height: "60%",
    marginTop: "auto",
    marginBottom: 0,
    backgroundColor: "white",
    padding: 16,
    paddingTop: 32,
    position: "relative",
    borderRadius: 18,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  avatarWrapper: {
    position: "absolute",
    top: -70,
    left: "50%",
    transform: [{ translateX: -45 }],
    display: "block",
    width: 120,
    height: 130,
    backgroundColor: "#F6F6F6",
    borderRadius: 18,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 0.3,
    fontWeight: "500",
    marginBottom: 33,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#FFF", // Change the focused border color
  },
  button: {
    width: "100%",
    height: 51,
    marginTop: 27,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  login: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 16,
  },
  add: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    padding: 0,
    margin: 0,
    position: "absolute",
    bottom: 10,
    right: -15,
  },
  addText: {
    color: "#FF6C00",
    fontSize: 22,
    textAlign: "center",
    padding: 0,
    margin: 0,
    position: "absolute",
    top: -5,
  },
  passwordWrapper: {
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default Login;
