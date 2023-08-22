import ReactPlayer from 'react-player';
import './App.css';
import { flushSync } from 'react-dom';

function App() {
  const VidUrl="https://www.youtube.com/watch?v=RF6c0Gbmtl4";
  return (
     <div className='App'>
      <h1>React Player Example</h1>
      <ReactPlayer 
        url={VidUrl}
        playing={false}
        volume={0.5} 
      />
     </div>
  );
}

export default App;
