import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Characters = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex flex-col items-center ">
      <ArrowLeft
        className="absolute left-0 top-0 text-textLight dark:text-textDark"
        size={60}
        onClick={() => navigate(-1)}
      />
      <h1 className="text-5xl text-textLight dark:text-textDark">
        Personagens
      </h1>
    </div>
  );
};

export default Characters;
