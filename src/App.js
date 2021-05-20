import { BiCalendarEvent} from 'react-icons/bi';
import './App.css';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl text-gray-700">
        <BiCalendarEvent className="inline-block mb-4"/>Appointments Manager
        </h1>
    </div>
  );
}

export default App;
