import { useState } from 'react';

export default function ContactPage() {

    const formData = {
        name: '',
        email: '',
        message: ''
    };

    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        
        const { id, value } = e.target;

        setData({
            ...data,
            [id]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thanks for submitting your message ${data.name}`);
        setData(formData);
    };

    return (
        <div className="container text-center">
      
        <form onSubmit={handleFormSubmit}>
            <div className="form">
                <label htmlFor="textarea1">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id= "name"
                    onChange={handleInputChange}
                    value={data.name}
                    placeholder="Enter your name"
                />
            </div>
            <div className="form">
                <label htmlFor="textarea1">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id= "email"
                    onChange={handleInputChange}
                    value={data.email}
                    placeholder="Enter your email addressm"
                />
            </div>
            <div className="form">
                <label htmlFor="textarea1"> Message </label>
                <textarea
                    className="form-control"
                    id= "message"
                    rows= "3"
                    onChange={handleInputChange}
                    value={data.message}
                    placeholder="e.g. John Doe"
                ></textarea>
            </div>
        <button type="submit" className='btn btn-primary'>
            Submit
        </button>
        </form>
    </div>
    );
}

