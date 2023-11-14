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
      console.log('lancement du compteur')
    }, 1500)
  })
  return (
    <div className='app-compteur'>
      <button onClick={incr} className='bg-green-600 p-4'>+</button>
      <p className={compteur < 0 && 'error screen-compteur'}><b>{compteur}</b> </p>
      <button onClick={decr} className=''>-</button>
      <button onClick={twice} className='bg-slate-600 p-4'>x2</button>
      <button onClick={reset} className='bg-purple-600 p-4'>reset</button>
    </div>
  )
}
