import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { IoInformation } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getUpdatedCoverPageData } from "../../Redux/CoverPageData/coverPageDataSlice";

const CreateCoverPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [formData, setFormData] = useState({
    assignmentType: "default",
    courseTitle: "",
    courseCode: "",
    submittedTo: "",
    designation: "",
    departmentType: "default",
    submittedBy: "",
    studentId: "",
    section: "",
    dateOfSubmission: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateCoverPage = (e) => {
    e.preventDefault();

    if (formData.assignmentType === "default") {
      return Swal.fire({
        title: "You must select assignment type!!",
        icon: "warning",
      });
    }
    if (formData.departmentType === "default") {
      return Swal.fire({
        title: "You must select department type!!",
        icon: "warning",
      });
    }

    localStorage.setItem("coverPageData", JSON.stringify(formData));
    dispatch(getUpdatedCoverPageData());
    navigate("/create/assignment");
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-200">
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  <IoInformation className="text-black text-3xl" />
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">
                    Create your cover page first
                  </h2>
                </div>
              </div>

              <form onSubmit={handleCreateCoverPage}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <select
                        required
                        name="assignmentType"
                        id="assignmentType"
                        defaultValue="default"
                        value={formData.assignmentType}
                        onChange={handleChange}
                        className="outline-none p-3 border border-yellow-800 rounded-lg"
                      >
                        <option value="default" disabled>
                          Select type
                        </option>
                        <option value="Lab Report">Lab report</option>
                        <option value="Assignment">Assignment</option>
                      </select>
                    </div>

                    {/* Course Title */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Course Title</label>
                      <input
                        value={formData.courseTitle}
                        onChange={handleChange}
                        name="courseTitle"
                        required
                        type="text"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>

                    {/* Course Code */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Course Code</label>
                      <input
                        value={formData.courseCode}
                        onChange={handleChange}
                        name="courseCode"
                        type="text"
                        required
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>

                    {/* Submitted to */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Submitted To</label>
                      <input
                        value={formData.submittedTo}
                        onChange={handleChange}
                        name="submittedTo"
                        required
                        type="text"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>

                    {/* Designation */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Designation</label>
                      <input
                        value={formData.designation}
                        onChange={handleChange}
                        name="designation"
                        required
                        type="text"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                        placeholder="Lecturer / Professor etc..."
                      />
                    </div>

                    {/* Department */}
                    <div className="flex flex-col">
                      <select
                        value={formData.departmentType}
                        onChange={handleChange}
                        required
                        name="departmentType"
                        id="departmentType"
                        defaultValue="default"
                        className="outline-none p-3 border border-yellow-800 rounded-lg"
                      >
                        <option value="default" disabled>
                          Department
                        </option>
                        <option value="Department of CSE">
                          Department of CSE
                        </option>
                        <option value="Department of SWE">
                          Department of SWE
                        </option>
                        <option value="Department of GED">
                          Department of GED
                        </option>
                      </select>
                    </div>

                    {/* Submitted By */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Submitted By</label>
                      <input
                        value={formData.submittedBy}
                        onChange={handleChange}
                        name="submittedBy"
                        required
                        type="text"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>

                    {/* ID*/}
                    <div className="flex flex-col">
                      <label className="leading-loose">Student ID</label>
                      <input
                        value={formData.studentId}
                        onChange={handleChange}
                        name="studentId"
                        required
                        type="text"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>

                    {/* Section*/}
                    <div className="flex flex-col">
                      <label className="leading-loose">Section</label>
                      <input
                        value={formData.section}
                        onChange={handleChange}
                        name="section"
                        required
                        type="text"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>

                    {/* Date of submission*/}
                    <div className="flex flex-col">
                      <label className="leading-loose">
                        Date of submission
                      </label>
                      <input
                        value={formData.dateOfSubmission}
                        onChange={handleChange}
                        name="dateOfSubmission"
                        required
                        type="date"
                        className="px-4 border border-yellow-800 py-2 outline-none w-full sm:text-sm rounded-md text-gray-600"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    className="capitalize text-lg bg-teal-500"
                  >
                    Create Cover Page
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoverPage;
