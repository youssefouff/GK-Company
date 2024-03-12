import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 2.png'

const Product2 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <img src={image} alt='m2' />
            <div className='specs'>
                <h2>{t('Air Cocker Machine')}</h2>
                <p>{t('Air Cocker Machine is used for processing all types of mozzarella cheese.')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <h5>{t('The machine is available in various sizes, including:')}</h5>
                <ul style={{ listStyleType: 'disc' }}>
                    <li>{t('1 ton')}</li>
                    <li>{t('500 kg')}</li>
                    <li>{t('300 kg')}</li>
                    <li>{t('150 kg')}</li>
                    <li>{t('80 kg (tester)')}</li>
                </ul>
                <p>{t('American Teflon non-stick coating (uopn request).')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product2