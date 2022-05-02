import style from './tour.module.scss';
import tour1 from '../png/tottori.jpg';
import tour2 from '../png/arashiyama.jpg';
const Tour = () => {
  return (
    <div className={style.tour}>
      <div className={style.wrapper}>
        <div className={style.tours_wrap}>
          <div className={style.tour_pic}>
            <img src={tour1} alt='Prefecture in Focus: Tottori' />
          </div>
          <div className={style.tour_info}>
            <div className={style.tour_title}>Prefecture in Focus: Tottori</div>
            <div className={style.tour_desc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door.
            </div>
            <a href='#!' className={style.tour_more}>
              VIEW PREFECTURE
            </a>
          </div>
        </div>
        <div className={style.tours_wrap}>
          <div className={style.tour_info}>
            <div className={style.tour_title}>
              Featured Neighborhood: Kyoto’s Arashiyama
            </div>
            <div className={style.tour_desc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,
            </div>
            <a href='#!' className={style.tour_more}>
              VIEW NEIGHBORHOOD
            </a>
          </div>
          <div className={style.tour_pic}>
            <img src={tour2} alt='Prefecture in Focus: Tottori' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
