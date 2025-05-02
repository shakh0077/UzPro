import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, description }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-2xl p-6 sm:p-8 max-w-xl w-full relative shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-light transition-colors"
          >
            &times;
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-lime-400 text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              Yopish
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Slider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleOpenModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const slides = [
    {
      bg: 'bg-gradient-to-br from-blue-600 to-pink-500',
      title: "O'zbekistondan To'g'ri Yetkazish",
      text: "Mahsulotlarimiz O'zbekistondan to'g'ridan-to'g'ri sizga yetkaziladi — sifat va ishonchlilik kafolati bilan.",
      btnText: "Batafsil Ma'lumot",
      btnColor: 'bg-white text-blue-700',
      modalDesc: "Mahsulotlarimiz O'zbekiston respublikasidan to'g'ridan-to'g'ri yetkaziladi. Bu orqali siz eng yaxshi sifat va ishonchlilikka ega bo'lasiz."
    },
    {
      bg: 'bg-gradient-to-br from-lime-600 to-cyan-200',
      title: "100% Halol Mahsulotlar",
      text: "Mahsulotlarimiz O'zbekiston musulmonlari idorasi tomonidan halol deb topilgan va sertifikatlangan.",
      btnText: "Sertifikatlarni Ko'rish",
      btnColor: 'bg-white text-lime-700',
      modalDesc: "Barcha mahsulotlar O'zbekiston musulmonlar idorasi tomonidan halol deb topilgan va rasmiy sertifikatga ega."
    },
    {
      bg: 'bg-gradient-to-br from-orange-600 to-orange-300',
      title: "Tez Yetkazib Berish",
      text: "Buyurtmalaringiz 3-5 ish kunida manzilingizga yetkaziladi. Butun O'zbekiston bo'ylab xizmat ko'rsatamiz.",
      btnText: "Yetkazish Shartlari",
      btnColor: 'bg-white text-orange-700',
      modalDesc: "Buyurtmalaringiz 3-5 ish kunida sizga yetkaziladi. Biz butun O'zbekiston bo'ylab tezkor xizmat ko'rsatamiz."
    }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-8 h-[260px] sm:h-[320px] md:h-[400px] lg:h-[400px] xl:h-[450px] relative overflow-hidden rounded-2xl shadow-xl">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        speed={1000}
        modules={[Autoplay, EffectFade, Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`relative w-full h-full ${slide.bg} flex flex-col justify-center items-center text-white px-4 text-center`}
            >
              {/* SVG dekor */}
              <svg className="absolute top-0 left-0 w-72 h-72 md:w-80 md:h-80 opacity-20 blur-2xl" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#34d399", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>

              {/* Kontent */}
              <motion.h3
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold z-10 drop-shadow-xl"
              >
                {slide.title}
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl z-10 mt-4 max-w-2xl"
              >
                {slide.text}
              </motion.p>

              <motion.button
                onClick={() => handleOpenModal(slide.title, slide.modalDesc)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${slide.btnColor} font-semibold cursor-pointer py-2 px-5 sm:py-3 sm:px-6 mt-6 rounded-full z-10 shadow-md hover:shadow-xl transition`}
              >
                {slide.btnText}
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

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
