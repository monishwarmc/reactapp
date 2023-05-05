import './App.css';
import { useTheme } from './Theme';
import SignUp from './forms/SignUp';
import { Switch } from './switch/Switch';
import { User } from './User/User';


function App() {
  const { theme } = useTheme();
  return (
    <div className="App" 
    style={{
      backgroundColor: theme === "light" ? "white" : "blue",
    }}
    >
      <Switch/>
      <SignUp/>
      <User/>
    </div>
  );
}

export default App;
