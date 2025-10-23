const Start = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50 py-8 md:py-8 px-4 md:px-8">
        <div className="w-full bg-gradient-to-tr from-[#D2D4FD] to-[#F9D3FC] rounded-3xl py-16 md:py-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            Mulai Perjalananmu Melintasi Waktu
            </h2>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-800 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
            Buat kapsul waktumu yang pertama hari ini dan hubungkan dirimu dengan masa depan.
            <br className="hidden md:block" />
            Pikiran, mimpi, dan kenanganmu menunggu untuk dijaga
            </p>
            
            <button className="bg-gradient-to-r from-[#ECBD88] via-[#E39FF4] to-[#9FB6F4] hover:to-purple-400 text-gray-900 font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                    Mulai buat Capsulemu
            </button>
        </div>
        </div>
    </div>
  );
};

export default Start;