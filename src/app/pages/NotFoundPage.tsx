import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main style={{ minHeight: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: 32, background: "#282F33", color: "#f4f5fc", fontFamily: "Roboto Condensed, sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: 32 }}>Страница не найдена</h1>
      <p>Возможно, ссылка устарела или в адресе есть ошибка.</p>
      <Link to="/" style={{ color: "#ff8a6b", textDecoration: "underline" }}>На главную Skillum</Link>
    </main>
  );
}
