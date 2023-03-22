import { useEffect, useRef, useState } from 'react';
import './EditOutput.css';
import filter from './Filter'

function EditOutput(props) {

    const canvasRef = useRef()
    const phantomCanvasRef = useRef()
    const [downloadHREF, setDownloadHREF] = useState('#')

    useEffect(() => {
        if (props.pic) {
            const canvas = canvasRef.current
            const mainctx = canvas.getContext('2d')
            const phantomCanvas = phantomCanvasRef.current
            const phantomctx = phantomCanvas.getContext('2d')
            const imgWidth = props.imageWidth
            const imgHeight = props.imageHeight

            //Cleaning canvas in case there's something already there
            mainctx.clearRect(0, 0, canvas.width, canvas.height);

            //Scale down to get the effect of 128px x 128px (part 1)
            const resizeFactor = imgWidth >= 128 || imgHeight >= 128 ? (imgWidth > imgHeight ? imgWidth / 128 : imgHeight / 128) : 1
            mainctx.drawImage(props.pic, 0, 0, imgWidth / resizeFactor, imgHeight / resizeFactor)
            mainctx.msImageSmoothingEnabled = false;
            mainctx.mozImageSmoothingEnabled = false;
            mainctx.webkitImageSmoothingEnabled = false;
            mainctx.imageSmoothingEnabled = false;

            //Getting array of pixels
            const pixels = mainctx.getImageData(0, 0, imgWidth, imgHeight).data

            //Calling filter function on array of pixels
            const newPixels = filter(pixels, imgWidth, imgHeight, props.contrast, props.gamma, props.palette)

            //Putting the filtered array of pixels into an image and then into the canvas
            const newImageData = new ImageData(newPixels, imgWidth, imgHeight)
            phantomctx.putImageData(newImageData, 0, 0)

            //Scale up to get the effect of 128px x 128px (part 2)
            mainctx.clearRect(0, 0, canvas.width, canvas.height);
            mainctx.drawImage(phantomCanvas, 0, 0, imgWidth, imgHeight, 0, 0, imgWidth * resizeFactor, imgHeight * resizeFactor)

            const canvasToDataURL = canvas.toDataURL('image/png;base64')
            setDownloadHREF(canvasToDataURL)
            
        }
    }, [props.pic, props.imageHeight, props.imageWidth, props.contrast, props.gamma, props.palette])

    return (
        <div className="Edit-output">
            <canvas ref={canvasRef} className="Edit-output-canvas" height={props.imageHeight} width={props.imageWidth}></canvas>
            <a className="Edit-output-button" href={downloadHREF} download={props.fileName.split('.')[0] + " to GB camera.png"} style={{ width: props.imageWidth + 6 }}>DOWNLOAD</a>

            <canvas ref={phantomCanvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
}

export default EditOutput;