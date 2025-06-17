import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';

// 指南分类数据
const guideCategories = ['法規', '稅務', '購買流程', '貸款指南', '管理維護'];

// 指南内容数据
const guideContents = [
  {
    category: '法規',
    title: '外國人購房限制',
    content: '日本法律對外國人購買房地產基本沒有限制，外國人可以自由購買公寓、一戶建等不動產。但需注意：\n\n1. 外國人不能購買農地\n2. 部分地區對溫泉地有特殊規定\n3. 簽證狀態不影響購房資格'
  },
  {
    category: '稅務',
    title: '不動產持有稅',
    content: '在日本持有不動產需要繳納以下稅費：\n\n- 固定資產稅：每年約為房產評估價值的1.4%\n- 都市計劃稅：約為0.3%\n- 所得稅：租金收入需申報，稅率根據收入級距5%-45%\n- 住民稅：約為所得稅的10%'
  },
  {
    category: '購買流程',
    title: '購房基本流程',
    content: '1. 確定預算和需求\n2. 尋找合適房源\n3. 簽訂購房意向書\n4. 重要事項說明\n5. 簽訂正式買賣契約\n6. 付款和過戶\n7. 登記所有權\n\n整個流程通常需要1-3個月完成'
  }
];

// FAQ数据
const faqs = [
  {
    question: '外國人在日本買房需要居住簽證嗎？',
    answer: '不需要。日本購房與簽證狀態無關，無論是否有居住簽證都可以購買不動產。'
  },
  {
    question: '購房後可以申請移民嗎？',
    answer: '單純購房不能直接獲得居留資格。但可以通過經營管理簽證，以房產投資作為事業來申請。'
  },
  {
    question: '日本房產的持有成本高嗎？',
    answer: '相比歐美國家，日本的持有成本較低。主要費用包括固定資產稅、都市計劃稅和物業管理費。'
  }
];

export default function Guide() {
  const [selectedCategory, setSelectedCategory] = useState('法規');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // 筛选当前分类的内容
  const filteredContents = guideContents.filter(
    content => content.category === selectedCategory
  );

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
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">投資指南</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧分类导航 */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">指南分類</h2>
              <ul className="space-y-2">
                {guideCategories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded transition-all ${selectedCategory === category ? 'bg-[#D4AF37] text-white' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="lg:w-3/4">
            {/* 指南内容 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">{selectedCategory}指南</h2>
              
              {filteredContents.length > 0 ? (
                filteredContents.map((content, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-medium text-[#2C3E50] mb-2">{content.title}</h3>
                    <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                      {content.content}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">暫無相關內容</p>
              )}
            </div>

            {/* 常见问题 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">常見問題</h2>
              
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-[#2C3E50]">{faq.question}</span>
                      <i className={`fa-solid ${expandedFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#D4AF37]`}></i>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-gray-700">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
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
