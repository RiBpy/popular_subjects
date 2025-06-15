import NoImageSvg from "../helpers/ui/NoImageSvg";

const SubjectCard = ({ subject }) => {
  const hasPhoto = subject.photo;

  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="h-32 flex items-center justify-center bg-gray-100 group-hover:bg-gray-300 transition-colors duration-300 ">
        {hasPhoto ? (
          <img
            src={subject.photo}
            alt={subject.subject_area}
            className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : <NoImageSvg />}
      </div>
      <h3 className="text-center text-sm font-semibold py-2 transition-colors duration-300 group-hover:text-black">
        {subject.subject_area}
      </h3>
      <div className="text-center py-2 px-3">
        <button className="w-full text-sm font-medium py-2 bg-lime-600 text-white rounded transition-colors duration-300 group-hover:bg-orange-600 ">
          Find Courses
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
