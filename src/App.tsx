import { AuthProvider } from './Components/AuthContext';
import LoginPage from "./Components/LoginPage";
import "./index.css";


function App() {
  return (
    <AuthProvider>
       <div className='flex flex-col items-center h-svh'>
        <h3> Bievenidos </h3>
        <LoginPage />
        
        
      </div>
    </AuthProvider>
  )
}

export default App
