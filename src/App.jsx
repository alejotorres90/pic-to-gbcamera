import { useState } from 'react';
import './App.css';
import Title from './components/title/Title'
import Upload from './components/upload/Upload'
import Edit from './components/edit/Edit'
import Body from './components/body/Body'

function App() {

  const [imageFile, setImageFile] = useState()
  const [step, setStep] = useState('upload')

  const markUploadComplete = (file) => {
    setStep('edit')
    setImageFile(file)
  }

  const changeUploadedPic = () => {
    setStep('upload')
    setImageFile(null)
  }

  return (
    <div className="App"  >
      <Title />
      {step === 'upload' ? <Upload markComplete={markUploadComplete} /> : <Edit file={imageFile} changePicAction={changeUploadedPic} />}
      <Body />
    </div>
  );
}

export default App;