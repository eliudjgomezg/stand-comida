import Image from 'next/image'

import bannerDesktop from 'assets/images/banner-desktop.jpg'
import bannerMobile from 'assets/images/banner-mobile.jpg'
import calzonesRotos from 'assets/images/calzones-rotos.jpg'
import game from 'assets/images/game.jpg'
import pastelitos from 'assets/images/pastelitos.jpg'

const menuItems = [
  {
    name: 'Empanadas de queso',
    image: pastelitos,
    description: 'Deliciosa masa crujiente rellena con una mezcla suave y cremosa de queso gauda para un bocado lleno de sabor.',
  },
  {
    name: 'Calzones rotos',
    image: calzonesRotos,
    description:
      'Masa frita crujiente y dorada, espolvoreada con azúcar flor. Un clásico de la repostería chilena, perfecto para acompañar en los días fríos.',
  },
  {
    name: 'Juego sorpresa',
    image: game,
    description: '¡Participa en nuestro juego "Derriba los vasos" y gana un emocionante premio sorpresa!',
  },
]

const Restaurant = () => {
  return (
    <div className="text-white bg-[#DA281B]">
      <div className="mx-auto max-w-screen-lg">
        <header className="rounded-b-3xl bg-[#0037A1] py-4 border-b-2 border-white">
          <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">Fonda 2024</h1>
        </header>

        <main className="container mx-auto px-4 py-8">
          <h4 className="text-center">¡Bienvenid@s a la Fonda 2024 del Colegio Chileno Árabe!</h4>
          <p className="mt-4 text-center">
            Te invitamos a visitar nuestro stand <span className="text-[#0037A1] underline font-semibold">{'"PERDONEN NUESTRAS NOTAS"'}</span> y
            disfrutar de los deliciosos cócteles que hemos preparado especialmente para TI. <br />
          </p>
          <h5 className="text-center mt-4 text-[#0037A1] font-bold">¡No te lo pierdas!</h5>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {menuItems.map((item, index) => (
              <div key={index} className="overflow-hidden border-2 border-[#0037A1] rounded-3xl bg-white shadow-lg">
                <Image src={item.image} alt={item.name} width={400} height={200} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h2 className="mb-2 text-xl text-black font-semibold text-center text-[#0037A1]">{item.name}</h2>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer>
          <a href="https://devix-academy-front.vercel.app" target="_blank">
            <Image className="md:hidden block" src={bannerMobile} alt="banner" />
            <Image className="md:block hidden" src={bannerDesktop} alt="banner" />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Restaurant
