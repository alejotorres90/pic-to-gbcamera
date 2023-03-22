import './Share.css';

function Share() {
  return (
    <div className="Share-container">
      <h3>Like this app? Share it!</h3>
      <div className="Share-buttons">
          <a href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.href} rel="noreferrer" target="_blank" ><img src={import.meta.env.BASE_URL + "/imgs/fb.svg"} alt="facebook" /></a>
          <a href={"https://twitter.com/intent/tweet?url=" + window.location.href} rel="noreferrer" target="_blank" ><img src={import.meta.env.BASE_URL + "/imgs/tw.svg"} alt="twitter" /></a>
      </div>
    </div>
  );
}

export default Share;