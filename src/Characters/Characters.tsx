import { ArrowLeft, UserRoundPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark w-screen h-screen flex flex-col items-center justify-between">
      <ArrowLeft
        className="absolute left-0 top-0 text-textLight dark:text-textDark"
        size={60}
        onClick={() => navigate(-1)}
      />
      <div>
        <h1 className="text-4xl text-textLight dark:text-textDark mt-20">
          Personagens
        </h1>
      </div>
      <div className="mb-10">
        <button
          className="bg-primaryLight dark:bg-primaryDark text-2xl p-5 rounded-4xl flex items-center cursor-pointer"
          onClick={() => navigate("/characters/create")}
        >
          <UserRoundPlus size={40} />
          Criar personagem
        </button>
      </div>
    </div>
  );
};

export default Characters;
