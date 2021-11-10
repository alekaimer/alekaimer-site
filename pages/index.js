import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Ale Kaimer Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="https://github.com/alekaimer.png"/>
      </Head>
      <div className='homeWrapper'>

        <div className='ilustration'>
          <img src='./images/leaf.jpeg' />
        </div>

        <div className='infos'>
  
          <div className='avatar'>
            <img src='https://github.com/alekaimer.png' />
          </div>

          <h1 className='mainTitle'>Alexandre Kaimer</h1>

          <div className='description'>
            <p>
              Oi, tudo bem? <br />
              Pode me chamar de Alê.🙂
            </p>
            <p>
              Sou desenvolvedor front-end com foco em plataformas de e-commerce. Também atuo como músico e produtor musical sempre que posso. ♬♪.
            </p>
            <p>
              Acredito que em qualquer atuação sempre buscamos ir além da técnica. <br />
Aprecio o lado artístico de ambas as áreas e isso sempre me incentiva a aprender, buscando a cada passo mais aprendizado, conhecimento e suas diversas aplicações.
            </p>
            <p>
              Seja bem-vinde!
            </p>
          </div>

          <div className='socialLinks'>
            <ul>
              <li>
                <a href='https://www.linkedin.com/in/alekaimer/' target='_blank'>LinkedIn</a>
              </li>
              <li>
                <a href='https://www.instagram.com/alekaimer/' target='_blank'>Instagram</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home