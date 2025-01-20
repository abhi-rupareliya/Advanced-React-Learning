export default function Layout({
  children,
  teams,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  teams: React.ReactNode;
}) {
  return (
    <>
      {children}
      {teams}
      {analytics}
    </>
  );
}
