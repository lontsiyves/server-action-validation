import AddTodoForm from "@/components/AddTodoForm";

const getData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const data = await response.json();
  return data;
};

export default async function Home() {
  const posts = await getData();

  return (
    <main className="h-full max-w-[720px] m-auto flex flex-col justify-center content-center p-10">
      <AddTodoForm />
      <div className="py-4">
        <ul>
          {posts.map((p: any) => {
            return (
              <li className="py-2 text-gray-500" key={p.id}>
                {p.title}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
