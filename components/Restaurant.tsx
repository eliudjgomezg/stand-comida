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
    <div className="text-white bg-white bg-menu">
      <div className="mx-auto max-w-screen-lg">
        <header className="rounded-b-3xl bg-blue-transparent py-4 border-b-2 outline-[#DA281B] outline border-white">
          <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl"> Fonda 2024 </h1>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="py-6 px-2 rounded-xl bg-white-transparent shadow-md">
            <h4 className="text-center text-[#0037A1] font-bold">¡Bienvenid@s a la Fonda 2024 del Colegio Chileno Árabe!</h4>
            <p className="mt-4 text-center text-[#0037A1]">
              Te invitamos a visitar nuestro stand <br />{' '}
              <span className="text-[#DA281B] underline font-semibold">{'"PERDONEN NUESTRAS NOTAS"'}</span> <br /> y disfrutar de los deliciosos
              cócteles que hemos preparado especialmente para TI.
            </p>
            <h5 className="text-center mt-4 text-[#0037A1] font-bold">¡No te lo pierdas!</h5>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {menuItems.map((item, index) => (
              <div key={index} className="overflow-hidden border bg-white-transparent rounded-3xl border-[#0037A1] shadow-lg">
                <Image src={item.image} alt={item.name} width={400} height={200} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold text-center underline text-[#0037A1]">{item.name}</h2>
                  <p className=" text-[#0037A1]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-8">
          <a className="block" href="https://devix-academy-front.vercel.app" target="_blank">
            <Image className="md:hidden block w-full" src={bannerMobile} alt="banner" />
            <Image className="md:block hidden w-full" src={bannerDesktop} alt="banner" />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Restaurant
