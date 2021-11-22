import './App.scss';

import Desktop from './Components/Desktop/Desktop';
import Taskbar from './Components/CommonModules/Taskbar/Taskbar';

function App() {
  return (
    <div className="main-windows">
      <Desktop />
      <Taskbar />

    </div>
  );
}

export default App;
