import React from 'react'
import './Contact.css'
import { useTranslation } from 'react-i18next'


const Contact = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div id='contact' className='contact'>
        <div className='container'>
            <h2>{t('Contact Us')}</h2>
            <div className='info'>
                <h3>{t('Phone')}</h3>
                <p>{t('Eng. Ghoniem El-Kamhawi : 01002933974')}</p>
                <p>{t('Eng. Youssef Ghoniem 01026488132')}</p>
                <p>{t('Eng. Abdullah Ghoniem 01000067202')}</p>
                <h3>{t('Address')}</h3>
                <p>{t('Al Behyra, El maahad eldeeny street, infront of abdullah nadeem school, Damanhour')}</p>
                <p>{t('Al Behyra, New Directorate, Abu abdullah street, Damnhour')}</p>
            </div>
        </div>

    </div>
  )
}

export default Contact