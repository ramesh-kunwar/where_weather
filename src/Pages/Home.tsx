import Sidebar from "../Components/Sidebar/Sidebar";
import MainData from "../Components/MainData/MainData";
import NightImage from "../assets/night.jpg";

const Home = () => {
  return (
    <div
      className="h-[100vh] "
      style={{
        WebkitBackgroundSize: "100%",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${NightImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full mx-8 py-12 flex flex-row justify-center items-center">
        <Sidebar />
        <MainData />
      </div>
    </div>
  );
};

export default Home;
