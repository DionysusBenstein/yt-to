import Header from "./components/Header";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import Select from "./components/UI/Select";
import Loader from "./components/UI/Loader";

function App() {
  return (
    <div className="App">
      <Header/>
      <Input placeholder="URL"/>
      <Button>Download</Button>
      <Select defaultValue={0} options={[
        { value: 'wav', name: 'WAV' },
        { value: 'mp3', name: 'MP3' },
        { value: 'mp4', name: 'MP4' }
      ]}/>
      <Loader />
    </div>
  );
}

export default App;
