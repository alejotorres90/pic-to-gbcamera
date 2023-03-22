import { useState } from 'react';
import './Upload.css';

function Upload(props) {

  const [dragInside, setDragInside] = useState(false)
  const [showError, setShowError] = useState(false)

  const inputChange = e => {
    if (e.target.files && e.target.files.length === 1 && (e.target.files[0].type === 'image/png' || e.target.files[0].type === 'image/jpg' || e.target.files[0].type === 'image/jpeg')) {
      const file = e.target.files[0]
      props.markComplete(file)
    } else {
      setShowError(true)
      setTimeout(() => { setShowError(false) }, 7000)
    }
  }

  const uploadDragEnter = e => {
    e.preventDefault()
    setDragInside(true)
  }

  const uploadDrop = e => {
    e.preventDefault()

    if (e.dataTransfer.files && e.dataTransfer.files.length === 1 && (e.dataTransfer.files[0].type === 'image/png' || e.dataTransfer.files[0].type === 'image/jpg' || e.dataTransfer.files[0].type === 'image/jpeg')) {
      const file = e.dataTransfer.files[0]
      props.markComplete(file)
    } else {
      setDragInside(false)
      setShowError(true)
      setTimeout(() => { setShowError(false) }, 7000)
    }
  }

  const uploadDragLeave = e => {
    e.preventDefault()
    setDragInside(false)
  }

  const errorTransitionEnd = e => {
    if (e.target.style.opacity === '1') {
      e.target.style.height = '19px';
      e.target.style.padding = '10px';
      e.target.style.transition = 'opacity 1s ease-in-out'
    } else {
      e.target.style.height = '0';
      e.target.style.padding = '0';
      e.target.style.transition = 'opacity 0.01s ease-in-out;'
    }
  }

  return (
    <div className="Upload">
      <div className={"Upload-container" + (dragInside ? " Upload-container-dragInside" : "")} onDragEnter={uploadDragEnter} onDrop={uploadDrop} onDragLeave={uploadDragLeave} onDragOver={e => e.preventDefault()} >
        <input type="file" accept=".jpg, .jpeg, .png" onChange={inputChange} />
        <img src={dragInside ? import.meta.env.BASE_URL + "/imgs/drop.png" : import.meta.env.BASE_URL + "/imgs/drag.png"} alt="" />
        <h3>{dragInside ? "Drop here!" : "Click to browse or drop your file here!"}</h3>
      </div>
      <p className="Upload-error" style={{ opacity: showError ? '1' : '0' }} onTransitionEnd={errorTransitionEnd} >You can only upload ONE JPG or PNG file at a time</p>
    </div>
  );
}

export default Upload;