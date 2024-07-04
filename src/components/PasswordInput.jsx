import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export default function PasswordInput() {
    const [setPassword] = useState("");
    const [visible, setVisible] = useState(false); 

  return (
    <div>
      <label
        htmlFor="password"
        className="flex self-center mx-8 block mb-2 text-sm font-medium"
      >
        Password
      </label>
      <div className="flex justify-between items-center shadow-sm bg-gray-50 border mx-8 border-gray-300 text-sm font-medium">
        <input
          value={"password"}
          type={visible ? "text" : "password"}
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className='bg-gray-200 text-gray-900 text-sm w-[300px] border-none focus:border-none
          '
        ></input>
        <div className="p-2">
          {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </div>
      </div>
    </div>
  );
}

