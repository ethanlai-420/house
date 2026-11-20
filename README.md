# Real Estate｜房屋＆房貸模組

職訓局專題「個人資產負債 Dashboard」的房屋＆房貸模組（C 模組）。
使用者可以記錄自己的房地產與房貸，檢視房產總金額、房貸餘額、淨值與還款進度。

本模組可以獨立執行與展示，最後會把總覽資料提供給專題的總 Dashboard。

## 功能

| 功能 | 說明 | 狀態 |
|---|---|---|
| 總覽頁 | 房產總金額、總房貸餘額、總淨值 KPI 卡片，房產占比圖，房產列表（含還款進度） | 規劃中 |
| 新增房產 | 輸入基本資訊（名稱、屋齡、縣市與鄉鎮市區、坪數）與價格資訊（自備款、貸款金額、年利率、貸款年限、貸款開始日期） | 規劃中 |
| 各別房產頁 | 單一房產的總價、房貸餘額、淨值，以及基本資訊與價格資訊 | 規劃中 |
| 房貸計算 | 依本息平均攤還計算每月應繳、剩餘本金、已還本金比例 | 規劃中 |

設計重點：
- 總價不另外輸入，由「自備款 + 貸款金額」計算
- 貸款開始日期可以是過去的日期，方便登錄以前買的房子
- 屋齡由使用者輸入，資料庫存成建成年份

## 技術

| 分類 | 使用技術 |
|---|---|
| 後端 | Java 21、Spring Boot 4.1（Spring Web） |
| 資料庫 | MySQL 8.4（規劃使用 JPA + Flyway） |
| 前端 | HTML、JavaScript、Bootstrap + Tabler 模板、ECharts 圖表 |
| 開發環境 | VS Code Dev Containers（Docker） |

## 專案結構

```
.
├─ .devcontainer/       開發容器設定（Java 21、Maven、MySQL）
├─ realestate/          Spring Boot 專案
│  ├─ pom.xml
│  └─ src/
│     ├─ main/java/com/finalproject/realestate/   後端程式
│     ├─ main/resources/static/                   前端頁面
│     └─ test/                                    測試
└─ README.md
```

## 啟動方式

### 需要的工具
- Docker Desktop
- VS Code + Dev Containers 擴充套件

### 步驟
1. 用 VS Code 的「Dev Containers: Clone Repository in Container Volume」開啟這個 repo
2. 等容器建立完成（左下角顯示 `Dev Container: Java`）
3. 在 VS Code 的終端機執行：
   ```bash
   cd realestate
   ./mvnw spring-boot:run
   ```
4. 出現 `Tomcat started on port 8080` 後，用瀏覽器打開 `http://localhost:8080`

> 目前還沒有任何頁面，看到 Whitelabel Error Page（404）代表伺服器已經正常啟動。

## 開發進度

| 步驟 | 內容 | 狀態 |
|---|---|---|
| 1 | 環境與專案建立 | ✅ 完成 |
| 2 | 第一支 API 與總覽頁 KPI | 未開始 |
| 3 | 房貸計算核心與單元測試 | 未開始 |
| 4 | 資料庫（JPA + Flyway） | 未開始 |
| 5 | 總覽頁完成 | 未開始 |
| 6 | 新增房產 | 未開始 |
| 7 | 各別房產頁 | 未開始 |
| 8 | 整合與交付 | 未開始 |

## Git 分支

每個步驟開一條分支（例如 `step1-setup`），完成後合併回 `main`，所以 `main` 永遠是可以執行的版本。