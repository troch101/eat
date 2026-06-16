# MiniCook

MiniCook 是一个面向家庭的现代菜谱微信小程序，用于收集、整理、分享和烹饪家庭菜谱。本仓库初始化为生产就绪的 Monorepo 骨架：前端采用 Taro、React、TypeScript，后端采用 FastAPI，并通过 Docker Compose 集成 PostgreSQL、Redis 和 MinIO。

## 架构

```text
MiniCook
├── frontend/              # Taro + React + TypeScript 微信小程序前端
├── backend/               # FastAPI 后端应用骨架
├── docs/                  # 产品、UI、API、数据库、路由、部署文档
├── docker/                # Docker 相关配置占位目录
├── scripts/               # 自动化脚本占位目录
└── .github/               # GitHub 工作流与模板占位目录
```

### 前端

- Taro 用于构建微信小程序。
- React 与 TypeScript 用于构建界面。
- NutUI 用于移动端组件。
- Zustand 用于本地状态管理。
- TanStack Query 用于服务端缓存编排。

### 后端

- FastAPI 应用入口。
- 面向 SQLAlchemy 的包结构。
- PostgreSQL 作为主数据库。
- Redis 用于缓存与后台协同。
- MinIO 用于对象存储。

## 运行说明

### 1. 配置环境变量

```bash
cp .env.example .env
```

### 2. 启动基础设施

```bash
docker compose up -d postgres redis minio
```

### 3. 后端开发

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn sqlalchemy pydantic pydantic-settings psycopg[binary] redis minio
uvicorn main:app --reload
```

### 4. 前端开发

```bash
cd frontend
npm install
npm run dev:weapp
```

## 目录结构

详细项目约定请参考 `docs/CONVENTIONS.md`、`docs/ROUTES.md`、`docs/COMPONENTS.md`、`docs/API.md` 和 `docs/DATABASE.md`。

## 开发规则

- 修改前阅读 `README.md`、`TODO.md` 与 `docs/` 中的相关文件。
- 不使用 TypeScript `any`。
- 未经对应冲刺任务批准，不实现业务逻辑。
- 创建新组件或工具前，优先复用已有共享组件与工具。
- 保持已有页面与公开契约不被破坏。
- 当范围或行为变化时，同步更新 `TODO.md`、相关文档和变更日志。
- 保持代码生产就绪、类型明确、可测试、可观测。
