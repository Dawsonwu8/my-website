import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';

export default function JapanExperience() {
  const navigate = useNavigate();

  const familyImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Happy%20Japanese%20family%20of%204%20having%20fun%20together%20at%20home%2C%20parents%20and%20children%20laughing%20and%20playing%20board%20games%2C%20warm%20and%20cozy%20atmosphere%2C%20natural%20lighting%2C%20harmonious%20family%20scene&sign=56325b858b942246528253e1002d49c6";

  const advantages = [
    {
      title: "高品質生活",
      icon: "fa-solid fa-home",
      items: [
        "世界領先的公共安全",
        "乾淨整潔的環境",
        "高效的公共交通系統",
        "高品質的食品與水"
      ]
    },
    {
      title: "教育資源",
      icon: "fa-solid fa-graduation-cap",
      items: [
        "優質的公立教育系統",
        "國際學校選擇多樣",
        "高等教育資源豐富",
        "注重全面發展的教育理念"
      ]
    },
    {
      title: "醫療保障",
      icon: "fa-solid fa-heart-pulse",
      items: [
        "先進的醫療技術",
        "全民健康保險制度",
        "合理的醫療費用",
        "高水平的醫療服務"
      ]
    },
    {
      title: "經濟機會",
      icon: "fa-solid fa-briefcase",
      items: [
        "穩定的經濟環境",
        "多元的就業機會",
        "創業支援政策",
        "國際企業眾多"
      ]
    }
  ];

  const considerations = [
    "語言障礙 - 日語能力要求",
    "文化差異 - 需要適應期",
    "生活成本 - 大城市較高",
    "移民政策 - 需符合資格"
  ];

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
          <a href="/" className="text-xl font-bold ml-16">沐新株式會社</a>
        </div>
        <LanguageSwitcher />
      </nav>


      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">移民日本的好處與分析</h1>
        
        {/* 家庭圖片 */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="h-96 overflow-hidden rounded-lg relative">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20family%20in%20a%20tatami%20room%2C%20parents%20and%20children%20wearing%20kimonos%2C%20peaceful%20and%20harmonious%20atmosphere%2C%20soft%20lighting%2C%20authentic%20Japanese%20interior&sign=1cdc6a8031d8482179a5ca87b805894d"
              alt="Happy Japanese family"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <h2 className="text-white text-2xl font-bold">在日本建立幸福家庭</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-[#2C3E50]">移民日本的主要優勢</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <i className={`${advantage.icon} text-2xl text-[#D4AF37] mr-3`}></i>
                  <h3 className="text-lg font-semibold text-[#2C3E50]">{advantage.title}</h3>
                </div>
                <ul className="space-y-2">
                  {advantage.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mr-2 mt-1"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">需要考慮的因素</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {considerations.map((item, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <i className="fa-solid fa-exclamation-triangle text-yellow-500 mr-3 mt-1"></i>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">常見移民途徑</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">簽證類型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">要求</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">優勢</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2C3E50]">工作簽證</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">日本公司聘用</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">穩定收入來源</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2C3E50]">經營管理簽證</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">投資500萬日元以上</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">可帶家屬</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2C3E50]">高度人才簽證</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">專業技能/高收入</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">快速獲得永住</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
      <ConsultationButton />
    </div>
  );
}
