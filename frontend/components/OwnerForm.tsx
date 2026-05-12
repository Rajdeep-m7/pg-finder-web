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
import { MdDone } from "react-icons/md";
import Image from "next/image";

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

  const [locationData, setLocationData] = useState({
    latitude: "",
    longitude: "",
  });

  const [reviewData, setReviewData] = useState<{
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    number_of_rooms: string | null;
    description: string | null;
    rent: string | null;
    security_deposit: string | null;
    gender_allowed: string;
    occupation: string;
    latitude: string;
    longitude: string;
    amenities: number[];
    images: File[];
  } | null>(null);

  const getLocation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
      },
      (error) => {
        console.log(error);
        alert("Unable to retrieve location");
      },
    );
  };

  useEffect(() => {
    previewsRef.current = previews;
  }, [previews]);

  useEffect(() => {
    return () => {
      previewsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    setImages((prev) => [...prev, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setPreview((prev) => [...prev, ...newPreviews]);

    e.target.value = "";
  };

  const deletePreviews = () => {
    setImages([]);
    setPreview([]);
  };

  const toggleAmenity = (id: number) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if(!reviewData) return ;

      console.log(reviewData)

      setStep(1);
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  const prepareReview = () => {
    const form = document.querySelector("form");

    if (!form) return;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string | null,

      address: formData.get("address") as string | null,

      city: formData.get("city") as string | null,

      state: formData.get("state") as string | null,

      number_of_rooms: formData.get("number_of_rooms") as string | null,

      description: formData.get("description") as string | null,

      rent: formData.get("rent") as string | null,

      security_deposit: formData.get("security_deposit") as string | null,

      gender_allowed: gender,

      occupation: occupation,

      latitude: locationData.latitude,

      longitude: locationData.longitude,

      amenities: selectedAmenities,

      images: images,
    };
    setReviewData(data);
    setStep(5);
  };

  return (
    <form onSubmit={submitForm}>

      <div className="flex justify-around items-center w-full p-5 border border-gray-200 rounded-md shadow mt-5 gap-1">
        <div
          className={`p-1 px-3 rounded-full ${
            step > 1 ? "bg-green-400 p-3" : "bg-amber-300"
          }`}
        >
          {step > 1 ? <MdDone /> : 1}
        </div>

        <div className="w-full border h-0 border-gray-300"></div>

        <div
          className={`p-1 px-3 rounded-full ${
            step === 2 ? "bg-amber-500" : "bg-gray-200"
          } ${step > 2 ? "bg-green-400 p-3" : ""}`}
        >
          {step > 2 ? <MdDone /> : 2}
        </div>

        <div className="w-full border h-0 border-gray-300"></div>

        <div
          className={`p-1 px-3 rounded-full ${
            step === 3 ? "bg-amber-500" : "bg-gray-200"
          } ${step > 3 ? "bg-green-400 p-3" : ""}`}
        >
          {step > 3 ? <MdDone /> : 3}
        </div>

        <div className="w-full border h-0 border-gray-300"></div>

        <div
          className={`p-1 px-3 rounded-full ${
            step === 4 ? "bg-amber-500" : "bg-gray-200"
          } ${step > 4 ? "bg-green-400 p-3" : ""}`}
        >
          {step > 4 ? <MdDone /> : 4}
        </div>

        <div className="w-full border h-0 border-gray-300"></div>

        <div
          className={`p-1 px-3 rounded-full ${
            step === 5 ? "bg-amber-500" : "bg-gray-200"
          } ${step > 5 ? "bg-green-400 p-3" : ""}`}
        >
          {step > 5 ? <MdDone /> : 5}
        </div>
      </div>

      {/* STEP 1 */}

      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${
          step === 1 ? "block" : "hidden"
        }`}
      >
        <h1 className="text-lg font-bold">Property Basics</h1>

        <div className="p-4">
          <p className="text-sm font-medium py-3">Property Name</p>

          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            name="name"
            placeholder="Enter Property Name"
          />

          <p className="text-sm font-medium py-3">Property Address</p>

          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            name="address"
            placeholder="Enter Property Address"
          />

          <p className="text-sm font-medium py-3">Property City</p>

          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            name="city"
            placeholder="Enter Property City"
          />

          <p className="text-sm font-medium py-3">Property State</p>

          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="text"
            name="state"
            placeholder="Enter Property state"
          />

          <div>
            <h2 className="font-bold text-sm my-2">Your Location</h2>

            <input
              className="border-gray-400 border bg-gray-50 my-1 rounded-md p-2"
              type="text"
              placeholder="Latitude"
              value={locationData.latitude}
              readOnly
            />

            <br />

            <input
              className="border-gray-400 border bg-gray-50 my-1 rounded-md p-2"
              type="text"
              placeholder="Longitude"
              value={locationData.longitude}
              readOnly
            />

            <br />

            <button
              className="rounded bg-emerald-600 text-white p-2 mt-3"
              type="button"
              onClick={getLocation}
            >
              Get Current Location
            </button>
          </div>
        </div>
      </div>

      {/* STEP 2 */}

      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${
          step === 2 ? "block" : "hidden"
        }`}
      >
        <h1 className="text-lg font-bold">Property Details</h1>

        <div className="p-4">
          <CustomDropDown
            label="Gender"
            value={gender}
            onChange={setGender}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
              {
                value: "unisex",
                label: "Unisex",
              },
            ]}
          />

          <CustomDropDown
            label="Occupation"
            value={occupation}
            onChange={setOccupation}
            options={[
              {
                value: "single",
                label: "Single",
              },
              {
                value: "double",
                label: "Double",
              },
              {
                value: "triple",
                label: "Triple",
              },
            ]}
          />

          <p className="text-sm font-medium py-3">Number of Rooms</p>

          <input
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            type="number"
            name="number_of_rooms"
            placeholder="Enter Number of Rooms"
          />

          <p className="text-sm font-medium py-3">Property Description</p>

          <textarea
            className="w-full p-2 border rounded-lg bg-gray-100 border-gray-400"
            name="description"
            placeholder="Enter Property Description"
          />
        </div>
      </div>

      {/* STEP 3 */}

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
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-md border-2 px-4 py-3 text-black transition-all ${
                selectedAmenities.includes(item.id)
                  ? "border-amber-400 bg-amber-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>

              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* STEP 4 */}

      <div
        className={`bg-white rounded-lg p-5 shadow-md my-5 ${
          step === 4 ? "block" : "hidden"
        }`}
      >
        <h1 className="text-lg font-bold mb-4">Photos and Pricing</h1>

        <div>
          <p className="text-sm font-bold">Property Photos</p>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {previews.map((preview, index) => (
              <Image
                key={preview}
                src={preview}
                alt={`Preview ${index + 1}`}
                width={40}
                height={40}
                className="w-full h-40 object-cover rounded-lg border"
              />
            ))}
          </div>

          {previews.length > 0 && (
            <button
              type="button"
              className="my-2 border border-red-700 bg-red-500 text-white font-semibold p-1 rounded"
              onClick={deletePreviews}
            >
              Delete Images
            </button>
          )}

          <div className="flex flex-col md:flex-row justify-between w-full gap-5 mt-2">
            <div className="w-full">
              <h1 className="text-sm font-bold">Monthly Rent (₹)</h1>

              <input
                type="number"
                name="rent"
                className="border border-gray-400 w-full bg-gray-50 rounded-xl py-2 p-2 my-2"
              />
            </div>

            <div className="w-full">
              <h1 className="text-sm font-bold">Security Deposit (₹)</h1>

              <input
                type="number"
                name="security_deposit"
                className="border border-gray-400 w-full bg-gray-50 rounded-xl py-2 p-2 my-2"
              />
            </div>
          </div>
        </div>
      </div>

      {reviewData == null ? "" : (
        <div className={`bg-white rounded-lg p-5 shadow-md my-5 ${
          step === 5 ? "block" : "hidden"
        }`}>
          <h1 className="text-2xl font-bold mb-5">Review Your PG</h1>

          <div className="space-y-3">
            <p>
              <strong>Name:</strong> {reviewData.name}
            </p>

            <p>
              <strong>Address:</strong> {reviewData.address}
            </p>

            <p>
              <strong>City:</strong> {reviewData.city}
            </p>

            <p>
              <strong>City:</strong> {reviewData.state}
            </p>

            <p>
              <strong>Gender:</strong> {reviewData.gender_allowed}
            </p>

            <p>
              <strong>Occupation:</strong> {reviewData.occupation}
            </p>

            <p>
              <strong>Rooms:</strong> {reviewData.number_of_rooms}
            </p>

            <p>
              <strong>Rent:</strong> ₹{reviewData.rent}
            </p>

            <p>
              <strong>Deposit:</strong> ₹{reviewData.security_deposit}
            </p>

            <p>
              <strong>Description:</strong> {reviewData.description}
            </p>

            <div>
              <strong>Amenities:</strong>

              <div className="flex flex-wrap gap-2 mt-2">
                {amenities
                  .filter((item) => reviewData.amenities.includes(item.id))
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-amber-100 px-3 py-1 rounded"
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BUTTONS */}

      <div
        className={`flex justify-between w-full ${
          step === 1 ? "justify-end" : "justify-between"
        }`}
      >
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="text-black px-4 py-2 rounded-md border border-gray-400"
          >
            Previous
          </button>
        )}

        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            if (step === 4) {
              prepareReview();
            } else if (step < 6) {
              setStep(step + 1);
            }
          }}
          className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-500"
        >
          {step === 5 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default OwnerForm;
