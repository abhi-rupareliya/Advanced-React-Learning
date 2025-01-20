import { Suspense } from "react";
import BookComponent from "./Book";

type Props = {
  // params : Promise<{ id :string}>
  searchParams: Promise<{ search: string , page : number}>;
};

export default async function Book({
  // params,
  searchParams,
}: Props) {
  const { search ,page} = await searchParams;

  return (
    <>
      <p>Books Data</p>
      <p>Search Query: {search}</p>
      <p>Page: {page}</p>
      <Suspense fallback={<p>Loading Books...</p>}>
        <BookComponent />
      </Suspense>
    </>
  );
}
