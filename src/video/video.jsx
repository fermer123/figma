import style from './video.module.scss';

const Video = () => {
  return (
    <div className={style.video}>
      <div className={style.video_wrapper}>
        <div className={style.video_item}></div>
        <iframe
          className={style.video_element}
          src='https://www.youtube.com/embed/URDXZSJZ2ME'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
