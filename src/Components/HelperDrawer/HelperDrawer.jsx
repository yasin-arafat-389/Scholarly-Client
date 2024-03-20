/* eslint-disable react/prop-types */
import { Drawer } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import "./HelperDrawer.css";
import { MdCancel } from "react-icons/md";
import { closeDrawer } from "../../Redux/DrawerSlice/drawerSlice";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const HelperDrawer = ({ name }) => {
  let dispatch = useDispatch();
  const open = useSelector((state) => state.helperDrawer.open);

  const [firstName, lastName] = name.split(" ");
  const displayName = firstName;

  const handleCloseChat = () => {
    dispatch(closeDrawer());
  };

  // Handle Chat Response
  const [inputText, setInputText] = useState([]);
  const [chatResponse, setChatResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userInput = e.target.querySelector(
      ".message-inputHelperDrawer"
    ).value;
    setInputText([...inputText, userInput]);
    e.target.reset();

    try {
      await axios
        .post("http://localhost:5000/generate-response", {
          input: userInput,
        })
        .then((response) => {
          setChatResponse([...chatResponse, response.data.response]);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "warning",
        text: "Smething went wrong!! Try again later.",
      });
      setLoading(false);
      dispatch(closeDrawer());
      setLimitExceeded(true);
      setChatResponse([...chatResponse, "Something went wrong!!"]);
    }
  };

  return (
    <div>
      <Drawer
        overlay={false}
        placement="right"
        open={open}
        className="bg-transparent shadow-none flex justify-center items-center outline-none"
      >
        <div className="cardHelperDrawer">
          <div className="chat-headerHelperDrawer flex justify-between items-center bg-[#451952]">
            Chat
            <button onClick={handleCloseChat}>
              <MdCancel className="text-3xl text-red-500" />
            </button>
          </div>
          <div className="chat-windowHelperDrawer">
            <div className={`message-listHelperDrawer`}>
              {inputText.map((message, index) => (
                <div key={index} className={`flex flex-col gap-2 mb-2`}>
                  <div className="w-full flex gap-1 items-start">
                    <div className="flex justify-center items-center text-white p-2 rounded-full bg-blue-600">
                      You
                    </div>
                    <span
                      className="bg-blue-600 p-2 rounded-lg text-white w-full"
                      style={{ wordWrap: "break-word" }}
                    >
                      {message}
                    </span>
                  </div>

                  <div className="w-full flex gap-1 items-start">
                    <div className="flex justify-center items-center text-white p-2 rounded-full bg-gray-600">
                      Bot
                    </div>
                    <span
                      style={{ wordWrap: "break-word" }}
                      className={`${
                        !chatResponse[index]
                          ? "bg-transparent p-0 mt-1"
                          : "bg-gray-600 p-2"
                      } rounded-lg text-white w-full`}
                    >
                      {!chatResponse[index] && limitExceeded === false ? (
                        <div className="typing">
                          <div className="typing__dot"></div>
                          <div className="typing__dot"></div>
                          <div className="typing__dot"></div>
                        </div>
                      ) : (
                        chatResponse[index]
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="chat-inputHelperDrawer">
            <input
              type="text"
              required
              className="message-inputHelperDrawer"
              placeholder={`Hey ${displayName}, how can I help?`}
            />
            <button
              disabled={loading ? true : false}
              type="submit"
              className="send-buttonHelperDrawer"
            >
              Send
            </button>
          </form>
        </div>
      </Drawer>
    </div>
  );
};

export default HelperDrawer;
