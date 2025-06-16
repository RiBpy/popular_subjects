"use client";

import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { Book, BookOpen } from "react-feather";
import SubjectCard from "./SubjectCard";
import CardSkeleton from "./ui/CardSkeleton";
import Pagination from "./Pagination";
import FetchErrorSvg from "./ui/customSvg/FetchErrorSvg";

const API_BASE_URL =
  "https://www.ehlcrm.theskyroute.com/api/test/popular-subject-area";

const PopularSubjects = () => {
  const [data, setData] = useState({
    subjects: [],
    currentPage: 1,
    totalPages: 1,
    totalSubjects: 0,
    paginationLinks: [],
  });

  const [status, setStatus] = useState({
    loading: true,
    error: null,
  });

  const fetchSubjects = async (page = 1) => {
    setStatus({ loading: true, error: null });

    try {
      const res = await fetch(`${API_BASE_URL}?page=${page}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const result = await res.json();

      setData({
        subjects: result.rows.data,
        currentPage: result.rows.current_page,
        totalPages: result.rows.last_page,
        totalSubjects: result.totalSubjectArea,
        paginationLinks: result.rows.links,
      });
    } catch (err) {
      setStatus({
        loading: false,
        error: err instanceof Error ? err.message : "Failed to fetch subjects",
      });
      return;
    }

    setStatus({ loading: false, error: null });
  };

  const debouncedFetchRef = useRef(
    _.debounce((page) => fetchSubjects(page), 300)
  );

  useEffect(() => {
    debouncedFetchRef.current(data.currentPage);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data.currentPage]);

  const handlePageChange = (page) => {
    setData((prev) => ({ ...prev, currentPage: page }));
  };

  if (status?.error) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl min-h-[40vh]">
            <FetchErrorSvg error={status?.error} />
            <button
              onClick={() => fetchSubjects(data.currentPage)}
              className="bg-red-600 text-white px-6 py-3 mt-5 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center mx-auto"
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
      <div className=" mx-auto">
        {/* Header */}
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
          <div className="flex items-center justify-center sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2 py-2 px-4">
              <Book size={20} className="text-orange-600" />
              <p><span className="font-bold text-[20px]">{data?.totalSubjects}</span> Total Subjects</p>
            </div>
            <div className="flex items-center space-x-2 rounded-[5px] py-2 px-4">
              <BookOpen className="text-lime-600" size={20}/>
              <p>
                Page <span className="font-bold text-[20px]">{data.currentPage}</span> of <span className="font-bold text-[20px]">{data.totalPages}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {status.loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : data.subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
        </div>

        {/* Pagination */}
        {!status.loading && data.subjects.length > 0 && (
          <Pagination
            links={data.paginationLinks}
            currentPage={data.currentPage}
            onPageChange={handlePageChange}
          />
        )}

        {/* Empty State */}
        {!status.loading && data.subjects.length === 0 && !status.error && (
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
