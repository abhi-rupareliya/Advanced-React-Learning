export default async function BookComponent() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("resolced");
      }, 2000);
    });
    return (
      <>
        <ul>
          <li>Book-1</li>
          <li>Book-2</li>
          <li>Book-3</li>
        </ul>
      </>
    );
  }