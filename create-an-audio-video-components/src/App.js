import ReactPlayer from 'react-player';
import './App.css';
import BirdAudio from './BirdAudio';

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
      <hr></hr>
      {/* Tasks for BirdAudio */}
    <BirdAudio />
     </div>
  );
}

export default App;
