import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";
import NoContacts from "../utils/NoContacts";

const Contacts = () => {
  const AllContacts = useSelector((store) => store.contacts);
  const dispatch = useDispatch();
  // console.log(AllContacts)

  useEffect(() => {}, [dispatch, AllContacts.length]);
  return (
    <div className="justify-center pt-5 text-gray-50   p-4  w-full ">
      <div className="m-4">
        <button className=" bg-blue-500 rounded p-2 lg:text-2xl">
          <Link to="/contact_form">Create Contact</Link>
        </button>
      </div>
      {AllContacts.length === 0 && (
        <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">
          {/* show svg when no conatacts are created */}
          <NoContacts />
          <h1 className="text-3xl">No Contact Added Yet!</h1>
        </div>
      )}
      <div
        id="contact_list"
        className="grid grid-cols-auto gap-4 place-items-center ">
        {AllContacts.map((el) => {
          return <Card el={el} />;
        })}
      </div>
    </div>
  );
};

export default Contacts;
