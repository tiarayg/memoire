const MomentsComponent = () => {
  const moments = [
    {
      title: "Family",
      description: "Share Messages for special occasion",
      icon: "👨‍👩‍👧‍👦",
      bgColor: "bg-blue-50"
    },
    {
      title: "Friends",
      description: "Share Messages for anniversaries",
      icon: "👥",
      bgColor: "bg-green-50"
    },
    {
      title: "Community",
      description: "Reflect on grups event",
      icon: "🌐",
      bgColor: "bg-purple-50"
    },
    {
      title: "Self",
      description: "Motivate your future self",
      icon: "💝",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
          Moments
        </h1>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-24 h-24 md:w-40 md:h-40 ${moment.bgColor} rounded-full flex items-center justify-center mb-3 md:mb-6`}>
                <span className="text-4xl md:text-6xl">{moment.icon}</span>
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
  );
};

export default MomentsComponent;