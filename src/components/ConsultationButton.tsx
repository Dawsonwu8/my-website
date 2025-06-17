
import { useState } from 'react';

export default function ConsultationButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    interest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`感謝您的諮詢，${formData.name}！我們的顧問將盡快與您聯繫。`);
    setShowForm(false);
    setIsExpanded(false);
    setFormData({ name: '', contact: '', interest: '' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg animate-pulse"
        >
          <span className="text-white font-bold text-sm">獲取專屬分析</span>
        </button>

        {isExpanded && (
          <div className="absolute bottom-full right-0 mb-4 w-72 bg-white rounded-lg shadow-lg p-4">
            {showForm ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">聯絡方式</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">投資興趣</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">請選擇</option>
                    <option value="東京公寓">東京公寓</option>
                    <option value="大阪民宿">大阪民宿</option>
                    <option value="京都町屋">京都町屋</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-white py-2 px-4 rounded-md hover:bg-[#C19B2E]"
                >
                  提交諮詢
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setShowForm(true)}
                  className="flex items-center justify-center gap-2 p-2 bg-[#2C3E50] text-white rounded hover:bg-opacity-90"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>填表諮詢</span>
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                  <i className="fa-brands fa-line text-green-500"></i>
                  <span>LINE 諮詢</span>
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                  <i className="fa-brands fa-weixin text-green-600"></i>
                  <span>WeChat 諮詢</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
  