import { notFound } from "next/navigation";

type Prop = {
  params: Promise<{ id: number }>;
};

export default async function Product({ params }: Prop) {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved"), 1000);
  });

  const { id } = await params;

  if (id > 99) {
    notFound();
  }

  if (id < 0){
    throw Error("id cannot be negative")
  }

  return (
    <>
      <p>Product - {id}</p>
    </>
  );
}
