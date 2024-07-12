import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <h1>Bienvenidos a Mi Sitio Web</h1>
      <section id="mi-historia">
        <h2>Mi Historia</h2>
        <p>
          Aquí puedes escribir sobre tu historia personal, cómo llegaste a donde estás hoy, tus antecedentes, etc.
        </p>
      </section>
      
      <section id="experiencia">
        <h2>Experiencia</h2>
        <p>
          Aquí puedes detallar tu experiencia profesional, los trabajos que has tenido, proyectos en los que has trabajado, etc.
        </p>
      </section>
      
      <section id="logros-academicos">
        <h2>Logros Académicos</h2>
        <p>
          Aquí puedes enumerar tus logros académicos, títulos obtenidos, cursos completados, etc.
        </p>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Mi Sitio Web</title>
