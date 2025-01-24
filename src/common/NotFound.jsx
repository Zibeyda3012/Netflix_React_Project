import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); 
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">The page you are looking for does not exist.</p>
            <button 
                className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                onClick={handleGoBack}
            >
                Go Back
            </button>
        </div>
    );
}

export default NotFound