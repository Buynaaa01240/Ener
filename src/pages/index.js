import { Search, Bell, Home, BookOpen, User } from 'lucide-react';

export default function MentalHealthPosts() {
  return (
    <div className="min-h-screen bg-white p-4 font-sans pb-[env(safe-area-inset-bottom)]">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Ener</h1>
        <div className="flex space-x-4">
          <Search className="w-5 h-5" />
          <Bell className="w-5 h-5" />
        </div>
      </header>

      <div className="flex mb-4 border-b">
        <button className="flex-1 text-center py-2 border-b-2 border-transparent text-gray-500">Дагасан</button>
        <button className="flex-1 text-center py-2 border-b-2 border-black font-semibold">Бүгд</button>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Сэтгэл"
          className="w-full pl-4 pr-10 py-2 border rounded-full bg-gray-100 focus:outline-none"
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
      </div>

      {['#7dd3fc', '#bbf7d0', '#fde68a'].map((color, index) => (
        <div
          key={index}
          className={`p-4 mb-3 rounded-lg relative`}
          style={{ border: `1px solid ${color}` }}
        >
          <h2 className="font-bold mb-1 text-gray-800">Сэтгэлзүйн Эрүүл Мэндийн Замд Таныг Дэмжиж Байна</h2>
          <p className="text-gray-600 text-sm mb-2">
            Амьдралын өөрчлөлт, стрессийг даван туулах, өөрийгөө илүү сайн ойлгох хүсэлтэй бол...
          </p>
          <p className="text-right text-sm text-gray-400">Ц.Хансүндэр</p>
        </div>
      ))}

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-4 pb-[env(safe-area-inset-bottom)]">
        <Home className="w-6 h-6 text-gray-600" />
        <BookOpen className="w-6 h-6 text-black" />
        <User className="w-6 h-6 text-gray-600" />
        <Bell className="w-6 h-6 text-gray-600" />
      </footer>
    </div>
  );
}
