# 🚀 AI占い師ミコネコ - `plan_2025_re`

## 📌 プロジェクト概要
**「AI占い師ミコネコ」** は、AIがあなたを占い、幸せな人生をサポートするWebアプリです！  
ネコミコや仲間たちが、タロット・恋愛運・仕事運などを占ってくれます 🔮✨  

---

## 🛠 環境構築方法
このプロジェクトは **Docker** を使用しているため、以下の手順で簡単に環境をセットアップできます！

### **1️⃣ Docker & Docker Compose をインストール**
公式サイトからインストールしてください（[Docker公式](https://www.docker.com/)）

---

### **2️⃣ Docker コンテナの作成・起動**
```sh
git clone https://github.com/meru53/plan_2025_re.git
cd plan_2025_re

# 初回のみ: イメージをビルドしてコンテナを起動
docker-compose up --build -d

# 既にビルド済みの場合（通常の起動）
docker-compose up -d


## ✅ 起動するサービス一覧
Docker コンテナを起動すると、以下のサービスが利用可能になります。


| **サービス名**  | **ポート** | **説明** |
|--------------|---------|----------------|
| **Backend (Django)**  | `8000`  | APIサーバー |
| **Frontend (React)**  | `3000`  | Webアプリ（占いサイト） |
| **Database (PostgreSQL)** | `5432`  | データベース（ユーザーデータ、占い結果の保存） |

### **📌 アクセスURL**
| **サービス** | **URL（ローカル環境）** |
|-------------|-----------------------|
| **フロントエンド（Webサイト）** | [http://localhost:3000](http://localhost:3000) |
| **バックエンド（Django API）** | [http://localhost:8000/api/](http://localhost:8000/api/) |
| **Django管理画面** | [http://localhost:8000/admin/](http://localhost:8000/admin/) |

---
