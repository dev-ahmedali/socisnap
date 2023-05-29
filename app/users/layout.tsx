import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //@ts-expect-error Server Components
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
