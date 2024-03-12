import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 9.png'

const Product9 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <img src={image} alt='m9' />
            <div className='specs'>
                <h2>{t('Block Shaping Machine')}</h2>
                <p>{t('Block Shaping Machine is used for shaping Mozzarella cheese blocks.')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <p>{t('The machine is capable of controlling the weight of the blocks.')}</p>
                <p>{t('Production capacity is 500 kg every 20 minutes.')}</p>
                <p>{t('The machine operates using air.')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product9
