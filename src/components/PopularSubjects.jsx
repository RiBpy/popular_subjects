"use client";

import { useState, useEffect } from "react";
import _ from "lodash";
import SubjectCard from "./SubjectCard";
import CardSkeleton from "./CardSkeleton";
import Pagination from "./Pagination";

const API_BASE_URL =
  "https://www.ehlcrm.theskyroute.com/api/test/popular-subject-area";

const PopularSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [paginationLinks, setPaginationLinks] = useState([]);

  const fetchSubjects = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}?page=${page}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data: ", data);

      setSubjects(data.rows.data);
      setCurrentPage(data.rows.current_page);
      setTotalPages(data.rows.last_page);
      setTotalSubjects(data.totalSubjectArea);
      setPaginationLinks(data.rows.links);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch subjects");
      console.error("Error fetching subjects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const debouncedPageChange = _.debounce(handlePageChange, 300);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-800 mb-2">
              Error Loading Subjects
            </h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => fetchSubjects(currentPage)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">EXPLORE</span>{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              POPULAR SUBJECTS
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the top subjects chosen by students worldwide. Find your
            passion and start your academic journey.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2 bg-orange-200 rounded-[5px] py-2 px-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>{totalSubjects} Total Subjects</span>
            </div>
            <div className="flex items-center space-x-2 bg-lime-200 rounded-[5px] py-2 px-4">
              <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
              <span>
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
        </div>

        {/* Pagination */}
        {!loading && subjects.length > 0 && (
          <Pagination
            links={paginationLinks}
            currentPage={currentPage}
            onPageChange={debouncedPageChange}
          />
        )}

        {/* Empty State */}
        {!loading && subjects.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Subjects Found
            </h3>
            <p className="text-gray-600">
              There are no subjects available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default PopularSubjects;
