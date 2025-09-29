import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// ⚠️ Penting: Import CSS untuk DatePicker agar tampilannya berfungsi
import 'react-datepicker/dist/react-datepicker.css';

// Kelas Tailwind untuk styling input
const inputStyle = "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

export default function DateTimePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect // Aktifkan pemilihan waktu
        timeFormat="HH:mm" // Format waktu (24 jam)
        timeIntervals={15} // Interval waktu (per 15 menit)
        dateFormat="dd/MM/yyyy h:mm aa" // Format tanggal dan waktu
        customInput={<input className={inputStyle} />} // Gunakan custom input dengan kelas Tailwind
        className="text-gray-900" // Tambahkan kelas untuk DatePicker
      />
      <p className="mt-4 text-sm text-gray-500">
        Tanggal dan waktu yang dipilih: {startDate.toString()}
      </p>
    </div>
  );
}