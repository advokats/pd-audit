interface BurgerMenuProps {
  isOpen: boolean;
  burgerMenuHandler: () => void;
}

const BurgerMenu = ({ isOpen, burgerMenuHandler }: BurgerMenuProps) => (
  <button
    className="xs:flex relative h-6 w-6 cursor-pointer
      items-center justify-center md:hidden"
    onClick={burgerMenuHandler}
  >
    {isOpen ? (
      <svg fill="#FFFFFF" width="24" height="24" viewBox="0 0 50 50">
        <path
          d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875
            40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L
            43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375
            6.3125 L 25 22.15625 Z"
        />
      </svg>
    ) : (
      <svg fill="#FFFFFF" width="24" height="24" viewBox="0 0 50 50">
        <path
          d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L
           50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
        />
      </svg>
    )}
  </button>
);

export default BurgerMenu;
