import { useState } from "react";

function ProfilePage() {

    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');

    const [textarea, setTextarea] = useState(false)

    function handleclick() {
        setTextarea(true)
    }
    function handleclick2() {

        setTextarea(false)
    }
    function handleclick3() {

        setAddress(address)
        let h = true
    }
    return (
        <div  className="Profilebox">
            <h2 className="Head">Profile</h2>
            <h4>Username:</h4>
            <h4>
                Email:
            </h4>
            <h4 style={{ display: 'inline' }}>
                Address:
            </h4>
            {
                textarea !== true &&
                <button
                    onClick={handleclick}
                > @</button>}
            <textarea style={{ display: 'block' }}
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            {
                textarea === true &&

                <><textarea style={{ display: 'block' }}
                    type='text'
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}

                > </textarea>  <button
                    onClick={handleclick2}>#</button>
                </>
            }
            <button
                onClick={handleclick3}
            >Save</button>
        </div>
    )
}

export default ProfilePage;

