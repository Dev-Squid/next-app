import Link from "next/link";
import ProductCard from "./components/ProductCard";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] =await response.json();

  return (
    <>
      <h1>Hello World!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </>
  ) 
}

export default UsersPage