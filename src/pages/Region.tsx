import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';


// 模拟数据
const regionPriceData = [
  { region: '東京', price: 105, year: 2024 },
  { region: '東京', price: 102, year: 2023 },
  { region: '東京', price: 98, year: 2022 },
  { region: '東京', price: 95, year: 2021 },
  { region: '東京', price: 92, year: 2020 },
  { region: '大阪', price: 98, year: 2024 },
  { region: '大阪', price: 95, year: 2023 },
  { region: '大阪', price: 93, year: 2022 },
  { region: '大阪', price: 90, year: 2021 },
  { region: '大阪', price: 88, year: 2020 },
];

const regionDetails = [
  {
    region: '東京',
    avgPrice: 105,
    rentYield: 4.5,
    popularAreas: ['港区', '渋谷区', '新宿区']
  },
  {
    region: '大阪',
    avgPrice: 98,
    rentYield: 5.2,
    popularAreas: ['北区', '中央区', '天王寺区']
  }
];

export default function Region() {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('東京');
  const [selectedYear, setSelectedYear] = useState(2024);

  // 获取当前选中的地区详情

  const currentDetail = regionDetails.find(d => d.region === selectedRegion) || regionDetails[0];
  
  // 获取当前地区的价格趋势数据
  const regionTrendData = regionPriceData
    .filter(d => d.region === selectedRegion)
    .sort((a, b) => a.year - b.year);

  // 获取当前年份的地区价格数据
  const currentYearData = regionPriceData.filter(d => d.year === selectedYear);

  // 模拟地图点击事件
  const handleMapClick = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-noto">
      {/* 顶部导航栏 */}
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


      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">地區房產市場分析</h1>
        
        {/* 地图和详情区域 */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* 地图区域 */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">地區房價熱力圖</h2>
            <div className="relative">
              {/* 模拟地图 - 使用简单的div布局 */}
              <div className="relative h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
                {/* 东京区域 */}
                <div 
                  className={`absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-lg cursor-pointer transition-all ${selectedRegion === '東京' ? 'bg-[#D4AF37] bg-opacity-70' : 'bg-[#2C3E50] bg-opacity-50'}`}
                  onClick={() => handleMapClick('東京')}
                  onMouseEnter={(e) => e.currentTarget.classList.add('bg-opacity-70')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('bg-opacity-70')}
                >
                  <div className="absolute bottom-2 left-2 text-white font-bold">東京</div>
                </div>
                {/* 大阪区域 */}
                <div 
                  className={`absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-lg cursor-pointer transition-all ${selectedRegion === '大阪' ? 'bg-[#D4AF37] bg-opacity-70' : 'bg-[#2C3E50] bg-opacity-50'}`}
                  onClick={() => handleMapClick('大阪')}
                  onMouseEnter={(e) => e.currentTarget.classList.add('bg-opacity-70')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('bg-opacity-70')}
                >
                  <div className="absolute bottom-2 left-2 text-white font-bold">大阪</div>
                </div>
              </div>
              
              {/* 时间轴滑块 */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2 text-[#2C3E50]">年份選擇: {selectedYear}</h3>
                <input
                  type="range"
                  min="2020"
                  max="2024"
                  step="1"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* 详情区域 */}
          <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">{selectedRegion} 房產詳情</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-[#2C3E50]">平均房價指數</h3>
                <p className="text-2xl font-bold">{currentDetail.avgPrice}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-[#2C3E50]">租金收益率</h3>
                <p className="text-2xl font-bold">{currentDetail.rentYield}%</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-[#2C3E50]">熱門區域</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentDetail.popularAreas.map(area => (
                    <span key={area} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2 text-[#2C3E50]">房價趨勢</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={regionTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#D4AF37" 
                        fill="#D4AF37" 
                        fillOpacity={0.2} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
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
