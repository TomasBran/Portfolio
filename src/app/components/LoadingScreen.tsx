const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-slate-700 border-t-slate-200 rounded-full animate-spin" />

        <span className="text-slate-400 text-sm animate-pulse">
          Loading my Portfolio...
        </span>
        <span className="text-slate-400 text-sm animate-pulse">
          Cargando mi Portfolio...
        </span>
        <span className="text-slate-400 text-sm animate-pulse">
          Caricamento del mio Portfolio...
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
