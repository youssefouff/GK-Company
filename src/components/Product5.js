import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 5.png'

const Product5 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <img src={image} alt='m5' />
            <div className='specs'>
                <h2>{t('Semi-Automatic Grater')}</h2>
                <p>{t('Semi-Automatic Grater Machine is used for shredding and slicing Mozzarella, Romi, and Cheddar cheese.')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <p>{t('The production capacity of the machine is 1.5 tons per hour.')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product5


