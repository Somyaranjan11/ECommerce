import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./App.css";
export default function App() {
  return (
    <div className="flex h-full w-[100%] flex-col">
      <Header />
      <HomePage />
    </div>
  );
}
