# 数据库设计

主数据库：PostgreSQL。

## 当前范围

骨架阶段不实现业务表。

## 后续约定

- SQLAlchemy 模型放在 `backend/app/models`。
- 数据库会话与引擎工具放在 `backend/app/database`。
- 开始业务 Schema 工作前应先引入迁移工具。
