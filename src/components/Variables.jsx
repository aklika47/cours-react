import React from "react";

export default function Variables(props) {
  return (
    <div className="App">
      <h2>voici un autre composant dans un autre fichier</h2>
      <p>
        bonjour {props.nom} tu as {props.age + 15 * 2}{" "}
      </p>

      {/* /condition en react */}
      {props.age > 50 ? (
        <h3>tu as plus de 50</h3>
      ) : (
        <h3>tu es égale ou en dessous</h3>
      )}
    </div>
  );
}
