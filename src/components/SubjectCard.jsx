const getSubjectIcon = (subjectName) => {
  const name = subjectName.toLowerCase();
  if (
    name.includes("computer") ||
    name.includes("artificial intelligence") ||
    name.includes("data science")
  )
    return "💻";
  if (
    name.includes("business") ||
    name.includes("accounting") ||
    name.includes("finance")
  )
    return "💼";
  if (name.includes("engineering") || name.includes("aerospace")) return "⚙️";
  if (
    name.includes("medicine") ||
    name.includes("health") ||
    name.includes("anatomy")
  )
    return "🏥";
  if (name.includes("art") || name.includes("design") || name.includes("film"))
    return "🎨";
  if (
    name.includes("science") ||
    name.includes("physics") ||
    name.includes("chemistry")
  )
    return "🔬";
  if (name.includes("language") || name.includes("literature")) return "📚";
  if (name.includes("psychology") || name.includes("anthropology")) return "🧠";
  if (name.includes("agriculture") || name.includes("animal")) return "🌱";
  if (name.includes("architecture")) return "🏛️";
  if (name.includes("astronomy")) return "🌟";
  if (name.includes("archaeology")) return "🏺";
  return "📖";
};

const getGradientColor = (id) => {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-green-500 to-green-600",
    "from-pink-500 to-pink-600",
    "from-indigo-500 to-indigo-600",
    "from-red-500 to-red-600",
    "from-yellow-500 to-yellow-600",
    "from-teal-500 to-teal-600",
    "from-orange-500 to-orange-600",
    "from-cyan-500 to-cyan-600",
  ];
  return colors[id % colors.length];
};

const SubjectCard = ({ subject }) => {
  const icon = getSubjectIcon(subject.subject_area);
  const gradient = getGradientColor(subject.id);

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Card Content */}
      <div className="relative p-6">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Subject Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {subject.subject_area}
        </h3>

        {/* Department Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
          Dept. {subject.department_id}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${
                subject.status === 1 ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-sm text-gray-600">
              {subject.status === 1 ? "Available" : "Unavailable"}
            </span>
          </div>
          {subject.is_popular === 1 && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
              Popular
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          className={`w-full bg-gradient-to-r ${gradient} text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 group-hover:shadow-xl`}
        >
          Explore Courses
        </button>
      </div>

      {/* Hover Effect Decoration */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
export default SubjectCard;
