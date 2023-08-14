import { useNavigate } from "react-router-dom";

const WelcomePage1 = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/Walkthrough1");
  }, 3000);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <img
          src="https://i.ibb.co/LkmD31Q/cropped-logo-solo-natura-upscaled-1.png"
          alt="welcome"
        />
      </div>
    </>
  );
};

export default WelcomePage1;
