export function Header(props) {
  return (
    <header>
      <img src={props.img} alt="Me" />
      <section id="adress">{props.adress}</section>
      <section id="social-media">{props.social}</section>
    </header>
  );
}
