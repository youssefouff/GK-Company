import React from 'react'
import { Link } from 'react-router-dom'
import './Machines.css'
import './Product1.js'
import image1 from './images/machines/Machine 1.png';
import image2 from './images/machines/Machine 2.png';
import image3 from './images/machines/Machine 3.png';
import image4 from './images/machines/Machine 4.png';
import image5 from './images/machines/Machine 5.png';
import image6 from './images/machines/Machine 6.png';
import image7 from './images/machines/Machine 7.png';
import image8 from './images/machines/Machine 8.png';
import image9 from './images/machines/Machine 9.png';
import { useTranslation } from 'react-i18next'


const Machines = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div id='machines' className='machines'>
        <div className='content'>
            <h2>{t('Machines')}</h2>
            <div className='imageList'>
              <figure>
                <Link to="/product1"><img src={image1} alt="Image 1" /></Link>
                <figcaption>
                <p>{t('Manual Cocker Machine')}</p>
                </figcaption>
              </figure>
              <figure>
                <Link to="/product2"><img src={image2} alt="Image 2" /></Link>
                <figcaption>
                <p>{t('Air Cocker Machine')}</p>
                </figcaption>
              </figure>
              <figure className='longImg'>
                <Link to="/product3"><img src={image3} alt="Image 3" /></Link>
                <figcaption>
                <p>{t('Automatic Grater Blocks')}</p>
                </figcaption>
              </figure>
              <figure className='longImg'>
                <Link to="/product4"><img src={image4} alt="Image 4" /></Link>
                <figcaption>
                <p>{t('Automatic Grater Pieces')}</p>
                </figcaption>
              </figure>
              <figure>
                <Link to="/product5"><img src={image5} alt="Image 5" /></Link>
                <figcaption>
                <p>{t('Semi-Automatic Grater')}</p>
                </figcaption>
              </figure>
              <figure>
                <Link to="/product6"><img src={image6} alt="Image 6" /></Link>
                <figcaption>
                <p>{t('Manual Grater Machine')}</p>
                </figcaption>
              </figure>
              <figure>
                <Link to="/product7"><img src={image7} alt="Image 7" /></Link>
                <figcaption>
                <p>{t('Butter Press & Packaging Machine')}</p>
                </figcaption>
              </figure>
              <figure>
                <Link to="/product8"><img src={image8} alt="Image 8" /></Link>
                <figcaption>
                <p>{t('Sticks Shaping Machine')}</p>
                </figcaption>
              </figure>
              <figure>
                <Link to="/product9"><img src={image9} alt="Image 9" /></Link>
                <figcaption>
                <p>{t('Block Shaping Machine')}</p>
                </figcaption>
              </figure>
            </div>
        </div>
    </div>
  )
}

export default Machines