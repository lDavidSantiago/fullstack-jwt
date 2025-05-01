import AuthContent from "./components/AuthContent";
import Header from "./components/header";
import LoginRegister from "./components/LoginRegister";

function App() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline text-center">
        Frontend authenticated with JWT
      </h1>
      <AuthContent />
      <LoginRegister />
    </div>
  );
}

export default App;
