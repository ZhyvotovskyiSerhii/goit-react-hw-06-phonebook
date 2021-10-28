import { CSSTransition } from "react-transition-group";
import "./styles.css";
export default function Section({ title, children }) {
  return (
    <div className="container">
      <CSSTransition appear in timeout={500} classNames="title">
        <h2 className="title">{title}</h2>
      </CSSTransition>
      {children}
    </div>
  );
}
