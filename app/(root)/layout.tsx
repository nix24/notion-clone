import NavBar from "./_components/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavBar />
      <main className="">{children}</main>
    </div>
  );
}