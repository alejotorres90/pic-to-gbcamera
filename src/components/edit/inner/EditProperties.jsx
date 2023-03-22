import './EditProperties.css';

function EditProperties(props) {

    return (
        <div id="Edit-properties">
            <h3>EDIT YOUR PICTURE!</h3>
            <div id="Edit-properties-properties">
                <div className="Edit-property">
                    <img src={import.meta.env.BASE_URL + "/imgs/contrast.svg"} alt="contrast" />
                    <div className="Edit-arrows">
                        <div className="Edit-arrows-buttons">
                            <button className={props.contrast > 0 ? "Edit-arrow" : "Edit-arrow Edit-arrow-disabled"} style={{ marginRight: 'auto' }} onClick={() => props.changeContrast(-1)}></button>
                            <button className={props.contrast < props.contrastAmount - 1 ? "Edit-arrow" : "Edit-arrow Edit-arrow-disabled"} onClick={() => props.changeContrast(1)}></button>
                        </div>
                        <div className="Edit-arrows-tags">
                            <p style={{ marginRight: 'auto' }}>-</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className="Edit-property">
                    <img src={import.meta.env.BASE_URL + "/imgs/gamma.svg"} alt="gamma" />
                    <div className="Edit-arrows">
                        <div className="Edit-arrows-buttons">
                            <button className={props.gamma > 0 ? "Edit-arrow" : "Edit-arrow Edit-arrow-disabled"} style={{ marginRight: 'auto' }} onClick={() => props.changeGamma(-1)}></button>
                            <button className={props.gamma < props.gammaAmount - 1 ? "Edit-arrow" : "Edit-arrow Edit-arrow-disabled"} onClick={() => props.changeGamma(1)}></button>
                        </div>
                        <div className="Edit-arrows-tags">
                            <p style={{ marginRight: 'auto' }}>-</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className="Edit-property">
                    <img src={import.meta.env.BASE_URL + "/imgs/palette.svg"} alt="palette" />
                    <div className="Edit-arrows">
                        <div className="Edit-arrows-buttons">
                            <button className={props.palette > 0 ? "Edit-arrow" : "Edit-arrow Edit-arrow-disabled"} style={{ marginRight: 'auto' }} onClick={() => props.changePalette(-1)}></button>
                            <button className={props.palette < props.palettesAmount - 1 ? "Edit-arrow" : "Edit-arrow Edit-arrow-disabled"} onClick={() => props.changePalette(1)}></button>
                        </div>
                        <div className="Edit-arrows-tags">
                            <p style={{ marginRight: 'auto' }}>-</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProperties;