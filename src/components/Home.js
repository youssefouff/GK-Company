import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import './Home.css'



const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className='home'>
        <div className = 'content'>
            <p>{t('Ghoniem El-Kamhawi')}</p> 
            <p>{t('for manfucturing dairy production lines and equipment')}</p>
            <button  className='button'>
             <Link to="./#machines" className='Link'> {t('Explore More')}</Link>
            </button>
        </div>
    </div>
  )
}

export default Home