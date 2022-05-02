import style from './top.module.scss';
import top1 from '../png/top1.jpg';
import top2 from '../png/top2.jpg';
import top3 from '../png/top3.jpg';
import top4 from '../png/top4.jpg';
import top5 from '../png/top5.jpg';
import top6 from '../png/top6.jpg';

const Top = () => {
  return (
    <div className={style.top}>
      <div className={style.top_title}>Today top places to visit</div>
      <div className={style.top_cards}>
        <div>
          <div className={style.top_card_pic}>
            <img src={top1} className={style.top_card_img} />
            <div className={style.top_card_stats}>
              <div className={style.top_card_title}>NAGOYA</div>
              <div className={style.top_card_likes}>
                <span className={style.top_card_likes_value}>221</span>
              </div>
              <div className={style.top_card_comments}>
                <span className={style.top_card_comments_value}>50</span>
              </div>
            </div>
          </div>
          <div className={style.top_card_desc}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this.
          </div>
          <a href='#!' className={style.top_card_btn}>
            SEE MORE
          </a>
        </div>
        <div>
          <div className={style.top_card_pic}>
            <img src={top2} className={style.top_card_img} />
            <div className={style.top_card_stats}>
              <div className={style.top_card_title}>NIIGATA</div>
              <div className={style.top_card_likes}>
                <span className={style.top_card_likes_value}>221</span>
              </div>
              <div className={style.top_card_comments}>
                <span className={style.top_card_comments_value}>50</span>
              </div>
            </div>
          </div>
          <div className={style.top_card_desc}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this.
          </div>
          <a href='#!' className={style.top_card_btn}>
            SEE MORE
          </a>
        </div>
        <div>
          <div className={style.top_card_pic}>
            <img src={top3} className={style.top_card_img} />
            <div className={style.top_card_stats}>
              <div className={style.top_card_title}>OSAKA</div>
              <div className={style.top_card_likes}>
                <span className={style.top_card_likes_value}>221</span>
              </div>
              <div className={style.top_card_comments}>
                <span className={style.top_card_comments_value}>50</span>
              </div>
            </div>
          </div>
          <div className={style.top_card_desc}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this.
          </div>
          <a href='#!' className={style.top_card_btn}>
            SEE MORE
          </a>
        </div>
        <div>
          <div className={style.top_card_pic}>
            <img src={top4} className={style.top_card_img} />
            <div className={style.top_card_stats}>
              <div className={style.top_card_title}>SAITAMA</div>
              <div className={style.top_card_likes}>
                <span className={style.top_card_likes_value}>221</span>
              </div>
              <div className={style.top_card_comments}>
                <span className={style.top_card_comments_value}>50</span>
              </div>
            </div>
          </div>
          <div className={style.top_card_desc}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this.
          </div>
          <a href='#!' className={style.top_card_btn}>
            SEE MORE
          </a>
        </div>
        <div>
          <div className={style.top_card_pic}>
            <img src={top5} className={style.top_card_img} />
            <div className={style.top_card_stats}>
              <div className={style.top_card_title}>UENO</div>
              <div className={style.top_card_likes}>
                <span className={style.top_card_likes_value}>221</span>
              </div>
              <div className={style.top_card_comments}>
                <span className={style.top_card_comments_value}>50</span>
              </div>
            </div>
          </div>
          <div className={style.top_card_desc}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this.
          </div>
          <a href='#!' className={style.top_card_btn}>
            SEE MORE
          </a>
        </div>
        <div>
          <div className={style.top_card_pic}>
            <img src={top6} className={style.top_card_img} />
            <div className={style.top_card_stats}>
              <div className={style.top_card_title}>SHIBUYA</div>
              <div className={style.top_card_likes}>
                <span className={style.top_card_likes_value}>221</span>
              </div>
              <div className={style.top_card_comments}>
                <span className={style.top_card_comments_value}>50</span>
              </div>
            </div>
          </div>
          <div className={style.top_card_desc}>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this.
          </div>
          <a href='#!' className={style.top_card_btn}>
            SEE MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
