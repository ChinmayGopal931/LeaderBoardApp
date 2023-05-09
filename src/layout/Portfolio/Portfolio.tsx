import LayoutHeader from "components/UI/LayoutHeader/LayoutHeader";

const MyPortfolio = () => {
  const handleSubmit = async () => {
    //THIS IS A HARDCODED POST IDEALLY SHOULD BE IN API FOLDER
    fetch("http://localhost:8000/api/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "1tfjiELNrwYAJeafRYlT9RwOI22",
        name: "New User",
        position: 5,
        predicted: 3,
        points: 19,
        rank: 1,
        avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="page-container ">
      <LayoutHeader
        title="Create User"
        description="Get exposure to a wide variety of community-generated yield
        opportunities, including passive and active strategies, thematic
        indices, and more."
      />
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col flex-grow">
          <div className="rounded-xl flex-row bg-ui_surface_opc shadow-lg w-full flex pt-4 px-4 pb-4 box-border">
            <div className="flex flex-row md:flex-row items-center justify-between mr-10">
              <label
                htmlFor="name"
                className="text-white mb-2 md:mb-0 md:mr-10"
              >
                Name:
              </label>
            </div>

            <input
              type="text"
              id="name"
              placeholder="Enter text here"
              className="bg-ui_surface_opc rounded-lg w-full md:w-1/2 h-[50px] px-4 py-2 border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex flex-row md:flex-row items-center justify-between ml-10">
              <button
                className="bg-ui_surface_opc rounded-lg w-full md:w-1/2 h-[50px] px-4 py-2 border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onClick={async () => await handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
