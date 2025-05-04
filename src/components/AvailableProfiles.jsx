import React from "react";
import { Star, Clock, Briefcase, Languages } from "lucide-react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-[#fffdf5] rounded-lg p-6 flex flex-col items-center shadow-sm border border-gray-100 w-full max-w-xs">
      <div className="relative mb-2">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={doctor.image || "/api/placeholder/100/100"}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-1 right-1 bg-gray-800 text-yellow-400 text-sm font-semibold py-0.5 px-2 rounded-full flex items-center">
          {doctor.rating}{" "}
          <Star size={14} fill="currentColor" className="ml-0.5" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>

      <div className="w-full space-y-2 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <Clock size={16} className="mr-2" />
          {doctor.specialization}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Briefcase size={16} className="mr-2" />
          {doctor.experience}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Languages size={16} className="mr-2" />
          Speaks: {doctor.languages}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full mb-4">
        <div className=" rounded p-2 text-center border-[#3A643B] border-1">
          <div className="text-xs text-gray-600">Video Consultation</div>
          <div className="font-semibold text-gray-800">
            ₹{doctor.videoConsultationFee}
          </div>
        </div>
        <div className="border-[#3A643B] border-1 rounded p-2 text-center">
          <div className="text-xs text-gray-600">Chat Consultation</div>
          <div className="font-semibold text-gray-800">
            {doctor.chatConsultationFee}
          </div>
        </div>
      </div>

      <button className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-800 mb-2">
        View Profile
      </button>
      <button className="w-full bg-[#3A643B] text-white rounded-md py-2 px-4">
        Book a consultation
      </button>
    </div>
  );
};

const AvailableProfiles = () => {
 
  const doctors = [
    {
      id: 1,
      name: "Dr. Prerna Narang",
      image:
        "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg",
      rating: 4.5,
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "English, Hindi, Marathi",
      videoConsultationFee: "600",
      chatConsultationFee: "Free",
    },
    {
      id: 2,
      name: "Dr. Anjali Sharma",
      image:
        "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg",
      rating: 4.8,
      specialization: "Gynecologist",
      experience: "12 years of Experience",
      languages: "English, Hindi",
      videoConsultationFee: "800",
      chatConsultationFee: "300",
    },
    {
      id: 3,
      name: "Dr. Rakesh Patel",
      image:
        "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg",
      rating: 4.2,
      specialization: "Dermatologist",
      experience: "5 years of Experience",
      languages: "English, Gujarati, Hindi",
      videoConsultationFee: "500",
      chatConsultationFee: "Free",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-gray-50 py-8">
      <div className="max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableProfiles;
