// app/owner/layout.tsx
import OwnerSidebar from "../../components/OwnerSidebar";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <OwnerSidebar />
      
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}