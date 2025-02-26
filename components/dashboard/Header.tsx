import { useFormStore } from "@/lib/store";

const Header = () => {
  const { companyName } = useFormStore((state) => state);
  return (
    <div className="top-0 z-20 flex items-center gap-smallest bg-backgroundPrimary p-small md:sticky">
      <img src="/logo.svg" alt="logo" height="57" width="56" className="w-9" />
      <h1 className="text-darkSecondary dark:text-lightSecondary">
        {companyName} Cover letter
      </h1>
    </div>
  );
};

export default Header;
