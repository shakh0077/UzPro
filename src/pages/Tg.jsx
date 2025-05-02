import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TelegramEmailForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Iltimos, email manzilingizni kiriting!', {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      const botToken = '7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0';
      const chatId = '7426153375';

      const message = `📧 Yangi email: ${email}`;

      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message
      });

      toast.success('Xabaringiz muvaffaqiyatli yuborildi!', {
        position: "top-center",
        autoClose: 3000,
      });
      setEmail('');
    } catch (err) {
      toast.error('Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urunib ko\'ring.', {
        position: "top-center",
        autoClose: 3000,
      });
      console.error('Telegram API error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-lg shadow-md">
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


      <form onSubmit={handleSubmit} className="space-y-4">
        <div>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            placeholder="example@mail.com"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Yuborilmoqda...
            </>
          ) : 'Yuborish'}
        </button>
      </form>
    </div>
  );
};

export default TelegramEmailForm;
