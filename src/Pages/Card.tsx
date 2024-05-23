import React, { useEffect } from "react";
import Avatar from "../Components/Avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../Redux/action";

const Card = ({ el }: { el: any }) => {
  const AllContacts = useSelector((store: any) => store.contacts);
  const dispatch = useDispatch();
  // console.log(AllContacts)

  useEffect(() => {}, [dispatch, AllContacts.length]);
  return (
    <div
      key={el.id}
      className=" block max-w-sm sm:w-fit lg:w-[24rem] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-black  transition-colors duration-300">
      <div className="w-3/4 m-auto  ">
        <div>
          <Avatar />
        </div>
        <div className="p-4">
          {/* {isOpen && (
          <Popup close={() => togglePopup(data)} el={singleContact} />
        )} */}
        </div>{" "}
        <div className="grid grid-cols-2 gap-3 text-left w-fit mx-auto">
          <div className="col text-left">
            <p>First Name :</p>
          </div>
          <div className="col">
            <p>{el.first_name}</p>
          </div>
          <div className="col text-left">
            <p>Last Name :</p>
          </div>
          <div className="col text-left">
            <p>{el.last_name}</p>
          </div>
          <div className="col text-left">
            <p>Status :</p>
          </div>
          <div className="col">
            <p>{el.status === "active" ? "Active" : "Inactive"}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <Link to={`edit/${el.id}`}>
          <button className="rounded p-3 lg:px-4 bg-blue-500 text-white ">
            Edit
          </button>
        </Link>

        <button
          onClick={() => dispatch(removeContact(el.id))}
          className="rounded p-3 lg:px-4 bg-red-600 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
