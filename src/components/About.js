import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next'



const About = () => {
  const [t, i18n] = useTranslation("global");
  document.body.dir = i18n.dir();
  return (
    <div id='about' className='about'>
        <div className='container'>
            <div className='col-2'>
                <h2>{t('About Company')}</h2>
                <p>{t('Ghoniem El Kamhawi Company for Manufacturing Dairy Production Lines and Equipment was established in 2000 in Damnhour. The company is specialized in manufacturing Mozzarella cheese machines and its derivatives')}.</p>
                <p>{t('These machines include many different parts and components that aid in the manufacturing processes of Mozzarella cheese, such as mixing machines, shaping machines, shredding machines, and others.')}</p>
                <p>{t('Ghoniem El kamhawi Company is distinguished by several factors that have led to over 20 years of continuous progress in this field.')}</p>
                <p>{t('These factors include industry experience, the technology used, product quality, adherence to health and safety standards, customer service, afetr sales services and cost-effectiveness.')}</p>
            </div>
        </div>
    </div>
  )
}

export default About