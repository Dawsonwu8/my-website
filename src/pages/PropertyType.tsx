import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';


// 房產類型數據
const propertyTypes = [
  { 
    type: '公寓', 
    yield: 4.2, 
    liquidity: 8, 
    risk: 3,
    description: '集合住宅，適合長期穩定收益，管理相對簡單',
    advantages: ['管理規範', '空置率低', '維護成本低'],
    disadvantages: ['增值空間有限', '戶型較小']
  },
  { 
    type: '一戶建', 
    yield: 3.8, 
    liquidity: 6, 
    risk: 5,
    description: '獨立住宅，適合家庭居住，土地所有權',
    advantages: ['土地所有權', '改造自由', '長期增值潛力'],
    disadvantages: ['維護成本高', '空置風險較大']
  },
  { 
    type: '商業地產', 
    yield: 5.5, 
    liquidity: 4, 
    risk: 7,
    description: '商鋪/辦公樓，收益高但風險較大',
    advantages: ['收益潛力高', '長期租約', '資產增值'],
    disadvantages: ['空置風險高', '管理複雜', '經濟敏感']
  }
];

// 案例數據
const caseStudies = [
  { type: '公寓', location: '東京新宿區', profit: 32, period: '3年' },
  { type: '一戶建', location: '大阪中央區', profit: 28, period: '5年' },
  { type: '商業地產', location: '福岡天神', profit: 45, period: '2年' },
  { type: '公寓', location: '名古屋榮', profit: 25, period: '4年' },
  { type: '商業地產', location: '札幌站前', profit: 38, period: '3年' }
];

export default function PropertyType() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(propertyTypes[0]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-noto">
      {/* 頂部導航欄 */}

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


      {/* 主要內容 */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">房產類型分析</h1>
        
        {/* 房產類型卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {propertyTypes.map((type) => (
            <div 
              key={type.type}
              onClick={() => setSelectedType(type)}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:scale-105 ${selectedType.type === type.type ? 'ring-2 ring-[#D4AF37]' : ''}`}
            >
              <h2 className="text-xl font-semibold text-[#2C3E50]">{type.type}</h2>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-sm text-gray-500">收益率</p>
                  <p className="text-lg font-bold">{type.yield}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">流動性</p>
                  <p className="text-lg font-bold">{type.liquidity}/10</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">風險</p>
                  <p className="text-lg font-bold">{type.risk}/10</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 詳細分析 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">{selectedType.type} 詳細分析</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 描述 */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-medium text-[#2C3E50] mb-2">基本描述</h3>
              <p className="text-gray-700">{selectedType.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-medium text-[#2C3E50] mb-2">優勢</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {selectedType.advantages.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2C3E50] mb-2">劣勢</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {selectedType.disadvantages.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 圖表 */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[selectedType]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="yield" fill="#D4AF37" name="收益率(%)" />
                  <Bar dataKey="liquidity" fill="#2C3E50" name="流動性" />
                  <Bar dataKey="risk" fill="#8884d8" name="風險" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 投資特性對比表格 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
               <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">投資特性對比</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">類型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">收益率(%)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">流動性</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">風險</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {propertyTypes.map((type, index) => (
                  <tr key={type.type} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2C3E50]">{type.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{type.yield}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{type.liquidity}/10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{type.risk}/10</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 典型案例 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">典型案例</h2>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4" style={{ minWidth: `${caseStudies.length * 300}px` }}>
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="w-72 flex-shrink-0 bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-1 bg-[#D4AF37] bg-opacity-20 text-[#D4AF37] text-xs font-medium rounded">
                      {caseStudy.type}
                    </span>
                    <span className="text-xs text-gray-500">{caseStudy.period}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-[#2C3E50]">{caseStudy.location}</h3>
                   <p className="mt-4 text-sm text-gray-600">投資回報率</p>
                  <p className="text-2xl font-bold text-[#D4AF37]">{caseStudy.profit}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* 頁腳 */}
      <Footer />

      {/* 諮詢懸浮按鈕 */}
      <ConsultationButton />
    </div>
  );
}
