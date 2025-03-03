import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import PostItImage from "../assets/images/post-it.png";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.image}/>
      <Text style={styles.title}>Welcome To Notes App</Text>
      <Text style={styles.subtitle}>Capture your thoughts anytime, anywhere</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#666",
  },
  image: {
    width: 150,
    height: 150,
  },
});
