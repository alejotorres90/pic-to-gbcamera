import { useState, useEffect } from 'react';
import './Edit.css';
import EditUploaded from './inner/EditUploaded'
import EditProperties from './inner/EditProperties'
import EditOutput from './inner/EditOutput'
import contrastLevels from '../../static/contrastLevels.json'
import gammaLevels from '../../static/gammaLevels.json'
import palettes from '../../static/palettes.json'

function Edit(props) {

  const [uploadedPicURL, setUploadedPicURL] = useState()
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)
  const [contrast, setContrast] = useState(4)
  const [gamma, setGamma] = useState(4)
  const [palette, setPalette] = useState(0)
  const [outputImg, setOutputImg] = useState()

  const changeContrast = (value) => {
    setContrast(prevContrast => prevContrast + value >= 0 && prevContrast + value < contrastLevels.length ? prevContrast + value : prevContrast)
  }

  const changeGamma = (value) => {
    setGamma(prevGamma => prevGamma + value >= 0 && prevGamma + value < gammaLevels.length ? prevGamma + value : prevGamma)
  }

  const changePalette = (value) => {
    setPalette(prevPalette => prevPalette + value >= 0 && prevPalette + value < palettes.length ? prevPalette + value : prevPalette)
  }

  useEffect(() => {
    const reader = new FileReader()
    const image = new Image()
    reader.onload = () => {
      setUploadedPicURL(reader.result)
      image.src = reader.result
      image.onload = () => {
        if (image.width < 296 && image.height < 296) {
          setImgHeight(image.height)
          setImgWidth(image.width)
        } else {
          if (image.width > image.height) {
            setImgWidth(296)
            setImgHeight(Math.round(296 / image.width * image.height))
          } else {
            setImgHeight(296)
            setImgWidth(Math.round(296 / image.height * image.width))
          }
        }
        setOutputImg(image)
      }
    }
    reader.readAsDataURL(props.file)
  }, [props.file])

  return (
    <div className="Edit-container">

      <div className="Edit-content">

        <div className="Edit-images">
          <EditUploaded picURL={uploadedPicURL} buttonAction={props.changePicAction} imageWidth={imgWidth} />

          <EditOutput pic={outputImg} fileName={props.file.name} imageWidth={imgWidth} imageHeight={imgHeight} contrast={contrastLevels[contrast]} gamma={gammaLevels[gamma]} palette={palettes[palette]} />
        </div>

        <EditProperties changeContrast={changeContrast} changeGamma={changeGamma} changePalette={changePalette} contrast={contrast} contrastAmount={contrastLevels.length} gamma={gamma} gammaAmount={gammaLevels.length} palette={palette} palettesAmount={palettes.length} />

      </div>
    </div>
  );
}

export default Edit;