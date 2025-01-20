export default async function Analytics() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 500);
  });
  return <p>Analytics Section</p>;
}
