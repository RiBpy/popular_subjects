import NoImageSvg from "../helpers/ui/NoImageSvg";

const SubjectCard = ({ subject }) => {
  const hasPhoto = subject?.photo;
  const subjectName = subject?.subject_area || ''

  return (
    <div className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-32 flex items-center justify-center bg-gray-100 transition-colors duration-300 overflow-hidden">
        {hasPhoto ? (
          <img
            src={subject?.photo}
            alt={subjectName}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <NoImageSvg />
        )}

        <div className="absolute inset-0 bg-black bg-opacity-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out flex items-center justify-center">
          <span className="text-white text-lg font-semibold">
            {subjectName}
          </span>
        </div>
      </div>

      <div className="text-center py-2 px-3">
        <p className="text-black text-md font-normal py-3">
         Subject: {subjectName}
        </p>
        <button className="w-full text-sm font-medium py-2 bg-lime-600 text-white rounded transition-colors duration-300 hover:bg-orange-600 hover:text-white">
          Find Courses
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
