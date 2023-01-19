import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        heading="This is a heading"
        text="This is a card Description, write something here to describe about the content of the card"
        needButtons
      />
    </div>
  );
}

export default App;
