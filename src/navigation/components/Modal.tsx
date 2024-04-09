import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
import { colors } from "../../constants/colors";
import AppText from "../../components/text/AppText";
import { windowWidth } from "../../utils/dimensions";

export const Modal = ({
  isVisible = false,
  children,
  ...props
}) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      animationType="fade"
      backdropOpacity={0.3}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }) => (
  <View>
    <AppText style={styles.text}>{title}</AppText>
  </View>
);

const ModalBody = ({ children }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    width: windowWidth/1.2,
    backgroundColor: colors.lavender,
    borderRadius: 27,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  text: {
    fontSize: 20,
  },
  body:{
    paddingVertical: 16
  },
  footer: {
    paddingTop: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;