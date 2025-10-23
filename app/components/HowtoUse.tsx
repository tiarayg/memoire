const HowtoUse = () => {
    return (
        <div className="bg-gray 50 py-8 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-12">
                Bagaimana Kapsul waktu bekerja
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                    <img 
                    src="/homepage/carakerja1.png" 
                    alt="Step 1" 
                    className="w-32 h-32 object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    Tulis Pesanmu
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Coret-coret kenangan, harapan, atau rahasia yang ingin kamu simpan dalam kapsul.
                    </p>
                </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                    <img 
                    src="/homepage/carakerja2.png" 
                    alt="Step 1" 
                    className="w-32 h-32 object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    Simpan Aman
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Pilih tanggal pembukaan. Kapsulmu akan terkunci rapat hingga tiba waktunya.
                    </p>
                </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                    <img 
                    src="/homepage/carakerja3.png" 
                    alt="Step 1" 
                    className="w-32 h-32 object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    Buka di Masa Depan
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Nikmati kejutan dan nostalgia saat kapsulmu terbuka. Selamat bernostalgia!
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
};
export default HowtoUse;