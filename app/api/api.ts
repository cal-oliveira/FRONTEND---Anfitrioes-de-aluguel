export async function fetchData() {
  const response = await fetch("http://127.0.0.1:8000/acomodacoes");
  const data = await response.json();
  return data;
}
