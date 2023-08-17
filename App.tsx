import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  if (__DEV__) {
    require('react-devtools');
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
