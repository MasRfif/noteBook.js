import SideNav from "@/components/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-8">
      <SideNav />
      {children}
    </main>
  );
}
