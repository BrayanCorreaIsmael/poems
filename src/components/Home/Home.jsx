import React from 'react'
import './Home.css'
import PoemList from './PoemList'; 


function Home() {
  const products = [
    {
      nombre: 'Fredy Jiminez ',
      id: 0,
      color: 'Marron',
      poema: 'Ella tiene una sonrisa tan dulce, que ya no necesita ponerle azucar al cafe de sus ojos',
  },
  {
      nombre: 'Anonimo ',
      id: 1,
      color: 'Azul',
      poema: 'El tiempo es relativo, tal vez nuestro amor duro unos dias en nuestra vida o talvez nos amamos toda una vida, en solo unos dias ',
  },
  {
      nombre: 'Anonimo ',
      id: 2,
      color: 'Turquesa',
      poema: 'Eres la única persona que tiene la dicha de saber lo que se siente mi amor; de sentir el fuego que emane este roto corazón. De conocer el latir en mi pecho a la perfección. Eres la única persona en saber lo que la luna, el mar y el atardecer provocan en mi esternón. ¿Por qué la vida es asi de fugaz? Si se supone que hicimos todo bien, ¿Cómo es posible que la luna no brille más, que las estrellas comiencen a caer al azar y que de pronto, en tu mente mi cuerpo ya no esté más? Curiosa la forma en que la vida dijo no, que por más que haya luchado por este amor, el cielo me miro y de pastel jamás se pintó. Eras mi vida y ahora, mi vida, ¿Qué haré con tanto pesar en el pecho? '
  },
  {
      nombre: 'Mario Benedetti  ',
      id: 3,
      color: 'Anaranjado',
      poema:'Mi estrategia es que un día cualquiera no sé cómo ni sé con que pretexto por fin me necesites.'
  },
  {
      nombre: 'Charles Bukowski ',
      id: 4,
      color: 'Azul',
      poema: 'La belleza es relativa. Muchos creen que tienen a la mujer más bonita cuando todos se vuelven a mirarla. Yo creo que tienes a la más hermosa cuando ya no quieres mirar a ninguna otra. '
  },
  {
      nombre: 'Charles Bukowski ',
      id: 5,
      color: 'Gris',
      poema: 'Que te rompan el corazón está bien, al final a todos nos gusta montar rompecabezas... pero que se lleven las piezas, eso sí es jodido.'
  },
  {
      nombre: 'Anonimo',
      id: 6,
      color: 'Azul ',
      poema: 'Yo la miraba y puedo jurar que no me quedaban ganas de mirar a nadie más. En ese preciso momento comprendí que los ojos; siempre, siempre le pertenecen a la persona que los hace brillar.'
  },
  {
      nombre: 'Desconocido',
      id: 7,
      color: 'Marron',
      poema: 'Me perdí en su mirada, es que el color de sus ojos me encantaban; no eran ni azules, ni verdes. Eran color café, café que quita el sueño, café que produce desvelo.'
  },
  {
      nombre: 'Juan Carlos Onetti ',
      id: 8,
      color: 'Azul',
      poema:'La maniática tarea de construir eternidades con elementos hechos de fugacidad, tránsitos y olvido. '
  },
  {
      nombre: 'Julio Cortázar ',
      id: 9,
      color: 'Anaranjado',
      poema:'Porque, sin buscarte te ando encontrando por todos lados, principalmente cuando cierro los ojos. '
  },
  {
      nombre: 'Mario Benedetti',
      id: 10,
      color: 'Rojo',
      poema:'Te quiero como para llevarte a mis lugares favoritos y contarte que es ahí donde me siento a buscarte en la niebla de miradas que no son tuyas, pero aún así te busco.'
  },
  {
      nombre: 'Frida Kahlo',
      id: 11,
      color: 'Azul',
      poema:'Porque la prefieres a ella, si ni el color de tus ojos sabe, cuando yo he contado cada una de tus pestañas. '
  },
  {
      nombre: 'Mario Benedetti ',
      id: 12,
      color: 'Verde',
      poema:'Si no tienes donde quedarte, tengo un espacio disponible en la parte izquierda de mi pecho... Disculpa el desorden, la última persona se fue sin limpiar. '
  },
  {
      nombre: 'Mario Benedetti ',
      id: 13,
      color: 'Verde',
      poema:'Ella no es mía tampoco soy suyo. Lo nuestro es temporal, somos un préstamo voluntario de momentos inolvidables que quizá podría durar toda la vida. '
  }


    // ... tus datos de poemas
  ];
  return (
    <div className="App">
      <PoemList poems={products} />
      
  </div>
    
    
    

  )
}

export default Home