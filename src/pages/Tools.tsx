import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';

// 地段系数数据
const areaFactors = [
  { area: '东京核心区', factor: 1.2 },
  { area: '东京一般区', factor: 1.0 },
  { area: '大阪核心区', factor: 1.1 },
  { area: '大阪一般区', factor: 0.9 },
  { area: '其他城市', factor: 0.8 }
];

// 生成10年预测数据
const generatePredictionData = (baseValue: number, growthRate: number) => {
  return Array.from({ length: 10 }, (_, i) => ({
    year: new Date().getFullYear() + i,
    value: Math.round(baseValue * Math.pow(1 + growthRate / 100, i))
  }));
};

export default function Tools() {
  // 租金计算器状态
  const [price, setPrice] = useState<number>(5000);
  const [size, setSize] = useState<number>(50);
  const [selectedArea, setSelectedArea] = useState(areaFactors[0]);
  const [yieldResult, setYieldResult] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  // 回报预测状态
  const [predictionData, setPredictionData] = useState<any[]>([]);
  const [showConsultModal, setShowConsultModal] = useState(false);

  // 计算租金收益率
  const calculateYield = () => {
    const monthlyRent = selectedArea.factor * 2000 * (size / 50);
    const annualRent = monthlyRent * 12;
    const calculatedYield = (annualRent / price) * 100;
    const calculatedPayback = price / annualRent;
    
    setYieldResult(Number(calculatedYield.toFixed(1)));
    setPaybackPeriod(Number(calculatedPayback.toFixed(1)));

    // 触发咨询弹窗条件
    if (calculatedYield > 8 || calculatedPayback < 10) {
      setShowConsultModal(true);
    }
  };

  // 生成预测数据
  const generatePrediction = () => {
    const baseValue = price * 1.2;
    const growthRate = yieldResult / 10;
    setPredictionData(generatePredictionData(baseValue, growthRate));
  };

  // 下载报告
  const downloadReport = () => {
    toast.success('报告生成中...');
    // 模拟下载延迟
    setTimeout(() => {
      toast.success('报告已生成，即将下载');
    }, 2000);
  };

  // 实时计算
  useEffect(() => {
    calculateYield();
    generatePrediction();
  }, [price, size, selectedArea]);

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
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">投資分析工具</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧输入面板 */}
          <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">租金計算器</h2>
            
            <div className="space-y-4">
              {/* 房价输入 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">房價 (万円)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  min="100"
                  step="100"
                />
              </div>
              
              {/* 面积输入 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">面積 (m²)</label>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  min="10"
                  step="5"
                />
              </div>
              
              {/* 地段选择 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">地段</label>
                <select
                  value={selectedArea.area}
                  onChange={(e) => {
                    const area = areaFactors.find(a => a.area === e.target.value) || areaFactors[0];
                    setSelectedArea(area);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  {areaFactors.map((area) => (
                    <option key={area.area} value={area.area}>{area.area}</option>
                  ))}
                </select>
              </div>
              
              {/* 计算结果 */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-[#2C3E50]">計算結果</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">年收益率</p>
                    <p className="text-2xl font-bold text-[#D4AF37]">{yieldResult}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">回本周期</p>
                    <p className="text-2xl font-bold text-[#D4AF37]">{paybackPeriod}年</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 回报预测部分 */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">回報預測</h2>
              <button
                onClick={generatePrediction}
                className="w-full bg-[#2C3E50] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                生成預測曲線
              </button>
              
              <button
                onClick={downloadReport}
                className="w-full mt-4 bg-[#D4AF37] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                下載完整報告
              </button>
            </div>
          </div>
          
          {/* 右侧可视化区域 */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">回報預測曲線</h2>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#D4AF37" 
                    fill="#D4AF37" 
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>預測基於當前輸入參數，實際回報可能因市場波動而有所不同。</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* 页脚 */}
      <Footer />
      
      {/* 咨询悬浮按钮 */}
      <ConsultationButton />
      
      {/* 咨询弹窗 */}
      <AnimatePresence>
        {showConsultModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowConsultModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4">專業諮詢建議</h3>
              <p className="text-gray-700 mb-6">
                根據您的計算結果，我們建議您聯繫我們的專業顧問進行進一步分析，
                以獲得更精確的投資評估和個性化建議。
              </p>
              
              <div className="flex flex-col space-y-3">
                <button className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                  <i className="fa-brands fa-line"></i>
                  <span>通過LINE諮詢</span>
                </button>
                
                <button className="bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                  <i className="fa-brands fa-weixin"></i>
                  <span>通過WeChat諮詢</span>
                </button>
                
                <button 
                  onClick={() => setShowConsultModal(false)}
                  className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md"
                >
                  稍後再說
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
