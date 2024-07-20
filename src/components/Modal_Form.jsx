import React, { useState } from 'react'

const Modal_Form = () => {
    const [name, setName] = useState(null);
    const [myEmail, setMyEmail] = useState(null);
    const [friendName, setFriendName] = useState(null);
    const [friendEmail, setFriendEmail] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            setFormData({
                userName: name,
                userEmail: myEmail,
                friendName: friendName,
                friendEmail: friendEmail
            });
            console.log(formData);
            const res = await fetch('https://accredian-backend-task-vixj.onrender.com/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button ></button> */}

            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_2').showModal()}>Refer Now</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div>
                        <div className="hero bg-base-200">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="text-center lg:text-left">
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/app-referral-reward-3318541-2785622.png?f=webp" alt='HomeIllustration' />
                                </div>
                                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input type="email" placeholder="Your Email" onChange={(e) => setMyEmail(e.target.value)} className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input type="fullName" placeholder="Full Name" onChange={(e) => setName(e.target.value)} className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Friend's Name</span>
                                            </label>
                                            <input type="text" placeholder="Friend's Name" onChange={(e) => setFriendName(e.target.value)} className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Friend's Email</span>
                                            </label>
                                            <input type="email" placeholder="Friend's Email" onChange={(e) => setFriendEmail(e.target.value)} className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-info" onClick={handleClick}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default Modal_Form