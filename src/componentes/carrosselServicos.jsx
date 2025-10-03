
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import imgCasa from '../assets/carrossel/casa.jpg'
import imgCelular from '../assets/carrossel/conserto-celular.jpg'
import imgContrucao from '../assets/carrossel/construcao.jpg'
import imgEletricista from '../assets/carrossel/eletricista.jpg'
import imgEmprendimento from '../assets/carrossel/emprendimentos.jpg'
import imgJardim from '../assets/carrossel/jardim.jpg'

const imgCarrossel = [
    imgCasa,
    imgCelular,
    imgContrucao,
    imgEletricista,
    imgEmprendimento,
    imgJardim
]
function CarrosselServicos() {
    return (
        <section className="carrossel-servicos">
            <h2>Conheça nossos <span>Serviços</span></h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={true}
                className='mySwiper'
                spaceBetween={20}
                slidesPerView={1}
            >
                {imgCarrossel.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index}`} style={{ width: '100%'}} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}


export default CarrosselServicos


