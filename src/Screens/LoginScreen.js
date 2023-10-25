import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS } from "../libs/colors";

export const LoginScreen = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const onPressShowPassword = () => {
    return;
  };

  const onPressLogInBtn = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bg-login.jpg")}
        style={styles.bgImage}
      >
        <KeyboardAvoidingView
          style={styles.formBgDecoration}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={[
              styles.inputCommon,
              styles.inputSpace,
              isEmailFocused && styles.focusedInput,
            ]}
            placeholder="Адреса електронної пошти"
            placeholderTextColor={COLORS.placeholderColor}
            name="email"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <View style={styles.inputPasswordWrapper}>
            <TextInput
              style={[
                styles.inputCommon,
                isPasswordFocused && styles.focusedInput,
              ]}
              placeholder="Пароль"
              placeholderTextColor={COLORS.placeholderColor}
              name="password"
              textContentType="password"
              secureTextEntry={true}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity
              style={styles.showPasswordTextWrapper}
              onPress={onPressShowPassword}
            >
              <Text style={styles.textShowPassword}>Показати</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonsBgDecoration}>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={onPressLogInBtn}
          >
            <Text style={styles.registerBtnText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginLink}
            onPress={onPressShowPassword}
          >
            <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formBgDecoration: {
    width: "100%",
    backgroundColor: COLORS.whiteBg,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  buttonsBgDecoration: {
    width: "100%",
    backgroundColor: COLORS.whiteBg,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: COLORS.regularText,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  inputCommon: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    // borderRadius: 8,
    padding: 16,
    color: COLORS.regularText,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputSpace: {
    marginBottom: 16,
  },
  focusedInput: {
    borderColor: COLORS.inputBorderFocused,
  },
  inputPasswordWrapper: {
    marginBottom: 43,
  },
  showPasswordTextWrapper: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  textShowPassword: {
    color: COLORS.link,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  registerBtn: {
    width: "100%",
    padding: 16,
    // borderRadius: 100,
    alignItems: "center",
    backgroundColor: COLORS.primaryBtn,
    marginBottom: 16,
  },
  registerBtnText: {
    color: COLORS.whiteBtnText,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  loginLink: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  loginLinkText: {
    color: COLORS.link,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 132,
  },
});
