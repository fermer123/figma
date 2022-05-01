import style from './places.module.scss';
import mount from '../png/mount.jpg';
import nigata from '../png/nigata.jpg';
import kyoto from '../png/kyoto.jpg';
import tokyo from '../png/tokyo.jpg';
import sapporo from '../png/sapporo.jpg';

const Places = () => {
  return (
    <div className={style.places}>
      <div className={style.wrapper}>
        <div className={style.caption}>
          <div className={style.title}>Get inspired for your next trip</div>
          <a href='#!' className={style.view_all}>
            VIEW ALL
          </a>
        </div>
        <div className={style.places_cards}>
          <div className={style.place_card_size_lg}>
            <img src={mount} alt='mount' className={style.card_pic} />
            <div className={style.place_card_title}>Mount Fuji</div>
            <a href='#!'></a>
          </div>
          <div className={style.place_card_size_lg}>
            <img src={kyoto} alt='kyoto' className={style.card_pic} />
            <div className={style.place_card_title}>Kyoto</div>
          </div>
          <div className={style.place_card_size_sm}>
            <img src={tokyo} alt='tokyo' className={style.card_pic} />
            <div className={style.place_card_title}>tokyo</div>
          </div>
          <div className={style.place_card_size_sm}>
            <img src={nigata} alt='nigata' className={style.card_pic} />
            <div className={style.place_card_title}>nigata</div>
          </div>
          <div className={style.place_card_size_sm}>
            <img src={sapporo} alt='sapporo' className={style.card_pic} />
            <div className={style.place_card_title}>sapporo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
