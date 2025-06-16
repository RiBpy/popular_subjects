import { size } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Calendar,
  BookOpen,
  Award,
  Users,
  Info,
  CheckCircle,
  AlertCircle,
} from "react-feather";
import SubjectDetailsSkeleton from "./ui/SubjectDetailsSkeleton";
import NoDataFoundSvg from "./ui/customSvg/NoDataFoundSvg";

function SubjectDetails() {
  const { id } = useParams();
  const route = useNavigate();
  const numericId = parseInt(id);

  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  const staticImage =
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  const staticDescription =
    "This subject provides foundational knowledge and professional understanding in the field. It prepares students for real-world application through theory and practical examples, equipping them for future roles in their domain.";

  useEffect(() => {
    setLoading(true);

    const fetchSubject = async () => {
      try {
        const response = await fetch(
          `https://www.ehlcrm.theskyroute.com/api/subject-area-details?id=${numericId}`
        );
        const result = await response.json();
        if (response.ok && size(result) > 0) {
          setSubject(result);
        } else {
          setSubject(null);
        }
      } catch (error) {
        console.error("Error fetching subject details:", error);
        setSubject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [numericId]);

  // Render loading skeleton while fetching data
  if (loading) {
    return (
      <div className="text-center py-7 text-gray-500 text-lg">
        <SubjectDetailsSkeleton />
      </div>
    );
  }

  // Render no data found if subject is null or empty
  if (!subject) {
    return (
      <div className="text-center py-20 text-red-600 text-lg w-full flex items-center justify-center">
        <div>
          <NoDataFoundSvg />
          <button
            type="button"
            onClick={() => route("/")}
            className="mt-4 px-6 py-2 bg-lime-600 hover:bg-orange-600 text-white rounded text-sm font-medium transition"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  //   get the created date and department details
  const createdDate = new Date(subject.created_at).toLocaleDateString();
  const department = subject.subject_area_department || {};
  const departmentCreatedDate = new Date(
    department.created_at
  ).toLocaleDateString();

  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-white shadow-lg rounded-xl">
      {/* subject image */}
      <div className="rounded-lg overflow-hidden h-60 mb-6">
        <img
          src={subject.photo || staticImage}
          alt={subject.subject_area}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BookOpen size={20} />
          {subject.subject_area}
        </h2>
        <p className="text-gray-600 text-sm mt-1 flex items-center gap-2">
          <Calendar size={14} />
          Created on: {createdDate}
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">{staticDescription}</p>

      {/* department details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Award size={18} className="text-indigo-600" />
          <span className="text-gray-800 text-sm font-medium">
            Department:{" "}
            <span className="text-gray-600">{department.name || "N/A"}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Users size={18} className="text-lime-600" />
          <span className="text-gray-800 text-sm font-medium">
            Department Status:{" "}
            <span className="text-gray-600 capitalize">
              {department.status || "N/A"}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {subject.status === 1 ? (
            <CheckCircle size={18} className="text-green-600" />
          ) : (
            <AlertCircle size={18} className="text-red-600" />
          )}
          <span className="text-gray-800 text-sm font-medium">
            Subject Status:{" "}
            <span className="text-gray-600">
              {subject.status === 1 ? "Active" : "Inactive"}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Info size={18} className="text-blue-600" />
          <span className="text-gray-800 text-sm font-medium">
            Subject ID: <span className="text-gray-600">{subject.id}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={18} className="text-blue-600" />
          <span className="text-gray-800 text-sm font-medium">
            Department Created:{" "}
            <span className="text-gray-600">{departmentCreatedDate}</span>
          </span>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => route("/")}
          className="px-6 py-2 bg-lime-600 hover:bg-orange-600 text-white rounded text-sm font-medium transition"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default SubjectDetails;
