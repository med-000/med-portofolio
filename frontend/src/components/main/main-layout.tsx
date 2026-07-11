import { Footer } from "@/components/main/footer";
import { Header } from "@/components/main/header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
