import React, { useState } from 'react'

export default function PasswordInput() {
    const [password, setPassword] = useState("");
    
  return (
    <div>
        <form>
            <label
                htmlFor='password'>Password</label>
            <div>
                <input
                    value={""}
                    id="password"
                    placeholder='password'
                >
                </input>            
            </div>
        </form>    
    </div>
  )
}

