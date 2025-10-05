import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
            navigate('/LandingPage')
        }, 6000)

        return () => clearTimeout(timeoutId)
    }, [navigate])

    if (!isLoading) {
        return null
    }

    return (
        <div>
            <div
                className="w-[100%] h-screen gap-1 pt-40 pb-40 relative flex items-center justify-center bg-black"
            >
                <div
                    className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]"
                >
                    <div className="w-1 h-6 bg-green-500"></div>
                    <div className="w-3 h-12 bg-green-500 rounded-sm"></div>
                    <div className="w-1 h-6 bg-green-500"></div>
                </div>

                <div
                    className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.2s]"
                >
                    <div className="w-1 h-6 bg-red-500"></div>
                    <div className="w-3 h-12 bg-red-500 rounded-sm"></div>
                    <div className="w-1 h-6 bg-red-500"></div>
                </div>

                <div
                    className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]"
                >
                    <div className="w-1 h-6 bg-green-500"></div>
                    <div className="w-3 h-12 bg-green-500 rounded-sm"></div>
                    <div className="w-1 h-6 bg-green-500"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader