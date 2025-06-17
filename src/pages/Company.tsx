import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';

export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-noto">
      <nav className="bg-[#2C3E50] text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => window.history.back()}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-[#2C3E50] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1E2B37] transition-colors z-50"
            aria-label="返回上一頁"
          >
            <i className="fa-solid fa-arrow-left text-xl"></i>
          </button>
          <button onClick={() => navigate('/')} className="text-xl font-bold ml-16">沐新株式會社</button>
        </div>
        <LanguageSwitcher />
      </nav>


      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">公司介紹</h1>
        

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">關於我們</h2>
          <p className="text-gray-700 mb-4">
            沐新株式會社成立於2010年，是日本政府認證的專業房地產投資顧問機構。我們擁有超過50人的專業團隊，其中包含15位日本在地資深顧問，累計服務超過1000位客戶，管理資產規模達500億日元。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-[#F5F5F5] p-4 rounded-lg">
              <h3 className="font-bold text-[#D4AF37] mb-2">專業認證</h3>
              <ul className="space-y-2">
                <li>• 日本不動產協會認證</li>
                <li>• 國際地產投資顧問資格</li>
                <li>• 日本稅務師協會會員</li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-4 rounded-lg">
              <h3 className="font-bold text-[#D4AF37] mb-2">服務項目</h3>
              <ul className="space-y-2">
                <li>• 日本房地產投資諮詢</li>
                <li>• 物業管理服務</li>
                <li>• 稅務與法律諮詢</li>
                <li>• 投資組合管理</li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-4 rounded-lg">
              <h3 className="font-bold text-[#D4AF37] mb-2">成功案例</h3>
              <ul className="space-y-2">
                <li>• 東京港區高級公寓投資</li>
                <li>• 大阪民宿經營專案</li>
                <li>• 京都傳統町屋改造</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#2C3E50] text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4">為什麼選擇我們？</h3>
            <p className="mb-4">我們提供從選房、購房到後期管理的全程一站式服務，確保您的投資安全與收益。</p>
            <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#C19B2E] transition-colors">
              立即預約專業諮詢
            </button>
          </div>
        </div>
  
      </main>

      <Footer />
      <ConsultationButton />
    </div>
  );
}
