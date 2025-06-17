export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">沐新株式會社</h3>
            <p className="text-sm opacity-80">日本房地產投資專業顧問</p>
          </div>
          <div className="text-sm opacity-80">
            © {new Date().getFullYear()} 沐新株式會社. 版權所有
          </div>
        </div>
      </div>
    </footer>
  );
}