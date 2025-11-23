import React, { useState } from 'react';
import { ClockIcon, SparklesIcon, XCircleIcon, ArrowPathIcon, CheckIcon } from '@heroicons/react/24/solid';

// กำหนดสีและสไตล์ตามภาพ
const primaryBg = 'bg-[#B0C4DE]'; // พื้นหลังหลักสี Light Steel Blue (จากโค้ดที่คุณให้มา)
const contentBg = 'bg-white';
// ใช้สีชมพูอ่อนสำหรับปุ่มรีเซ็ตด้วยตนเองตามภาพที่แนบมา
const manualResetButtonColor = 'bg-pink-400 hover:bg-pink-500';
const cardColor = 'bg-amber-50'; // สีเหลืองอ่อนสำหรับกล่องตัวเลือกสนามและกล่องรีเซ็ตด้วยตนเอง

const AdminPage = () => {
  // State สำหรับฟังก์ชันตั้งค่าการรีเซ็ตอัตโนมัติ
  const [isAutoResetEnabled, setIsAutoResetEnabled] = useState(false);
  const [resetTime, setResetTime] = useState('00:00'); // เวลาเริ่มต้นเป็น 00:00

  // ข้อมูลสนาม (Court data)
  const courtOptions = [
    { name: 'แบดมินตัน', icon: '🏸' },
    { name: 'บาสเกตบอล', icon: '🏀' },
    { name: 'เทนนิส', icon: '🎾' },
    { name: 'วอลเลย์บอล', icon: '🏐' },
  ];

  const handleToggleReset = () => {
    setIsAutoResetEnabled(!isAutoResetEnabled);
  };

  const handleTimeChange = (e) => {
    setResetTime(e.target.value);
  };

  const handleSaveSettings = () => {
    // ฟังก์ชันสำหรับปุ่มบันทึกการตั้งค่าหลัก (ที่ไม่ได้แสดงในโค้ดที่คุณให้มา แต่ควรมี)
    console.log(`สถานะรีเซ็ตอัตโนมัติ: ${isAutoResetEnabled ? 'เปิด' : 'ปิด'}`);
    if (isAutoResetEnabled) {
      console.log(`เวลารีเซ็ต: ${resetTime} น.`);
    }
    alert(`บันทึกการตั้งค่าแล้ว!`);
  };

  const handleManualReset = () => {
    const isConfirmed = window.confirm(
      'คุณแน่ใจหรือไม่ที่จะรีเซ็ตการจองทั้งหมด? การดำเนินการนี้ไม่สามารถยกเลิกได้!'
    );
    if (isConfirmed) {
      console.log('ทำการรีเซ็ตการจองทั้งหมดด้วยตัวเองแล้ว');
      // **TODO:** เพิ่ม API call ไปยัง Backend เพื่อทำการรีเซ็ตข้อมูลการจองทั้งหมด
      alert('รีเซ็ตการจองทั้งหมดเรียบร้อยแล้ว');
    }
  };

  return (
    <div className={`min-h-screen ${primaryBg} p-8`}>
      <div className={`max-w-7xl mx-auto ${contentBg} p-8 rounded-lg shadow-xl`}>
        {/* ส่วน Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800">
              สวัสดี, <span className="text-red-500">ผู้ดูแล!</span>
            </h1>
            <p className="text-gray-500 mt-1">ตั้งค่าระบบการจอง</p>
          </div>
          {/* ปุ่มบันทึกการตั้งค่าหลัก */}
          
        </div>

        {/* --- */}

        
        {/* ส่วนตั้งค่าระบบ */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          ⚙️ ตั้งค่าระบบ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. กล่องตั้งค่าการรีเซ็ตอัตโนมัติ */}
          <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-4 pb-4 border-b">
              <h3 className="text-lg font-bold text-gray-800 flex items-center">
                <SparklesIcon className="w-5 h-5 text-indigo-500 mr-2" />
                ตั้งค่าการรีเซ็ตอัตโนมัติ
              </h3>
              <label className="flex items-center cursor-pointer">
                <span className="mr-3 text-sm font-medium text-gray-900">
                  {isAutoResetEnabled ? 'เปิด' : 'ปิด'}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isAutoResetEnabled}
                    onChange={handleToggleReset}
                  />
                  <div
                    className={`block w-14 h-8 rounded-full transition duration-300 ease-in-out ${
                      isAutoResetEnabled ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  ></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition duration-300 ease-in-out transform ${
                      isAutoResetEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </div>
              </label>
            </div>

            {/* การตั้งค่าเวลาจะแสดงเมื่อเปิดใช้งานเท่านั้น */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isAutoResetEnabled ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 border border-indigo-200 rounded-lg bg-indigo-50">
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  <ClockIcon className="w-4 h-4 inline mr-1" />
                  ตั้งค่าเวลารีเซ็ตในทุกๆ วัน
                </p>
                <div className="flex items-center">
                  <input
                    type="time"
                    value={resetTime}
                    onChange={handleTimeChange}
                    className="p-2 border border-indigo-300 rounded-md text-lg font-mono focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                  <span className="ml-3 text-sm text-gray-600 hidden sm:inline">
                    (ระบบจะรีเซ็ตสถานะการจองทั้งหมดเป็น 'ว่าง' ในเวลานี้ของทุกวัน)
                  </span>
                </div>
              </div>
            </div>

            {!isAutoResetEnabled && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 flex items-center">
                <XCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <p className="text-sm">การรีเซ็ตอัตโนมัติถูก **ปิด** อยู่ สนามจะไม่ถูกรีเซ็ตหากไม่มีการรีเซ็ตด้วยตนเอง</p>
              </div>
            )}
          </div>

          {/* 2. กล่องรีเซ็ตด้วยตัวเอง (Manual Reset) - เพิ่มใหม่ตามคำขอ */}
          <div className={`p-6 rounded-lg ${cardColor} border border-yellow-300 shadow-md`}>
            <h3 className="text-lg font-bold text-gray-800 flex items-center mb-1">
              <ArrowPathIcon className="w-5 h-5 text-gray-700 mr-2" />
              รีเซ็ตด้วยตัวเอง
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              ลบการจองทั้งหมดในระบบทันที (กู้คืนไม่ได้)
            </p>
            <button
              onClick={handleManualReset}
              className={`text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 ${manualResetButtonColor}`}
            >
              รีเซ็ตการจองทั้งหมดตอนนี้
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminPage;