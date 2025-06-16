import { Calendar, Star, CheckCircle, AlertCircle } from "react-feather";
import { useNavigate } from "react-router-dom";

// Short reusable descriptions
const sampleDescriptions = [
  "Explore career-ready skills and insights.",
  "Gain foundational knowledge in your field.",
  "A subject designed for future professionals.",
  "Build your path with industry-relevant topics.",
  "Unlock the potential of specialized learning.",
];

const SubjectCard = ({ subject }) => {
const route =useNavigate()


  const hasPhoto = subject?.photo;
  const subjectName = subject?.subject_area || "";
  const createdDate = new Date(subject?.created_at).toLocaleDateString();
  const isPopular = subject?.is_popular === 1;
  const isActive = subject?.status === 1;
  const showComingSoon = subject?.department_id < 5;

  const imageUrl =
    hasPhoto || "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  // Stable randomized short description
  const description =
    sampleDescriptions[subject?.id % sampleDescriptions.length];

  return (
    <div className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
      {showComingSoon && (
        <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-tl-sm rounded-br-sm z-10 shadow">
          Coming Soon
        </div>
      )}

      <div className="relative h-32 flex items-center justify-center bg-gray-100 transition-colors duration-300 overflow-hidden">
        {hasPhoto ? (
          <img
            src={imageUrl}
            alt={subjectName}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={imageUrl}
              alt="fallback"
              className="h-full w-full object-cover opacity-60"
            />
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out flex items-center justify-center">
          <p className="text-white text-sm font-medium text-center px-6 leading-snug">
            {description}
          </p>
        </div>
      </div>

      <div className="text-center py-3 px-4 space-y-2">
        <h3 className="text-black text-md font-semibold">{subjectName}</h3>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
          <Calendar size={14} />
          <span>{createdDate}</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          {isActive ? (
            <span className="flex items-center text-green-600">
              <CheckCircle size={14} className="mr-1" />
              Active
            </span>
          ) : (
            <span className="flex items-center text-red-600">
              <AlertCircle size={14} className="mr-1" />
              Inactive
            </span>
          )}
          {isPopular && (
            <span className="flex items-center text-yellow-500 font-medium ml-2">
              <Star size={14} className="mr-1" />
              Popular
            </span>
          )}
        </div>

        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
          Department ID: {subject.department_id}
        </span>

        <button type="button" onClick={() => route(`/subject/${subject.id}`)} className="w-full mt-3 text-sm font-medium py-2 bg-lime-600 text-white rounded transition-colors duration-300 hover:bg-orange-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
