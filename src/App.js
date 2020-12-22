// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" />
      <Hello isSpecial/>
    </Wrapper>
  );
}

export default App;
