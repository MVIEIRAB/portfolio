import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-6 pt-24 pb-16 max-w-5xl">
        {children}
      </main>
      <Footer />
    </div>
  );
} 