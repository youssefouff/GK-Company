import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 6.png'

const Product6 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <img src={image} alt='m6' />
            <div className='specs'>
                <h2>{t('Manual Grater Machine')}</h2>
                <p>{t('Manual Grater Machine is used for shredding Mozzarella, Romi,and Cheddar cheese.')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <p>{t('Production capacity is 1.5 tons every 8 hours.')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product6

