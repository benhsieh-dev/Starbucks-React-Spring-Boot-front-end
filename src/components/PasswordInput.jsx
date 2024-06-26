import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export default function PasswordInput() {
    const [setPassword] = useState("");
    const [visible, setVisible] = useState(false); 

  return (
    <div>       
        <label
            htmlFor='password'>Password</label>
        <div>
            <input
                value={"password"}
                type={visible ? "text" : "password"}
                id="password"
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            >
            </input>            
        </div>
    </div>
  )
}

