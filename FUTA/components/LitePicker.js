import { useEffect, useRef } from "react";

export default function LitePickerComponent({ onDateChange }) {
  const dateInputRef = useRef(null);
  const pickerInstance = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && dateInputRef.current && !pickerInstance.current) {
      import("litepicker").then(({ default: Litepicker }) => {
        pickerInstance.current = new Litepicker({
          element: dateInputRef.current,
          format: "DD/MM/YYYY",
          startDate: new Date(),
          singleMode: true,
          minDate: new Date().toISOString().split("T")[0],
          autoApply: true,
          setup: (picker) => {
            picker.on("selected", (date) => {
              // Cập nhật cả state và giá trị input
              const dateString = date.format("DD/MM/YYYY");
              dateInputRef.current.value = dateString; // Trực tiếp cập nhật input
              onDateChange(dateString); // Cập nhật state cha
            });
          }
        });
      });
    }

    return () => {
      pickerInstance.current?.destroy();
    };
  }, [onDateChange]);

  return <input 
    type="text" 
    ref={dateInputRef} 
    className="form-control" 
    name="date" 
    readOnly // Thêm thuộc tính này để tránh xung đột
  />;
}