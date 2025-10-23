const MomentsComponent = () => {
  const moments = [
    {
      title: "Family",
      description: "Share Messages for special occasion",
      image: <img src="moments/moments1.png" alt="family" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Friends",
      description: "Share Messages for anniversaries",
      image: <img src="moments/moments2.png" alt="friends" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Community",
      description: "Reflect on grups event",
      image: <img src="moments/moments3.png" alt="comunity" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Self",
      description: "Motivate your future self",
      image: <img src="moments/moments4.png" alt="self" />,
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-3xl py-16 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Moments
            </h1>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl">
            {moments.map((moment, index) => (
                <div
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                <div className={`w-24 h-24 md:w-32 md:h-32 ${moment.bgColor} rounded-full flex items-center justify-center mb-3 md:mb-6`}>
                    <span className="text-4xl md:text-6xl">{moment.image}</span>
                </div>
                
                <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1 md:mb-3">
                    {moment.title}
                </h3>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {moment.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  );
};

export default MomentsComponent;