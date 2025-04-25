import { SafeAreaProvider} from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreens";

function App () {
  return (
    <SafeAreaProvider>
      <TaskScreen/>
    </SafeAreaProvider>
  )
}

export default App;