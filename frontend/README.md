# med のポートフォリオサイト

個人ポートフォリオサイト  
Web開発を中心に、これまで取り組んできたプロジェクトや技術スタックをまとめています。  
現在も継続的に改善・更新中です。

🔗 **Live Site**: https://med-000.com/  
📂 **Repository**: https://github.com/med-000/med_portfolio

## Overview

このサイトは、これまでに取り組んできた **プロジェクト・技術・学習の軌跡** を  
一元的に可視化することを目的としたポートフォリオサイトです。

Notion のデータベース機能を CMS として利用しており、  
**コードをデプロイし直すことなくコンテンツを更新できる構成**になっています。

- プロジェクト一覧・詳細ページ
- 技術スタックの整理・可視化
- Markdown によるコンテンツ管理
- モダンな UI / UX を意識した設計

## Tech Stack

### Frontend

- Next.js（App Router）
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend / CMS

- Notion API（Database / Page）
- notion-to-md（Markdown 変換）

### Infrastructure / Tools

- Vercel
- pnpm
- ESLint / Biome
- GitHub

## Features

- 📄 **Project Pages**  
  各プロジェクトの概要・使用技術・関連リンクをカード形式で表示

- 🧩 **Tech Stack Visualization**  
  使用技術をバッジ形式で整理し、視覚的に把握できる構成

- ✍️ **Markdown Rendering**  
  プロジェクト詳細やブログ記事は Markdown で記述し、動的に描画

- 🔄 **Notion-based CMS**  
  Notion の Database / Page を利用することで、  
  デプロイせずにコンテンツを更新可能

- 🎨 **Responsive UI**  
  PC / Mobile の両方に対応したレイアウト設計

## Project Structure

```

├── components.json
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── public/
├── README.md
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── project/
│   │   ├── _blog/
│   │   ├── _timeline/
│   │   └── page.tsx
│   ├── components/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── project/
│   │   ├── timeline/
│   │   └── ui/
│   └── lib/
│       └── notion/
├── tailwind.config.ts
└── tsconfig.json
```

## Design Concept

- 情報を詰め込みすぎない
- 「読む」「見る」「行動する」の導線を明確に
- 装飾よりも **配置・余白・情報構造** を重視
- ダークトーンを基調とした落ち着いた UI

## Development Notes

- Notion を CMS として利用し、コンテンツ管理と更新フローを簡略化
- App Router を前提とした Server Component 中心の設計
- UI コンポーネントは shadcn/ui をベースにカスタマイズ
- 再利用性と可読性を意識したディレクトリ設計

## Future Improvements

- ブログ機能の拡張
- パフォーマンスの最適化
- アニメーション表現の整理
- 多言語対応（EN / JP）

## Author

- Name: med
- GitHub: https://github.com/med-000
- Website: https://med-000.com

## License

This project is licensed under the MIT License.
