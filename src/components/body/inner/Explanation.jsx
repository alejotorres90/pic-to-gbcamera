import './Explanation.css';

function Explanation() {
    return (
        <div className="Explanation-container">
            <div className="Explanation-text">
                <div className="Explanation-does">
                    <h3>What does pic to <b>GAME BOY</b> camera do?</h3>
                    <p><i>Pic to <b>GAME BOY</b> camera</i> takes a jpg or png image and applies filters to make it look like a picture taken with the accessory for the 90's handheld console.<br />You can adjust contrast and gamma levels and also choose from a wide range of color palettes to customize your pic.</p>
                </div>
            </div>
            <div className="Explanation-looks">
                <div className="Explanation-looks-title">
                    <div><hr style={{ border: '2px solid rgb(140, 72, 113)', backgroundColor: 'rgb(140, 72, 113)', marginBottom: '0' }} /><hr style={{ border: '2px solid rgb(70, 60, 123)', backgroundColor: 'rgb(70, 60, 123)' }} /></div>
                    <h3>How does it look?</h3>
                    <div><hr style={{ border: '2px solid rgb(140, 72, 113)', backgroundColor: 'rgb(140, 72, 113)', marginBottom: '0' }} /><hr style={{ border: '2px solid rgb(70, 60, 123)', backgroundColor: 'rgb(70, 60, 123)' }} /></div>
                </div>
                <div className="Explanation-looks-inner">
                    <img src={import.meta.env.BASE_URL + "/imgs/example.png"} alt="original pic" />
                    <img id="Explanation-looks-arrow" src={import.meta.env.BASE_URL + "/imgs/arrow.svg"} alt="" />
                    <img src={import.meta.env.BASE_URL + "/imgs/example2.png"} alt="filtered pic" />
                </div>
            </div>
        </div>
    );
}

export default Explanation;