import AppNavigation from "@/entities/app-navigation";
import FilmSearch from "@/features/film-search";

const Header = () => {
  return (
    <header className="">
      <div className="">
        <AppNavigation />
      </div>
      
      <div className="">
        <FilmSearch />
      </div>
    </header>
  );
};

export default Header;