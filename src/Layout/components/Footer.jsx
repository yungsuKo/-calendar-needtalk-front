const Footer = (props) => {
  return (
    <footer>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </footer>
  );
};

export default Footer;
