import React from 'react'

export default function PasswordInput() {
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

