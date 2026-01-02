// import { AuthProvider } from "./context/AuthContext";
import { AuthProvider } from "./context/Authcontext";
// import AppRoutes from "./routes/AppRoutes";
import AppRoutes from "./routes/appRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
