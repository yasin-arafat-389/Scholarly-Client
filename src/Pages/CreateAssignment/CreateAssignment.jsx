import { Button, Dialog } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { getUpdatedCoverPageData } from "../../Redux/CoverPageData/coverPageDataSlice";
import Swal from "sweetalert2";
import { TbMessageChatbot } from "react-icons/tb";
import { toggleDrawer } from "../../Redux/DrawerSlice/drawerSlice";
import HelperDrawer from "../../Components/HelperDrawer/HelperDrawer";
import JoditEditor from "jodit-react";

const CreateAssignment = () => {
  let navigate = useNavigate();
  let coverPageInfo = useSelector((state) => state.coverPageData.coverPage);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formattedDate = formatDate(coverPageInfo?.dateOfSubmission);

  const customizedContent = `
  
  <div contenteditable="false" readonly style="page-break-after: always; cursor: not-allowed;">
  
   <div style="width: 800px; margin: 0 auto;">
   <img draggable="false" readonly src="/diuLogo.png" alt="" style="width: 100%; height: auto;">
   </div>

   <h1 style="color: black; font-size: 60px; font-weight: bold; margin-top: 50px; text-align: center;">
    ${coverPageInfo?.assignmentType}
   </h1>

    <h1 style="color: black; font-size: 35px; font-weight: 600; text-align: center; margin-top: 40px;">
    Course Title: ${coverPageInfo?.courseTitle}
    </h1>
    <h1 style="color: black; font-size: 35px; font-weight: 600; text-align: center; margin-top: 10px;">
    Course Code: ${coverPageInfo?.courseCode}
    </h1>

    <div>
    <h1 style="color: black; font-size: 40px; font-weight: 600; text-align: left; margin-left: 40px; margin-top: 100px;">
    Submitted To: </br>
    <span style="font-size: 30px;">${coverPageInfo?.submittedTo}</span> </br>
    <span style="font-size: 30px;">${coverPageInfo?.designation}</span> </br>
    <span style="font-size: 30px;">${coverPageInfo?.departmentType}</span> </br>
    <span style="font-size: 30px;">Daffodil International University</span> </br>
    </h1>    
    </div>

    <div>
    <h1 style="color: black; font-size: 40px; font-weight: 600; text-align: right; margin-right: 40px; margin-top: 60px;">
    Submitted By: </br>
    <span style="font-size: 30px;">${coverPageInfo?.submittedBy}</span> </br>
    <span style="font-size: 30px;">ID: ${coverPageInfo?.studentId}</span> </br>
    <span style="font-size: 30px;">Section: ${coverPageInfo?.section}</span> </br>
    <span style="font-size: 30px;">Department of CSE</span> </br>
    <span style="font-size: 30px;">Daffodil International University</span> </br>
    </h1>    
    </div>

    <div>
    <h1 style="color: black; font-size: 30px; font-weight: 600; text-align: center; margin-right: 40px; margin-top: 80px;">
    Date of Submission: ${formattedDate}
    </h1>    
    </div>

    

  </div>`;

  const initialValueWithPageBreak = `${customizedContent}<div><h5 style="font-size: 30px;">Start writing from here.......</h5></div>`;

  const config = {
    showTooltipDelay: 0,
  };

  // Handle change cover page data modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
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

  const handleChangeCoverPage = (e) => {
    e.preventDefault();

    if (formData.assignmentType === "default") {
      setOpen(!open);
      return Swal.fire({
        title: "You must select assignment type!!",
        icon: "warning",
      });
    }
    if (formData.departmentType === "default") {
      setOpen(!open);
      return Swal.fire({
        title: "You must select department type!!",
        icon: "warning",
      });
    }

    localStorage.setItem("coverPageData", JSON.stringify(formData));

    dispatch(getUpdatedCoverPageData());
    setOpen(!open);
    toast.success("Cover page details have been updated!!");
  };

  // Handle opening chat
  const isChatOpen = useSelector((state) => state.helperDrawer.open);
  const handleOpenDrawer = () => {
    dispatch(toggleDrawer());
  };

  useEffect(() => {
    if (!coverPageInfo) {
      toast.error("You must create your cover page first!!");
      navigate("/create/cover-page");
    }
  }, [coverPageInfo, navigate]);

  return (
    <>
      <div className="bg-gray-200 h-auto pb-32">
        <div className="pt-10 flex justify-center items-center">
          <Button
            onClick={handleOpen}
            className="bg-teal-600 text-lg capitalize flex gap-3 justify-center items-center"
          >
            <FaEdit className="text-2xl" /> Change Cover Page Information
          </Button>
        </div>
        <div className="pt-10 w-[90%] mx-auto">
          <JoditEditor config={config} value={initialValueWithPageBreak} />

          <div className="flex mt-5 justify-center items-center">
            <Button
              className="capitalize text-2xl bg-teal-600"
              onClick={handleOpenDrawer}
            >
              {isChatOpen ? (
                <div className="flex justify-center items-center gap-3">
                  <MdCancel className="text-3xl" /> Close Chat
                </div>
              ) : (
                <div className="flex justify-center items-center gap-3">
                  <TbMessageChatbot className="text-3xl" /> Get Help From AI
                </div>
              )}
            </Button>
          </div>
        </div>

        <HelperDrawer name={coverPageInfo?.submittedBy} />

        <Dialog open={open} handler={handleOpen}>
          <form className="px-5 pb-5" onSubmit={handleChangeCoverPage}>
            <div className="h-[450px] overflow-y-auto">
              <div className="divide-y divide-gray-200">
                <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <div className="py-5 flex justify-between items-center">
                      <h1 className="text-xl font-bold">Change Cover Page</h1>
                      <button onClick={() => setOpen(!open)} type="button">
                        <MdCancel className="text-3xl text-red-600" />
                      </button>
                    </div>

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
                    <label className="leading-loose">Date of submission</label>
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
                  className="capitalize text-lg bg-teal-500 mt-5"
                >
                  Change
                </Button>
              </div>
            </div>
          </form>
        </Dialog>
      </div>
    </>
  );
};

export default CreateAssignment;
