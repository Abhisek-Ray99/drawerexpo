import { Platform } from "react-native";
import { colors } from "../constants/colors";

export const shadowStyle =
  Platform.OS === "ios"
    ? {
        shadowColor: colors.aliceblue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      }
    : Platform.OS === "android"
    ? {
        elevation: 20,
      }
    : {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 25,
        elevation: 1,
      };