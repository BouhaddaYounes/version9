const LoginForm = () => {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Bienvenue !!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Bienvenue ! Entrer votre information
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 t-1 bg-transparent"
            placeholder="Entrer votre email"
            type="email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Mot de passe</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 t-1 bg-transparent"
            placeholder="Entrer votre mot de passe"
            type="password"
          />
        </div>
        <div className="mt-8">
          <button className="w-full active:scale-[.98] active:duretion-75 transition-all hover:bg-violet-900 hover:scale-[1.01]  ease-in-out bg-violet-500 text-white text-lg font-bold py-3 rounded-xl">
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;