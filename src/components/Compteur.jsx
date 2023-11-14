import React, {useEffect, useState} from 'react'

export default function Compteur() {
  
  let [compteur,setCompteur] = useState(0)
  const incr = () => {
    setCompteur(compteur +1);
  }
  const decr = () => {
    setCompteur(compteur -1);
  }
  const twice = () => {
    setCompteur(compteur *2);
  }
  const reset = () => {
    setCompteur(0);
  }
  // console.log(props);

  /*ici c’est un hook qui est utilisé par exemple pour le chargement des données côté backend */
  useEffect(() => {
    setTimeout(() => {
      console.log('je suis rendu')
    }, 1500)
  })
  return (
    <div className='app-compteur'>
      <button onClick={incr} className='btn'>+</button>
      <p className={compteur < 0 && 'error screen-compteur'}><b>{compteur}</b> </p>
      <button onClick={decr} className='btn'>-</button>
      <button onClick={twice} className='btn'>x2</button>
      <button onClick={reset} className='btn'>reset</button>
    </div>
  )
}
