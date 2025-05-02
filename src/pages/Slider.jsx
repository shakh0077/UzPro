import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-lime-600/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
const Slider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleOpenModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  return (
    <div className="max-w-[1440px] w-full mb-8 mx-auto h-120 relative">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full rounded-2xl h-120 bg-gradient-to-br from-blue-600 to-lime-500 flex flex-col justify-center items-center text-white px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">O'zbekistondan To'g'ri Yetkazish</h3>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl">
              Mahsulotlarimiz O'zbekistondan to'g'ridan-to'g'ri sizga yetkaziladi — sifat va ishonchlilik kafolati bilan.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  "O'zbekistondan To'g'ri Yetkazish",
                  "Mahsulotlarimiz O'zbekiston respublikasidan to'g'ridan-to'g'ri yetkaziladi. Bu orqali siz eng yaxshi sifat va ishonchlilikka ega bo'lasiz."
                )
              }
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-red-100 hover:scale-105 transition-all duration-300"
            >
              Batafsil Ma'lumot
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full rounded-2xl h-120 bg-gradient-to-br from-lime-600 to-cyan-200 flex flex-col justify-center items-center text-white px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">100% Halol Mahsulotlar</h3>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl">
              Mahsulotlarimiz O'zbekiston musulmonlari idorasi tomonidan halol deb topilgan va sertifikatlangan.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  '100% Halol Mahsulotlar',
                  "Barcha mahsulotlar O'zbekiston musulmonlar idorasi tomonidan halol deb topilgan va rasmiy sertifikatga ega."
                )
              }
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-red-100 hover:scale-105 transition-all duration-300"
            >
              Sertifikatlarni Ko'rish
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full rounded-2xl h-120 bg-gradient-to-br from-orange-600 to-orange-400 flex flex-col justify-center items-center text-white px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Tez Yetkazib Berish</h3>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl">
              Buyurtmalaringiz 3-5 ish kunida manzilingizga yetkaziladi. Butun O‘zbekiston bo‘ylab xizmat ko‘rsatamiz.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  'Tez Yetkazib Berish',
                  'Buyurtmalaringiz 3-5 ish kunida sizga yetkaziladi. Biz butun O‘zbekiston bo‘ylab tezkor xizmat ko‘rsatamiz.'
                )
              }
              className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-red-100 hover:scale-105 transition-all duration-300"
            >
              Yetkazish Shartlari
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Modal Component */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
};

export default Slider;
