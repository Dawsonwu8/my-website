import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';


// Mock数据
const marketTrendData = [
  { date: '2024-01', value: 100 },
  { date: '2024-02', value: 105 },
  { date: '2024-03', value: 110 },
  { date: '2024-04', value: 108 },
  { date: '2024-05', value: 115 },
];

const cityIndexData = [
  { city: '東京', index: 105, change: 2.5 },
  { city: '大阪', index: 98, change: 1.8 },
  { city: '名古屋', index: 92, change: 1.2 },
  { city: '福岡', index: 88, change: 0.9 },
];

const regionOverviewData = [
  {
    region: '東京',
    description: '日本首都，經濟中心，房價穩定上漲，租金收益率約4-5%',
    highlight: '國際化程度高，租賃需求旺盛'
  },
  {
    region: '大阪',
    description: '關西經濟中心，商業發達，房價相對東京低，租金收益率約5-6%',
    highlight: '旅遊業發達，民宿投資潛力大'
  },
  {
    region: '名古屋',
    description: '中部工業中心，製造業發達，房價平穩，租金收益率約4.5-5.5%',
    highlight: '工業區周邊租賃需求穩定'
  },
  {
    region: '福岡',
    description: '九州門戶，經濟增長快，房價較低，租金收益率約5-6.5%',
    highlight: '亞洲門戶，新興投資熱點'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % marketTrendData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F5F0] font-noto bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=subtle%20japanese%20washi%20paper%20texture%2C%20light%20beige%20background%20with%20very%20faint%20traditional%20japanese%20patterns%2C%20minimalist%20design%2C%20soft%20and%20warm%20tones&sign=5f033212a5705ffc9b91678982a5e314')] bg-fixed bg-cover bg-opacity-10">
      {/* 背景裝飾元素 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 opacity-20">
          <img 
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=traditional%20japanese%20sakura%20branch%20illustration%2C%20minimalist%20style%2C%20pink%20and%20white%20colors%2C%20transparent%20background&sign=c0b4dfb27497b1fbd7c91970359802f9" 
            alt="Japanese sakura decoration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>



      {/* 顶部导航栏 - 日式风格 */}
      <nav className="bg-[#8B5A2B] text-white p-4 flex justify-between items-center shadow-md">
        <Link to="/company" className="flex items-center group">
          <div className="w-10 h-10 mr-3 transition-transform group-hover:scale-110">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=minimalist%20japanese%20style%20logo%20for%20real%20estate%20company%2C%20using%20gold%20and%20dark%20brown%20colors%2C%20clean%20and%20professional&sign=5bae5048074dbf0ca6b640adfe7fc04e" 
              alt="沐新株式會社 Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-xl font-bold tracking-wider group-hover:text-[#D4AF37] transition-colors">沐新株式會社</div>
        </Link>
        <LanguageSwitcher />
      </nav>

      {/* 快速導航欄 */}
      <div className="bg-[#5A3921] text-white">
        <div className="container mx-auto px-4 py-2 flex overflow-x-auto">
          <a href="#region-overview" className="px-4 py-1 whitespace-nowrap hover:bg-[#8B5A2B] rounded transition-colors">日本各地房地產概述</a>
          <a href="#market-analysis" className="px-4 py-1 whitespace-nowrap hover:bg-[#8B5A2B] rounded transition-colors">市場分析</a>
          <a href="#housing-styles" className="px-4 py-1 whitespace-nowrap hover:bg-[#8B5A2B] rounded transition-colors">日式建築特色</a>
          <a href="#japan-experience" className="px-4 py-1 whitespace-nowrap hover:bg-[#8B5A2B] rounded transition-colors">移民日本</a>
        </div>
      </div>
  

  

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* 公司簡介 - 和風卡片 */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-8 mb-8 border border-[#E8D8C8] backdrop-blur-sm transform transition-all hover:scale-[1.005] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20japanese%20office%20building%20in%20tokyo%2C%20glass%20facade%2C%20blue%20sky%20background%2C%20professional%20but%20friendly%20atmosphere&sign=85887d461bd2e2e6e6f0a9355b72ff12" 
              alt="Japanese office"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#5A3921]">沐新株式會社</h1>
          <p className="text-lg mb-6 text-[#5A3921]/90 leading-relaxed">日本房地產投資專業顧問，成立於2010年，專注於為客戶提供日本各地優質房產投資機會。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "專業團隊", desc: "10年以上經驗的在地專家" },
              { title: "服務範圍", desc: "全日本主要城市房產投資" },
              { title: "成功案例", desc: "500+客戶滿意投資經驗" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-[#E8D8C8] hover:shadow-md transition-all">
                <h3 className="font-bold mb-2 text-lg text-[#8B5A2B]">{item.title}</h3>
                <p className="text-[#5A3921]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

          {/* 日本各地房產概況 */}
          <div className="mb-8" id="region-overview">
            <h2 className="text-2xl font-bold text-[#5A3921] mb-6 border-b border-[#E8D8C8] pb-2">日本各地房地產概況</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  city: 'tokyo',
                  title: '東京 - 現代與傳統的融合',
                  imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beautiful%20Tokyo%20skyline%20at%20sunset%20with%20cherry%20blossoms%20in%20foreground%2C%20traditional%20and%20modern%20architecture%20mix%2C%20warm%20colors&sign=d37ff7412c23a469fd2d27e083950ec9'
                },
                {
                  city: 'osaka',
                  title: '大阪 - 商業與美食之都',
                  imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Osaka%20Dotonbori%20canal%20with%20neon%20lights%20and%20crowds%2C%20vibrant%20night%20scene&sign=19cbffd9a41daa832365e80815a78e3f'
                },
                {
                  city: 'kyoto',
                  title: '京都 - 傳統文化之都',
                  imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Kyoto%20traditional%20street%20with%20old%20wooden%20houses%20and%20cherry%20blossoms%2C%20serene%20atmosphere&sign=be43b63659e16e0aa731fad79cfafca0'
                },
                {
                  city: 'nagoya',
                  title: '名古屋 - 中部工業中心',
                  imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Nagoya%20city%20skyline%20with%20modern%20buildings%20and%20industrial%20area%2C%20professional%20atmosphere&sign=d28e64c671f70484a7be83bffae30043'
                },
                {
                  city: 'fukuoka',
                  title: '福岡 - 九州門戶',
                  imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fukuoka%20city%20with%20modern%20buildings%20and%20Hakata%20Bay%2C%20vibrant%20urban%20scene&sign=a8c5660732705d3214d44b0c2f4a546b'
                },
                {
                  city: 'sapporo',
                  title: '札幌 - 北方明珠',
                  imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sapporo%20winter%20scene%20with%20snow%20covered%20streets%20and%20illuminated%20buildings&sign=1353de824c03de3c956270bdd3c9ba50'
                }
              ].map((city, index) => (
                <Link 
                  key={index}
                  to={`/city/${city.city}`}
                  className="h-80 overflow-hidden rounded-lg relative group"
                >
                  <img 
                    src={city.imageUrl}
                    alt={city.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">{city.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        {/* 市場分析 */}
        <div className="mb-8" id="market-analysis">
          <h2 className="text-2xl font-bold text-[#5A3921] mb-6 border-b border-[#E8D8C8] pb-2">市場分析</h2>
          

          
          {/* 快速导航 - 圖片按鈕 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                text: "投資指南", 
                href: "/guide",
                imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Japanese%20investment%20guidebook%20with%20gold%20accents%2C%20traditional%20washi%20paper%20texture%2C%20elegant%20and%20professional&sign=f3df1e0cb924c14adff07381ab3ce36b"
              },
              { 
                text: "地區分析", 
                href: "/region",
                imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20city%20map%20with%20highlighted%20districts%2C%20minimalist%20design%2C%20soft%20colors%20with%20gold%20accents&sign=dbd498c17da1eb6ebd6de77184cbe805"
              },
              { 
                text: "房產類型", 
                href: "/property-type",
                imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Different%20types%20of%20Japanese%20houses%20collage%2C%20modern%20and%20traditional%20mix%2C%20soft%20colors%20with%20gold%20accents&sign=f4e425e7457aea503e1b73ce4c45d361"
              }
            ].map((btn, index) => (
              <a 
                key={index}
                href={btn.href}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-40"
              >
                <img 
                  src={btn.imageUrl}
                  alt={btn.text}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-xl font-bold tracking-wider">{btn.text}</span>
                </div>
              </a>
            ))}
          </div>
          
          {/* 市场趋势图表 - 和風設計 */}
          <div className="bg-white/90 rounded-xl shadow-md p-6 mb-8 border border-[#E8D8C8]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#5A3921]">市場趨勢</h2>
              <button 
                className="text-sm text-[#8B5A2B] hover:underline flex items-center"
                onClick={() => {
                  alert('市場趨勢依據：\n1. 數據來源：日本國土交通省公開數據\n2. 計算方法：基於主要城市房價指數加權平均\n3. 更新頻率：每月更新\n4. 基準值：2020年1月=100');
                }}
              >
                <i className="fa-solid fa-circle-info mr-1"></i> 數據說明
              </button>
            </div>
             <div className="h-80">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={marketTrendData}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#E8D8C8" />
                   <XAxis 
                     dataKey="date" 
                     stroke="#5A3921" 
                     label={{ value: '時間 (年月)', position: 'insideBottomRight', offset: -5, fill: '#5A3921' }}
                   />
                   <YAxis 
                     stroke="#5A3921" 
                     label={{ value: '房價指數 (2020年1月=100)', angle: -90, position: 'insideLeft', fill: '#5A3921' }}
                   />
                   <Tooltip 
                     contentStyle={{
                       backgroundColor: '#F9F5F0',
                       borderColor: '#E8D8C8',
                       borderRadius: '8px',
                       color: '#5A3921'
                     }}
                     formatter={(value) => [`${value} (指數)`, '房價指數']}
                     labelFormatter={(label) => `時間: ${label}`}
                   />
                   <Area 
                     type="monotone" 
                     dataKey="value" 
                     stroke="#8B5A2B" 
                     fill="url(#japaneseGradient)" 
                     fillOpacity={1} 
                   />
                   <defs>
                     <linearGradient id="japaneseGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#8B5A2B" stopOpacity={0.8}/>
                       <stop offset="50%" stopColor="#A67C52" stopOpacity={0.6}/>
                       <stop offset="100%" stopColor="#D4B483" stopOpacity={0.2}/>
                     </linearGradient>
                   </defs>
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>

          {/* 城市房价指数 - 和風卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cityIndexData.map((city) => (
              <div key={city.city} className="bg-white/90 rounded-xl shadow-md p-6 hover:shadow-lg transition-all border border-[#E8D8C8]">
                <h3 className="text-lg font-semibold text-[#5A3921]">{city.city}</h3>
                <div className="flex items-end mt-2">
                  <span className="text-2xl font-bold text-[#8B5A2B]">{city.index}</span>
                  <span className={`ml-2 text-sm ${city.change >= 0 ? 'text-[#5A8B39]' : 'text-[#B53F35]'}`}>
                    {city.change >= 0 ? '+' : ''}{city.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>


          {/* 移民日本的好處與優劣分析區塊 */}
          <div className="mb-8 rounded-xl overflow-hidden" id="japan-experience">
            <Link to="/japan-experience" className="h-96 overflow-hidden rounded-lg relative group block">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Happy%20Japanese%20family%20of%204%20having%20fun%20together%20at%20home%2C%20parents%20and%20children%20laughing%20and%20playing%20board%20games%2C%20warm%20and%20cozy%20atmosphere%2C%20natural%20lighting%2C%20harmonious%20family%20scene&sign=56325b858b942246528253e1002d49c6" 
                alt="Happy Japanese family"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">移民日本的好處與優劣分析</h3>
              </div>
            </Link>
          </div>

        </div>

        {/* 日式建築特色 */}
        <div className="mb-8" id="housing-styles">
          <h2 className="text-2xl font-bold text-[#5A3921] mb-6 border-b border-[#E8D8C8] pb-2">日式建築特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                style: 'japanese-community',
                title: '宜居的日式社區',
                imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Happy%20Japanese%20family%20in%20traditional%20neighborhood%20with%20modern%20houses%2C%20smiling%20and%20walking%20together%2C%20warm%20and%20inviting%20atmosphere&sign=f41ce787550a40bbd501347e5c6fbd03'
              },
              { 
                style: 'one-story-house',
                title: '傳統一戶建',
                imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20one-story%20house%20with%20wooden%20structure%20and%20tatami%20rooms%2C%20peaceful%20garden%20surrounding%2C%20serene%20atmosphere&sign=8f405a44887830ac4e111b8f26a3dbe1'
              },
              { 
                style: 'modern-apartment',
                title: '現代日式公寓',
                imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20Japanese%20apartment%20interior%20with%20sleek%20design%20and%20traditional%20elements%2C%20minimalist%20style%2C%20natural%20lighting&sign=9b2e5fe078a363858d713db6a51f1f49'
              },
              { 
                style: 'ryokan',
                title: '日式旅館體驗',
                imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20ryokan%20with%20tatami%20rooms%20and%20onsen%2C%20peaceful%20atmosphere%2C%20authentic%20Japanese%20experience&sign=51d2645cf3b3a767996c446ddd158ccb'
              }
            ].map((style, index) => (
              <a 
                key={index}
                href={`/housing-style/${style.style}`}
                className="h-60 overflow-hidden rounded-lg relative group"
              >
                <img 
                  src={style.imageUrl}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{style.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <Footer />

      {/* 咨询悬浮按钮 */}
      <ConsultationButton />
    </div>
  );
}