# 沐新株式會社 - 日本房地產分析平台

## 項目部署指南 (Netlify)

### 準備工作
1. 確保您有一個Netlify帳號（[註冊地址](https://app.netlify.com/signup)）
2. 將代碼上傳到Git倉庫（GitHub/GitLab/Bitbucket）

### 部署步驟
1. 登錄Netlify控制台
2. 點擊"New site from Git"按鈕
3. 選擇您的代碼倉庫平台（GitHub/GitLab/Bitbucket）
4. 選擇您要部署的倉庫
5. 配置構建設置：
   - Build command: `npm run build`
   - Publish directory: `dist/static`
6. 點擊"Deploy site"按鈕

### 高級配置（可選）
1. 環境變量設置：
   - 在"Site settings" > "Build & deploy" > "Environment"中添加
2. 自定義域名：
   - 在"Domain settings"中配置
3. 重定向規則：
   - 在`/public/_redirects`文件中配置

### 注意事項
1. 免費帳戶每月有100GB帶寬限制
2. 構建時間限制為300分鐘/月
3. 如需更多功能可升級到付費計劃

## 開發指南

### 安裝依賴
```bash
npm install
```

### 本地開發
```bash
npm run dev
```

### 構建生產版本
```bash
npm run build
```

## 項目結構
- `src/` - 主要源代碼
  - `components/` - 可重用組件
  - `pages/` - 頁面組件
  - `hooks/` - 自定義Hook
  - `lib/` - 工具函數
