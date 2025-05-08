import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { initializeBlocks } from "@/utils/blocks";

export default function CreateBlocks() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    blocksNumber: "",
    floorsPerBlock: "",
    roomsPerFloor: "",
    maxStudents: ""
  });
  const [initialFormData, setInitialFormData] = useState({...formData});
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if form is dirty
  useEffect(() => {
    const formChanged = Object.keys(formData).some(
      (key) => formData[key] !== "" && formData[key] !== initialFormData[key]
    );
    setIsDirty(formChanged);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isDirty) return;

    setIsSubmitting(true);

    try {
      const numericData = {
        numberofBlocks: Number(formData.blocksNumber),
        floors: Number(formData.floorsPerBlock),
        roomsPerFloor: Number(formData.roomsPerFloor),
        RoomsCapacity: Number(formData.maxStudents)
      };

      console.log(numericData);
      await initializeBlocks(numericData);
      router.push("/blocks");
    } catch (error) {
      console.error("Creation error:", error);
      if (error.message.includes("authenticated")) {
        window.location.href = "/login"; 
      } else {
        alert(error.message || "Creation failed");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1 h-full">
      {/* Blocks Number Input */}
      <label className="flex">
        <div className="w-86">
          <p className="text-xl font-bold">Blocks number</p>
          <p className="text-xs text-[var(--g-color)]">Number of blocks in your dorm</p>
        </div>
        <input
          name="blocksNumber"
          type="number"
          placeholder="ex: 12"
          value={formData.blocksNumber}
          onChange={handleChange}
          className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
        />
      </label>

      <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25 my-4"></div>

      {/* Floors per Block Input */}
      <label className="flex">
        <div className="w-86">
          <p className="text-xl font-bold">Floors per block</p>
          <p className="text-xs text-[var(--g-color)]">Floors in each block</p>
        </div>
        <input
          name="floorsPerBlock"
          type="number"
          placeholder="ex: 5"
          value={formData.floorsPerBlock}
          onChange={handleChange}
          className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
        />
      </label>

      <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25 my-4"></div>

      {/* Rooms per Floor Input */}
      <label className="flex">
        <div className="w-86">
          <p className="text-xl font-bold">Rooms per floor</p>
          <p className="text-xs text-[var(--g-color)]">Rooms on each floor</p>
        </div>
        <input
          name="roomsPerFloor"
          type="number"
          placeholder="ex: 14"
          value={formData.roomsPerFloor}
          onChange={handleChange}
          className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
        />
      </label>

      <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25 my-4"></div>

      {/* Max students Input */}
      <label className="flex">
        <div className="w-86">
          <p className="text-xl font-bold">Max students per room</p>
          <p className="text-xs text-[var(--g-color)]">Capacity per room</p>
        </div>
        <input
          name="maxStudents"
          type="number"
          placeholder="ex: 4"
          value={formData.maxStudents}
          onChange={handleChange}
          className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
        />
      </label>

      <div className="ml-auto mt-auto">
        <button
          onClick={handleSubmit}
          disabled={!isDirty || isSubmitting}
          className={`text-[var(--w-color)] px-6 py-2 rounded-md transition bg-[var(--green-color)] ${
            !isDirty || isSubmitting
              ? "cursor-not-allowed brightness-80"
              : "cursor-pointer shadow hover:brightness-110"
          }`}
        >
          {isSubmitting ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}