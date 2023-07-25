const Header = (props) => {
  return (
    <a
      href="#"
      onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}
    >
      <header>this is header</header>
    </a>
  );
};

export default Header;
