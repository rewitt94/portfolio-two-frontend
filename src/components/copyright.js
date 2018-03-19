import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js';

export class Copyright extends React.Component {
  render() {
    const night = this.props.nightMode;
    return (
      <div>
        <div className="copyright_box">
          <div className="copyright_page_header">
            <h1>
              <span>Copyright</span>
            </h1>
            <h2>The images used are not my own, but are freely available on the internet. They are referenced here.</h2>
            <hr />
          </div>
          <h2>
            <span>Home Page Images</span>
          </h2>
          <div className="image_grid">
            <div>
              <div>
                <img src="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6407ad0804025755204bf7807272761a&auto=format&fit=crop&w=1500&q=80" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1507851191112-1bb853d191fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea22a92bdd05ed12542fef6af1a02fd1&auto=format&fit=crop&w=1650&q=80" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=954560871844da528c60343dc344ccbf&auto=format&fit=crop&w=1650&q=80" />
              </div>
            </div>
            <div>
              <div>
                <img src="https://images.unsplash.com/photo-1516191726963-61dae894c237?ixlib=rb-0.3.5&s=66e8aff4825a17de794beb4223f7c39f&auto=format&fit=crop&w=1650&q=80" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1456139456319-352002cddddd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=184e54e50d22c67de464e7c04856503a&auto=format&fit=crop&w=1651&q=80" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d39fe8df8ff9407562e2f89aec3c1318&auto=format&fit=crop&w=1650&q=80" />
              </div>
            </div>
          </div>
          <div className="photo_comment">
            <p>
              These Images are taken for <a href="https://unsplash.com/">Unsplash</a>. The website has an amazing library of royalty free photography.
            </p>
          </div>
          <h2>
            <span>Website Symbols</span>
          </h2>
          <div className="copyright_row">
            <div className="copyright_img">
              <img src="http://www.clker.com/cliparts/E/C/O/z/A/T/swirl-hi.png" style={night ? { filter: 'invert(100)' } : {}} />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://www.clker.com">www.clker.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_img">
              <img src="https://maxcdn.icons8.com/Share/icon/Arrows//right_down21600.png" style={night ? { filter: 'invert(100)' } : {}} />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://www.clker.com">www.clker.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_img">
              <img src="http://laoblogger.com/images/first-quarter-moon-clipart-1.jpg" style={night ? { filter: 'invert(100)' } : {}} />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://laoblogger.com">laoblogger.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_img">
              <img src="http://images.clipartpanda.com/home-clip-art-KTnqkGjTq.png" style={night ? { filter: 'invert(100)' } : {}} />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://www.clipartpanda.com/">www.clipartpanda.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" style={night ? { filter: 'invert(100)' } : {}} />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="https://www.wikimedia.org/">www.wikimedia.org</a>
              </p>
            </div>
          </div>
          <h2>
            <span>Submarine Game Clipart</span>
          </h2>
          <div className="copyright_row">
            <div className="copyright_sub_img">
              <img src="https://thecliparts.com/wp-content/uploads/2016/07/submarine-clipart-2.png" />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart (not for commercial use) taken from <a href="https://thecliparts.com/">thecliparts.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_sub_img">
              <img src="http://www.clker.com/cliparts/c/e/7/c/1230571109126653456rg1024_cartoon_sea_mine.svg.med.png" />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://www.clker.com">www.clker.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_sub_img">
              <img src="http://clipartix.com/wp-content/uploads/2016/06/Explosion-free-to-use-clip-art.png" />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://clipartix.com/">clipartix.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row">
            <div className="copyright_sub_img">
              <img src="http://images.clipartpanda.com/missile-clipart-missile.png" />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://www.clipartpanda.com/">www.clipartpanda.com</a>
              </p>
            </div>
          </div>
          <div className="copyright_row" style={{ marginTop: '80px' }}>
            <div className="copyright_sub_img">
              <img src="http://images.clipartpanda.com/explosion-clipart-explosion6.png" />
            </div>
            <div className="copyright_description">
              <p>
                This is a freely available clipart taken from <a href="http://www.clipartpanda.com/">www.clipartpanda.com</a>
              </p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    );
  }
}
