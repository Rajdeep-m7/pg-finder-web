"use client";
import React, { useEffect, useRef, useState } from "react";
import { CustomDropDown } from "./CustomDropDown";
import { IoWifi } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { LuWind } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { FaCarSide } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

const amenities = [
  { id: 1, name: "Wifi", icon: <IoWifi /> },
  { id: 2, name: "Food", icon: <ImSpoonKnife /> },
  { id: 3, name: "Laundry", icon: <IoShirtOutline /> },
  { id: 4, name: "Security", icon: <GoShieldCheck /> },
  { id: 5, name: "AC", icon: <LuWind /> },
  { id: 6, name: "Gym", icon: <CgGym /> },
  { id: 7, name: "TV", icon: <FaTv /> },
  { id: 8, name: "Parking", icon: <FaCarSide /> },
];

const OwnerForm = () => {
  const [step, setStep] = useState<number>(1);
  const [gender, setGender] = useState("male");
  const [occupation, setOccupation] = useState("single");
  const [selectedAmenities, setSelectedAmenities] = useState<number[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreview] = useState<string[]>([]);
  const previewsRef = useRef<string[]>([]);

  useEffect(() => {
    previewsRef.current = previews;
  }, [previews]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);

    const newPreviews = files.map((file)=>
      URL.createObjectURL(file)
    )

    setPreview((prev) => [...prev , ...newPreviews]);
    e.target.value = "";
  };

  const deletePreviews=()=>{
    setImages([]);
    setPreview([]);
  }

  useEffect(() => {
    return () => {
      previewsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const toggleAmenity = (id: number) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${step === 1 ? "block" : "hidden"}`}
      >
        <h1 className="text-lg font-bold">Property Basics</h1>
        <form className="p-4">
          <p className="text-sm font-medium py-3">Property Name</p>
          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            placeholder="Enter Property Name"
          />
          <p className="text-sm font-medium py-3">Property Address</p>
          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            placeholder="Enter Property Address"
          />
          <p className="text-sm font-medium py-3">Property City</p>
          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            placeholder="Enter Property City"
          />
        </form>
      </div>
      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${step === 2 ? "block" : "hidden"}`}
      >
        <h1 className="text-lg font-bold">Property Details</h1>
        <form className="p-4">
          <CustomDropDown
            label="Gender"
            value={gender}
            onChange={setGender}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "unisex", label: "Unisex" },
            ]}
          />
          <CustomDropDown
            label="Default Occupation"
            value={occupation}
            onChange={setOccupation}
            options={[
              { value: "single", label: "Single" },
              { value: "double", label: "Double" },
              { value: "triple", label: "Triple" },
            ]}
          />
          <p className="text-sm font-medium py-3">Number of Rooms</p>
          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="number"
            placeholder="Enter Number of Rooms"
          />
          <p className="text-sm font-medium py-3">Property Description</p>
          <textarea
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            placeholder="Enter Property Description"
          />
        </form>
      </div>

      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${
          step === 3 ? "block" : "hidden"
        }`}
      >
        <h1 className="text-xl font-bold mb-4">Select Amenities</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => toggleAmenity(item.id)}
              aria-pressed={selectedAmenities.includes(item.id)}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-md border-2 px-4 py-3 text-black transition-all ${
                selectedAmenities.includes(item.id)
                  ? "border-amber-400 bg-amber-50 "
                  : "border-gray-300 bg-gray-50 hover:border-amber-400"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${step === 4 ? "block" : "hidden"}`}
      >
        <div>
          <h1 className="text-lg font-bold mb-4">Photos and Pricing</h1>
          <div className="">
            <p className="text-sm font-bold">Property photos</p>
            {images.length > 0 ? (
              <p className="text-sm text-gray-600 mb-2">
                {images.length} photo{images.length !== 1 ? "s" : ""} selected
              </p>
            ) : null}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-55 md:w-full"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {previews.map((preview, index) => (
              // Blob URLs from createObjectURL are not supported by next/image's optimizer.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={preview}
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg border"
              />
            ))}
          </div>
          {previews.length > 0 && <button className="my-2 border border-red-700 bg-red-500 text-white font-semibold p-1 rounded" onClick={deletePreviews}>Delete Images</button>}
          <div className="flex flex-col md:flex-row justify-between w-full gap-5 mt-2">
            <div className="w-full">
              <h1 className="text-sm font-bold">Monthly Rent (₹)</h1>
              <input type="number" className="border border-gray-400 w-full bg-gray-50 rounded-xl py-2 p-2 my-2" />
            </div>
            <div className="w-full">
              <h1 className="text-sm font-bold">Security Deposit (₹)</h1>
              <input type="number" className="border border-gray-400 w-full bg-gray-50 rounded-xl py-2 p-2 my-2" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-between w-full ${step === 1 ? "justify-end" : "justify-between"}`}
      >
        <button
          onClick={() => setStep(step - 1)}
          className={`text-black px-4 py-2 rounded-md border border-gray-400 ${step === 1 ? "hidden" : "block"}`}
        >
          Previous
        </button>
        <button
          onClick={() => setStep(step + 1)}
          className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-500 "
        >
          {step === 5 ? "Submit" : "Continue"}
        </button>
      </div>
    </div>
  );
};
export default OwnerForm;
