// import { Link } from 'react-router-dom';
import '../../../styles/home.scss';
import audio from '../../../assets/images/audio.png';

const Home = () => {
  const videoPlayPause = () => {};

  return (
    <div>
      <div className="page home">
        <div className="video" key={0}>
          <video
            src="https://www.w3schools.com/tags/movie.mp4"
            autoPlay
            onClick={videoPlayPause}
            loop
            muted
          />
          <div className="controls">ui</div>
          <div className="bottom">
            <div className="info">
              <div className="username">@Username</div>
              <span>
                video description <span className="hashtag">#lol</span>{' '}
                <span className="hashtag">#test</span>
              </span>
            </div>
            <div className="audio">
              <img src={audio} alt="audio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
