import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 8.png'

const Product8 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <img src={image} alt='m7' />
            <div className='specs'>
                <h2>{t('Sticks Shaping Machine')}</h2>
                <p>{t('Sticks Shaping Machine is used for shaping Mozzarella cheese sticks.')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <p>{t('The machine is capable of controlling the length of the cheese sticks.')}</p>
                <p>{t('Production capacity is 500 kg every half hour.')}</p>
                <p>{t('The machine operates using air.')}</p>
                <p>{t('American Teflon non-stick coating.')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product8




