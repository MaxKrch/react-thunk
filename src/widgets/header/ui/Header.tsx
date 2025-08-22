import AppNavigation from "@/entities/app-navigation";
import FilmSearch from "@/features/film-search";

const Header = () => {
  return (
    <header className="flex flex-col gap-3 px-1 py-3">
      <AppNavigation />
      <FilmSearch />
    </header>
  );
};

export default Header;