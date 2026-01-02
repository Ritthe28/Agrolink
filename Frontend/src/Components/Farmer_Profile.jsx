import React, { useEffect, useState } from "react";
import { useappcontaxt } from "../context/Appcontext";
import axios from "axios";
import { toast } from "react-toastify";

const FarmerProfile = () => {
  const { userdata, setuserdata } = useappcontaxt();
  const token = localStorage.getItem("token");

  const [editProfile, setEditProfile] = useState(false);
  const [farmer, setFarmer] = useState(null);

  // 🔹 Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/users/getuserdata",{token},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(data.success){

          
          setFarmer(data.user);
          setuserdata(data.user);
        }else {
          setEditProfile(true );
          toast.info("set information first ")
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    if (token) fetchProfile();
  }, [token]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFarmer({ ...farmer, [e.target.name]: e.target.value });
  };

  // 🔹 Save profile
  const saveProfile = async () => {
    try {
      const { data } = await axios.put(
        "http://localhost:8000/api/users/updateprofile",
        farmer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
      setFarmer(data.user);
      setEditProfile(false);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // if (!farmer) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
          alt="Farmer"
          className="w-28 h-28 mx-auto rounded-full border-4 border-green-500"
        />

        {/* NAME */}
        {editProfile ? (
          <input
            name="name"
            value={farmer.name}
            onChange={handleChange}
            className="mt-4 w-full border px-3 py-2 rounded"
          />
        ) : (
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">
            {farmer.name}
          </h2>
        )}

        <p className="text-sm text-gray-500 mb-4">
          Farmer ID: {farmer._id}
        </p>

        {/* INFO */}
        <div className="text-left space-y-2 text-gray-700">
          <p>
            📞{" "}
            {editProfile ? (
              <input
                name="phone"
                value={farmer.phone}
                onChange={handleChange}
                className="border px-2 rounded w-full"
              />
            ) : (
              farmer.phone
            )}
          </p>

          <p>
            📍{" "}
            {editProfile ? (
              <input
                name="location"
                value={farmer.location}
                onChange={handleChange}
                className="border px-2 rounded w-full"
              />
            ) : (
              farmer.location
            )}
          </p>

          <p>
            🌾{" "}
            {editProfile ? (
              <input
                name="land"
                value={farmer.land}
                onChange={handleChange}
                className="border px-2 rounded w-full"
              />
            ) : (
              farmer.land
            )}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 space-y-3">
          {editProfile ? (
            <button
              onClick={saveProfile}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Save Profile
            </button>
          ) : (
            <button
              onClick={() => setEditProfile(true)}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Edit Profile
            </button>
          )}

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="w-full bg-red-500 text-white py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
