import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface User {
  id: number;
  name: string;
}

export default async function MockUsers() {
  const authObject = await auth();
  const userObject = await currentUser();

  console.log(authObject, userObject);

  const response = await fetch("https://685fcee5c55df675589f519b.mockapi.io/users");

  if (!response.ok) throw new Error("Failed to fetch users");

  const users: User[] = await response.json();

  async function addUser(formData: FormData) {
    "use server";

    const name = formData.get("name");

    const response = await fetch("https://685fcee5c55df675589f519b.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const newUser = await response.json();

    revalidatePath("/mock-users");
    console.log({ newUser });
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input type="text" name="name" required className="border p-2 mr-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add user
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-md">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
