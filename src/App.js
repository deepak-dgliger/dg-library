import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
function App() {
  return (
     <MyButton label="Click Me!" onClick={() => alert('Clicked')} />
  );
}

export default App;
