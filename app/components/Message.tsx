const Message = () => {
    const features = [
        {
            text: "Terhubung dengan dirimu yang dulu dengan cara paling keren!",
            color: "bg-orange-200" 
        },
        {
            text: "Simpan pesan, foto, dan video untuk masa depanmu.",
            color: "bg-orange-200"   
        },
        {
            text: "Buat kapsul waktu digital yang hanya bisa kamu buka di tanggal tertentu.",
            color: "bg-orange-200"  
        },
        {
            text: "Bagikan kapsul waktumu dengan teman dan keluarga untuk kenangan bersama.",
            color: "bg-orange-200"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto bg-gray-50 py-8 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-gray-900">
                    Kirim Pesan ke Masa Depanmu!
                </h1>

                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 md:gap-1 items-center">
                    <div className="flex justify-center lg:justify-center order-2 lg:order-1">
                        
                            <img
                                src="message/message1.png" 
                                alt="Anak mengirim pesawat kertas"
                                className=" w-100 h-100 object-contain justify-start"
                                />
                        
                    </div>

                    <div className="space-y-4 md:space-y-6 order-1 lg:order-2" >
                        {features.map((feature, index) => (
                            <div key={index} className="flex itmes-start gap-3 md:gap-4">
                                <div className={`${feature.color} rounded-full w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-1`}></div>
                                <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
};
export default Message;