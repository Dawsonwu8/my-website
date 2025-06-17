import { useParams } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';

const housingStyleData = {
  "japanese-community": {
    title: "宜居的日式社區",
    overview: "傳統日式住宅與現代化設施的完美結合，提供獨特的生活體驗。",
    features: [
      "開放式空間設計",
      "自然材料的使用（木材、紙、竹子）",
      "室內外空間的無縫連接",
      "注重隱私與社區關係"
    ],
    differences: [
      "與華人住宅相比更注重自然採光和通風",
      "更簡約的設計風格，減少不必要的裝飾",
      "更強調與自然環境的和諧",
      "公共空間與私人空間的界限更模糊"
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20house%20interior%20with%20tatami%20mats%20and%20shoji%20screens&sign=9c537b9b461173003aa814730b85cf9e",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20Japanese%20style%20house%20with%20traditional%20elements&sign=9b0b3a192662863fc673dff02e0c95e7"
    ],
    sources: [
      "日本建築學會 - 住宅設計指南",
      "日本國土交通省 - 住宅市場報告"
    ]
  },
  "one-story-house": {
    title: "傳統一戶建",
    overview: "獨立的一戶建住宅是日本傳統居住形式的代表，擁有自己的土地和庭院。",
    features: [
      "完全獨立的居住空間",
      "傳統木結構建築",
      "私人庭院空間",
      "可自由改造的優勢"
    ],
    differences: [
      "與華人公寓相比擁有土地所有權",
      "建築壽命較短但可重建",
      "維護成本較高但自主性強",
      "更注重與自然環境的融合"
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20one-story%20house%20with%20wooden%20structure%20and%20garden&sign=22c6581112d8a2936bb6bd696653dd12",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20family%20living%20in%20one-story%20house%20with%20tatami%20rooms&sign=f8af67c29e0fd5820f429292319460fb"
    ],
    sources: [
      "日本住宅建築協會 - 傳統住宅報告",
      "一戶建居住體驗調查"
    ]
  },
  "modern-apartment": {
    title: "現代日式公寓",
    overview: "結合現代建築技術與日式美學的公寓住宅，提供便利的城市生活。",
    features: [
      "現代化設施與管理",
      "融入日式設計元素",
      "高效的空間利用",
      "完善的公共設施"
    ],
    differences: [
      "與華人公寓相比更注重收納設計",
      "公共區域管理更嚴格",
      "室內設計更簡約實用",
      "更注重隔音與隱私"
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20Japanese%20apartment%20interior%20with%20sleek%20design%20and%20traditional%20elements&sign=7aee01aa7d3f393f9aeeb331507136d9",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20style%20apartment%20building%20with%20clean%20lines%20and%20natural%20materials&sign=0b9498ecd89ac2478ac0b2680587c6d5"
    ],
    sources: [
      "日本公寓管理協會 - 現代住宅報告",
      "都市居住體驗調查"
    ]
  },
  "ryokan": {
    title: "日式旅館體驗",
    overview: "傳統日式旅館展現了日本待客之道與居住文化的精髓。",
    features: [
      "榻榻米房間",
      "溫泉設施",
      "傳統日式料理",
      "細緻的服務"
    ],
    differences: [
      "與華人酒店相比更注重整體體驗",
      "空間設計更開放流動",
      "更強調與自然的連接",
      "服務理念更注重細節"
    ],
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20ryokan%20with%20tatami%20rooms%20and%20onsen&sign=4bdc1baf11daf18a9fb6406652ee6c68",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20ryokan%20dining%20experience%20with%20kaiseki%20meal&sign=7ddad225fde1682aa8d6e271e172a20d"
    ],
    sources: [
      "日本觀光廳 - 傳統旅館指南",
      "日本旅館協會 - 服務標準"
    ]
  }
};

export default function HousingStyleDetail() {
  const { styleName } = useParams();
  const style = housingStyleData[styleName as keyof typeof housingStyleData];

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
          <a href="/" className="text-xl font-bold">沐新株式會社</a>
        </div>
        <LanguageSwitcher />
      </nav>

  

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">{style.title}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">概述</h2>
          <p className="text-gray-700 mb-4">{style.overview}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {style.images.map((image, index) => (
              <div key={index} className="h-64 overflow-hidden rounded-lg">
                <img 
                  src={image}
                  alt={`Japanese style ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2 text-[#2C3E50]">日式住宅特點</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {style.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-[#2C3E50]">與華人住宅差異</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {style.differences.map((diff, index) => (
                  <li key={index}>{diff}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-[#2C3E50]">資料來源</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {style.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
      <ConsultationButton />
    </div>
  );
}