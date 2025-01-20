'use client'
 
export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Error : Invalid Product id</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}