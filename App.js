import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, Image } from "react-native";
import { Asset } from "expo-asset";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "https://www.google.com/search?q=free+high+quality+image&tbm=isch&ved=2ahUKEwiD4O6A7bHvAhXJIaYKHUo7DbUQ2-cCegQIABAA&oq=free+high&gs_lcp=CgNpbWcQARgAMgIIADIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjoECAAQEzoECCMQJzoHCCMQ6gIQJzoFCAAQsQM6CAgAELEDEIMBOggIABAIEB4QEzoGCAAQBRAeOgYIABAIEB5QvpkBWMbbAWCh_gFoCXAAeAKAAYwBiAGqEpIBBDcuMTWYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=9hZPYIONAsnDmAXK9rSoCw&bih=1196&biw=1764#imgrc=DTsA45p_l9gBfM",
      require("./assets/splash.png"),
    ]);
    console.log(images);
  };
  const onFisnish = () => setIsReady(true);
  return isReady ? (
    <Text>Ready!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFisnish}
      onError={console.error}
    />
  );
}
