import { AppSidebar } from "./../../components/app-sidebar-content/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./../../components/header/index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
