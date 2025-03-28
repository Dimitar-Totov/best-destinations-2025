import useAuth from "../../hooks/useAuth"

export default function Profile() {

    const { username, email } = useAuth()

    return (
        <div className="h-screen bg-gray-200 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden pt-16 relative">
                <div className="absolute h-0 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        className="h-28 w-28 bg-white p-2 rounded-full border-4 border-gray-300 shadow-md m-3"
                        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                        alt="User Profile"
                    />
                </div>

                <div className="text-center p-6 mt-12">
                    <h2 className="text-gray-800 dark:text-white text-2xl font-semibold">{username}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 inline-block transition duration-300">
                        {email}
                    </p>
                </div>
            </div>
        </div>
    )
}