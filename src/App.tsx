import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
