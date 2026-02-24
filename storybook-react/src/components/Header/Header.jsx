import "./Header.css";

export default function Header({ title, subtitle, showButton, buttonLabel }) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {showButton && <button>{buttonLabel}</button>}
    </header>
  );
}