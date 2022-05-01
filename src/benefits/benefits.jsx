import style from './benefits.module.scss';
import house from '../png/house.svg';
import person from '../png/person.svg';
import busines from '../png/busines.svg';

const Benefits = () => {
  return (
    <div className={style.benefits}>
      <div className={style.wrap}>
        <div className={style.title}>Benefits of Odigo</div>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.card_pic}>
              <img src={house} alt='' className={style.card_img} />
            </div>
            <div className={style.card_title}>Welcome to Odigo!</div>
            <div className={style.card_desc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </div>
            <a className={style.card_learn_more} href=''>
              LEARN MORE
            </a>
          </div>
          <div className={style.card}>
            <div className={style.card_pic}>
              <img src={person} alt='' className={style.card_img} />
            </div>
            <div className={style.card_title}>Your Personal Japan Guide</div>
            <div className={style.card_desc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </div>
            <a className={style.card_learn_more} href=''>
              LEARN MORE
            </a>
          </div>
          <div className={style.card}>
            <div className={style.card_pic}>
              <img src={busines} alt='' className={style.card_img} />
            </div>
            <div className={style.card_title}>Promoting Local Businesses</div>
            <div className={style.card_desc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </div>
            <a className={style.card_learn_more} href='#'>
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
