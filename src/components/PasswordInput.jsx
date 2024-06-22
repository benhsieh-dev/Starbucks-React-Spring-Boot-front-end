import React, { useState } from 'react'

export default function PasswordInput() {
    const [setPassword] = useState("");
    const [visible, setVisible] = useState(true); 

  return (
    <div>       
        <label
            htmlFor='password'>Password</label>
        <div>
            <input
                value={"password"}
                id="password"
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            >
            </input>            
        </div>
    </div>
  )
}

