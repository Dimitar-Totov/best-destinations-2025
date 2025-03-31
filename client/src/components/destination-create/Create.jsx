import { useNavigate } from "react-router";

import { useCreateDestination } from "../../api/destinationsApi";

import useSetError from "../../hooks/useSetError";
import useStateHook from "../../hooks/useStateHook";

import video from '../../assets/videos/createPage.mp4'

export default function Create() {

  const navigate = useNavigate();
  const { create } = useCreateDestination();
  const [error, setError] = useSetError(null)
  const [inputData, setInputData] = useStateHook({
    country: '',
    town: '',
    name: '',
    imageUrl: '',
    seasons: '',
    description: '',
  });

  const changeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      await create(inputData.country, inputData.town, inputData.name, inputData.imageUrl, inputData.seasons, inputData.description);
      navigate('/destinations');
    } catch (err) {

      setError(err.message);

      setTimeout(() => {

        setError(null);
      }, 6000);
    }
  }

  return (
    <div className="relative h-screen bg-gray-200 blue:bg-blue-500">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="mt-20 container bg-gray-100 w-150 p-8 shadow-lg rounded-lg font-style: italic">

          {error && (
            <div className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
              <svg className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={formSubmitHandler}>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700">Country</label>
              <input
                value={inputData.country}
                onChange={changeHandler}
                type="text"
                name="country"
                id="country"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., France"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="town" className="block text-gray-700">Town</label>
              <input
                value={inputData.town}
                onChange={changeHandler}
                type="text"
                name="town"
                id="town"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., Paris"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                value={inputData.name}
                onChange={changeHandler}
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., Eiffel Tower"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700">Image url</label>
              <input
                value={inputData.imageUrl}
                onChange={changeHandler}
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="w-full px-4 py-2 border rounded"
                placeholder="Url address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Best season to visit</label>
              <select id="countries" name="seasons" value={inputData.seasons} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="All seasons">All seasons</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Description</label>
              <textarea
                value={inputData.description}
                onChange={changeHandler}
                name="description"
                id="description"
                rows="6"
                className="w-full px-4 py-2 border rounded resize-y"
                placeholder="e.g., The Eiffel Tower is a wrought-iron lattice tower..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
