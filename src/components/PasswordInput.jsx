import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import "./PasswordInput.css";

export default function PasswordInput() {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false); 

  return (
    <div>
      <label
        htmlFor="password"
        className="flex self-center mx-8 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Password
      </label>
      <div className="passwordInput">
        <input
          type={visible ? "text" : "password"}
          value={password}
          id="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 text-gray-900 text-sm w-[300px] border-none focus:border-none focus:outline-none"
        ></input>
        <div className="p-2" onClick={() => setVisible(!visible)}>
          {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </div>
      </div>
    </div>
  );
}

