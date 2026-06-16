# Monorepo 约定

本文档确认 MiniCook Monorepo 的基线约定。在更具体的文档覆盖前，这些规则持续有效。

## 工作区边界

- `frontend/` 存放 Taro、React、TypeScript、NutUI、Zustand 与 TanStack Query 微信小程序代码。
- `backend/` 存放 FastAPI、SQLAlchemy、PostgreSQL、Redis 与 MinIO 服务端代码。
- `docs/` 存放产品、架构、API、UI、数据、部署与 AI 协作文档。
- `docker/` 存放不适合放在根 Compose 文件中的容器专用配置。
- `scripts/` 存放可重复执行的开发、校验、CI 与部署自动化脚本。
- `.github/` 存放 GitHub 工作流、模板与仓库自动化配置。

## 文件归属

- 前端源码放在 `frontend/src/`。
- 后端应用模块放在 `backend/app/`。
- 跨领域项目决策放在 `docs/`。
- 环境变量默认值放在 `.env.example`；真实密钥绝不能提交。

## 命名

- 本次初始化之后新增的多词 Markdown 文档使用 kebab-case。
- React 组件名使用 PascalCase。
- TypeScript 变量、函数、Hook 与 Store 使用 camelCase。
- Python 模块、函数与变量使用 snake_case。
- 环境变量使用 UPPER_SNAKE_CASE。

## 依赖方向

- 前端代码不得导入后端 Python 模块。
- 后端代码不得导入前端 TypeScript 模块。
- 共享行为应先以 API 契约形式记录，再进行实现。
- 基础设施配置应依赖环境变量，不应硬编码密钥。

## 变更管理

- 除非任务明确要求业务逻辑，否则骨架工作只保持结构性。
- 任务状态变化时更新 `TODO.md`。
- 约定、契约或架构变化时更新相关文档。
- 每次提交后保持项目可运行。
