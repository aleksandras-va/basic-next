interface Params {
  params: Promise<{ id: string }>;
}

export default async function About({ params }: Params) {
  const { id } = await params;

  return <div>Product {id}</div>;
}
