import { StyleSheet, Dimensions } from "react-native";

// hardcore math to have 2 buttons per row
// fitting perfectly on any screen size, with proper spacing
// this is temporary

const {width: screenWidth} = Dimensions.get("window");
const buttonMargin = 4;
const containerPadding = 16;
const buttonWidth = (screenWidth - (containerPadding * 2) - (buttonMargin * 4)) / 2;

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 16,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: buttonWidth,
    backgroundColor: "#eee",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin : buttonMargin,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  buttonSelected: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#333",
    textAlign: "center",
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 18,
  },
  buttonTextSelected: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 18,
  },
  submitContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#007AFF",
    margin: 16,
    borderRadius: 8,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
