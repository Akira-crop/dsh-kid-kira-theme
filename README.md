# KID × KIRA for DeepSeek Harness

一个为 DeepSeek Harness Web 制作的基德 × 夜神月双主角主题。

- 怪盗基德侧采用冷蓝、银白和扑克牌元素
- 夜神月侧采用黑红、审判与笔记元素
- 自定义侧栏、顶栏、新会话按钮、会话列表和输入框
- 背景图已嵌入构建产物，运行时不依赖外部图片地址

## 安装

```sh
dsh plugin --profile web add github:Akira-crop/dsh-kid-kira-theme
dsh web
```

如果已经运行着 DSH Web，请先结束旧进程，避免 `127.0.0.1:3080`
端口冲突。

## Development

Run `npm run build` after replacing `assets/phantom-heist.png`. Then re-add
the local package to the DSH web profile if its lockfile needs refreshing.

## Artwork notice

The background artwork was supplied by the repository owner. No rights to
redistribute the artwork are granted by this repository. Keep the repository
private unless you have permission from the relevant rights holders.
