interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function UserServer() {
  await new Promise((r) => {
    setTimeout(r, 2000);
  });
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) throw new Error("Failed to fetch users");

  const users: User[] = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li key={user.id} className="p-4 bg-white shadow-md">
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
