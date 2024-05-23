import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action";
function ContactForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(addContact(form));
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-16">Create Contact</h2>
      <div className="w-[40%] mx-auto my-4 py-10 border border-black pr-6">
        <div className="">
          <div className="mb-4 grid grid-cols-2">
            <label className="block font-bold mb-2" htmlFor="first-name">
              First Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              id="first-name"
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 grid grid-cols-2">
            <label className="block font-bold mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              id="last-name"
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Mobile Number
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="number"
          name="mob"
          min="10"
          max="10"
          value={form.mob}
          onChange={handleChange}
        />
      </div> */}
        <div className=" grid grid-cols-2 items-center gap-3 mb-4 ">
          <div>Status</div>
          <dic className="flex-col">
            <div className="flex gap-2">
              <label className="block font-bold mb-2" htmlFor="status">
                <input
                  type="radio"
                  name="status"
                  id="status"
                  className="mr-2"
                  value={"active"}
                  defaultChecked
                  onChange={handleChange}
                />
                Active
              </label>
            </div>
            <div className="flex gap-2">
              <label className="block font-bold mb-2" htmlFor="status">
                <input
                  type="radio"
                  name="status"
                  id="status"
                  className="mr-2"
                  value={"inactive"}
                  onChange={handleChange}
                />
                Inactive
              </label>
            </div>
          </dic>
          {/* <select
          className="w-full border border-gray-400 p-2 rounded-md"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}>
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select> */}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}>
          Save Contact
        </button>
      </div>
    </>
  );
}

export default ContactForm;
