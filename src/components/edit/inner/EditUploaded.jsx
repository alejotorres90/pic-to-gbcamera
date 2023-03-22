import './EditUploaded.css';

function EditUploaded(props) {

    return (
        <div className="Edit-uploaded">
            <img className="Edit-uploaded-pic" src={props.picURL} alt="uploaded pic" />
            <button className="Edit-uploaded-button" onClick={props.buttonAction} style={{ width: props.imageWidth + 6}}>CHANGE PIC</button>
        </div>
    );
}

export default EditUploaded;