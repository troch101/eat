# 部署

Docker Compose 为本地提供 PostgreSQL、Redis 与 MinIO 基础设施。

## 本地基础设施

```bash
docker compose up -d postgres redis minio
```

## 生产说明

- 使用托管密钥管理。
- 禁止将数据库、对象存储和 Redis 凭据提交到源码仓库。
- 部署打包前需要补充后端与前端 Dockerfile。
