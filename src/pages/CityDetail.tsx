import { useParams } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ConsultationButton from '@/components/ConsultationButton';
import Footer from '@/components/Footer';

const cityData = {
  tokyo: {
    title: "東京 - 現代與傳統的融合",
    overview: "東京是日本的首都，全球最大的都市之一，完美融合了現代化摩天大樓和傳統日式文化。作為全球三大金融中心之一，東京房產市場穩定，租賃需求旺盛，尤其受外國投資者青睞。",
    highlights: [
      "全球最安全的城市之一，犯罪率極低",
      "完善的公共交通系統，覆蓋全城的地鐵網絡",
      "豐富的文化活動和米其林星級餐廳",
      "國際化程度高，外國人居住社區成熟",
      "2025年房價預期增長3-5%"
    ],
    housingMarket: {
      averagePrice: "1.2億日元",
      rentYield: "4.5%",
      popularAreas: ["港區", "澀谷區", "新宿區", "目黑區", "世田谷區"],
      priceTrend: "穩定上漲",
      foreignBuyerRatio: "35%"
    },
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20skyline%20at%20night%20with%20bright%20neon%20lights%20and%20modern%20buildings&sign=4c90e488919cc6a65455e5b51437dd78",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Traditional%20Japanese%20temple%20in%20Tokyo%20with%20cherry%20blossoms&sign=09a8e893b47c6a9f6c53e71a6c4cef8b",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tokyo%20residential%20area%20with%20modern%20apartment%20buildings%20and%20clean%20streets&sign=2b629596713c40ee55fe8b03cda9cb5d"
    ],
    sources: [
      "日本國土交通省 - 2023年房產市場報告",
      "東京都市政府 - 生活指南",
      "三菱UFJ不動產 - 2024投資展望"
    ]
  },
  osaka: {
    title: "大阪 - 商業與文化的交匯",
    overview: "大阪是日本關西地區的經濟中心，以美食文化和商業活力聞名。作為日本第二大都市圈，大阪房產價格相對東京更實惠，租金收益率更高，特別適合民宿投資。",
    highlights: [
      "日本美食之都，米其林餐廳密集",
      "商業投資熱點，關西經濟核心",
      "旅遊業發達，年接待遊客超5000萬",
      "2025年世博會主辦城市",
      "民宿特區政策支持"
    ],
    housingMarket: {
      averagePrice: "9800萬日元",
      rentYield: "5.2%",
      popularAreas: ["北區", "中央區", "天王寺區", "西區", "浪速區"],
      priceTrend: "穩步上升",
      foreignBuyerRatio: "28%"
    },
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Osaka%20Dotonbori%20canal%20with%20neon%20lights%20and%20crowds%2C%20vibrant%20night%20scene&sign=19cbffd9a41daa832365e80815a78e3f",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Osaka%20Castle%20with%20cherry%20blossoms%2C%20traditional%20Japanese%20architecture&sign=14b304dcdfbbd40add397cc574ab5f77",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20Osaka%20business%20district%20with%20high-rise%20buildings&sign=cc19b7f7962d3dbfbf9a14dc4325e577"
    ],
    sources: [
      "大阪府政府 - 2023年經濟報告",
      "關西經濟聯合會 - 投資指南",
      "日本觀光廳 - 大阪旅遊數據"
    ]
  },
  kyoto: {
    title: "京都 - 傳統文化之都",
    overview: "京都是日本傳統文化的中心，擁有眾多歷史遺跡和傳統建築，房產投資以文化保護和旅遊業為主。京都的傳統町屋和民宿改造是獨特的投資機會，但受文化保護法規限制較多。",
    highlights: [
      "千年古都，文化遺產豐富，17處世界遺產",
      "傳統町屋改造投資熱門，回報率高",
      "旅遊業發達，年接待遊客超5000萬",
      "嚴格的建築法規保護城市風貌",
      "高端民宿市場需求旺盛"
    ],
    housingMarket: {
      averagePrice: "8500萬日元",
      rentYield: "4.2%",
      popularAreas: ["中京區", "東山區", "下京區", "左京區", "右京區"],
      priceTrend: "穩中有升",
      foreignBuyerRatio: "25%"
    },
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Kyoto%20traditional%20street%20with%20old%20wooden%20houses%20and%20cherry%20blossoms%2C%20serene%20atmosphere&sign=be43b63659e16e0aa731fad79cfafca0",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Kyoto%20Gion%20district%20with%20maiko%20walking%2C%20traditional%20Japanese%20atmosphere&sign=08154ce130702eaef54fcdfdf0d0918f",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Kyoto%20machiya%20townhouse%20restoration%20project%2C%20traditional%20architecture&sign=f1ec3eb0afcc8aa24d32f4d5bfbef1e0"
    ],
    sources: [
      "京都府政府 - 文化保護報告",
      "日本觀光廳 - 京都旅遊數據",
      "京都町屋保存協會 - 改造指南"
    ]
  },
  nagoya: {
    title: "名古屋 - 中部工業中心",
    overview: "名古屋是日本中部地區的經濟中心，以汽車製造業聞名。房產市場穩定，工業區周邊租賃需求旺盛，適合長期投資。",
    highlights: [
      "豐田汽車總部所在地",
      "中部國際機場交通便利",
      "工業區周邊租賃需求穩定",
      "房價相對東京大阪更實惠",
      "2027年磁浮中央新幹線開通"
    ],
    housingMarket: {
      averagePrice: "7500萬日元",
      rentYield: "4.8%",
      popularAreas: ["中區", "東區", "熱田區", "中村區", "昭和區"],
      priceTrend: "穩步上升",
      foreignBuyerRatio: "20%"
    },
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Nagoya%20city%20skyline%20with%20Nagoya%20Castle%2C%20modern%20and%20traditional%20mix&sign=bdd85956328d9b00055b7e06af8141ee",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Nagoya%20industrial%20area%20with%20factories%20and%20residential%20buildings&sign=3705b9bf19e4329fb485e0c19afe3160",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Nagoya%20station%20area%20with%20modern%20buildings%20and%20shopping%20malls&sign=5a4413c0206e1b61342357d647a377b3"
    ],
    sources: [
      "名古屋市政府 - 經濟發展報告",
      "中部經濟聯合會 - 投資指南",
      "日本國土交通省 - 中部地區房產數據"
    ]
  },
  fukuoka: {
    title: "福岡 - 九州門戶",
    overview: "福岡是九州地區最大的城市，經濟增長快速，房價相對較低但租金收益率高，是近年新興的投資熱點。",
    highlights: [
      "亞洲門戶，距離韓國中國最近",
      "創業氛圍濃厚，年輕人口多",
      "旅遊業發展迅速",
      "房價相對東京大阪低30-40%",
      "租金收益率高達5-6.5%"
    ],
    housingMarket: {
      averagePrice: "6500萬日元",
      rentYield: "5.5%",
      popularAreas: ["中央區", "博多區", "早良區", "城南區", "東區"],
      priceTrend: "快速上升",
      foreignBuyerRatio: "30%"
    },
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fukuoka%20city%20skyline%20with%20modern%20buildings%20and%20Hakata%20Bay&sign=6110aabe370111eae50b51db69065e52",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fukuoka%20traditional%20food%20stalls%20at%20yatai%2C%20vibrant%20atmosphere&sign=70f034cadcfa95b8e7292de7e60e4087",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fukuoka%20residential%20area%20with%20modern%20apartments%20and%20green%20spaces&sign=17de2c41307ef9f80eb32c24819f1195"
    ],
    sources: [
      "福岡市政府 - 經濟發展報告",
      "九州經濟聯合會 - 投資指南",
      "日本觀光廳 - 九州旅遊數據"
    ]
  },
  sapporo: {
    title: "札幌 - 北方明珠",
    overview: "札幌是北海道首府，以冬季雪景和美食聞名。房產市場受旅遊業帶動，民宿投資潛力大，但需考慮季節性因素。",
    highlights: [
      "冬季奧運會舉辦城市",
      "滑雪勝地周邊民宿需求旺盛",
      "夏季涼爽吸引避暑遊客",
      "房價相對東京低50%以上",
      "特色溫泉旅館投資機會"
    ],
    housingMarket: {
      averagePrice: "5000萬日元",
      rentYield: "6.0%",
      popularAreas: ["中央區", "豐平區", "白石區", "東區", "北區"],
      priceTrend: "穩步上升",
      foreignBuyerRatio: "40%"
    },
    images: [
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sapporo%20winter%20scene%20with%20s&sign=7c6b8da37d47c83fe1ca2ad4b909ef36 snow%20covered%20streets%20and%20illuminated%20buildings",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sapporo%20Clock%20Tower%20in%20summer%20with%20green%20trees&sign=04e2bf2c1c8d2479a5167d9c190fb027",
      "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sapporo%20onsen%20resort%20with%20traditional%20Japanese%20architecture&sign=5409c98f5f8ad2ab24a1adcc40f8e32b"
    ],
    sources: [
      "札幌市政府 - 觀光發展報告",
      "北海道經濟聯合會 - 投資指南",
      "日本國土交通省 - 北海道房產數據"
    ]
  }
};

export default function CityDetail() {
  const { cityName } = useParams();
  const city = cityData[cityName as keyof typeof cityData];

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
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">{city.title}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">城市概覽</h2>
          <p className="text-gray-700 mb-4">{city.overview}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {city.images.map((image, index) => (
              <div key={index} className="h-64 overflow-hidden rounded-lg">
                <img 
                  src={image}
                  alt={`Tokyo ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <h3 className="text-lg font-medium mb-2 text-[#2C3E50]">城市亮點</h3>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            {city.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">房產市場</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">平均房價</p>
              <p className="text-2xl font-bold text-[#D4AF37]">{city.housingMarket.averagePrice}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">租金收益率</p>
              <p className="text-2xl font-bold text-[#D4AF37]">{city.housingMarket.rentYield}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">熱門區域</p>
              <p className="text-lg font-medium">{city.housingMarket.popularAreas.join(", ")}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">資料來源</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {city.sources.map((source, index) => (
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