import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 7.png'

const Product7 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <img src={image} alt='m7' />
            <div className='specs'>
                <h2>{t('Butter Press & Packaging Machine')}</h2>
                <p>{t('Butter pressing and packaging machine (carton size customizable).')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <p>{t('The machine operates using air.')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product7


