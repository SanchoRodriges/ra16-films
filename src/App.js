import './App.css';
import Stars from './components/Stars'

function App() {
  return (
    <div className="">
      <Stars count={3} />

      <Stars />

      <Stars count={'Привет!'} />
    </div>
  );
}

export default App;
