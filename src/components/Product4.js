import React from 'react'
import './specs.css'
import { useTranslation } from 'react-i18next'
import image from './images/machines/Machine 4.png'

const Product4 = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div className='product'>
        <div className='container'>
            <label className='longMachine'>
                <img src={image} alt='m4' />

            </label>
            <div className='specs'>
                <h2>{t('Automatic Grater Pieces')}</h2>
                <p>{t('Automatic Grater Machine is used for shredding pieces of Mozzarella, Romi, and Cheddar cheese.')}</p>
                <p>{t('The machine is entirely made of stainless steel 304, compilant with food safety specifications.')}</p>
                <h5>{t('The machine is available in various sizes, including:')}</h5>
                <ul style={{ listStyleType: 'disc' }}>
                    <li>{t('Large size')}
                        <label className='side-p'>
                          <p>{t('(Production capacity 3 tons per hour)')}</p>
                          <p>{t('(Block 40 x 60)')}</p>
                        </label>
                    </li>
                    <li>{t('Small size')}
                        <label className='side-p'>
                          <p>{t('(Production capacity 2 tons per hour)')}</p>
                          <p>{t('(Block 36 x 52)')}</p>
                        </label>
                    </li>
                </ul>
                <p>{t('The machine operates using air.')}</p>
            </div>
        </div>
    </div>
  )
}

export default Product4


