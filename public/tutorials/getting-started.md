# 快速开始

欢迎使用 NOVELM@STER NG！本教程将帮助你快速开始制作偶像大师剧情。

## 什么是 NOVELM@STER NG？

NOVELM@STER NG 是基于 **WebGAL** 引擎和 **WebGAL Terre** 编辑器构建的偶像大师系列剧情编辑工具。每一个企划都对应一个"定制引擎"，让你能够：

- 📝 创作原创偶像故事
- 🎭 使用可视化编辑器，无需编程
- 🎨 使用偶像大师角色立绘和场景
- 💾 导出为网页格式，随时分享

## 第一步：下载 WebGAL Terre 编辑器

访问 [WebGAL 官方下载页面](https://www.openwebgal.com/download/) 下载最新版本的 WebGAL Terre 编辑器。

**系统要求**: Windows 10/11, macOS, Linux（不支持 Windows 7）

**安装步骤**:

1. 在官网下载页面选择对应系统的安装包
2. 下载完成后，解压压缩包
3. 启动 `WebGAL_Terre` 可执行文件
4. 编辑器会自动打开默认浏览器（如未打开，请访问 `http://localhost:3001/`）

## 第二步：导入定制引擎

每个偶像大师企划都有专属的"定制引擎"，包含该企划的角色立绘、场景和样式。

### 导入步骤

按照 [WebGAL 官方教程](https://docs.openwebgal.com/derivative.html) 导入定制引擎：

1. 找到 WebGAL Terre 的安装目录
2. 将下载的定制引擎压缩包**解压缩后**放入 `assets/templates/Derivative_Engine/` 目录下
3. 目录结构应该是：
   ```
   Derivative_Engine
   └── 定制引擎名称
       ├── assets
       ├── game
       ├── icons
       ├── index.html
       ├── manifest.json
       └── webgal-serviceworker.js
   ```
4. 重新启动 WebGAL Terre 编辑器
5. 创建新游戏时，选择对应的定制引擎模板

## 第三步：导入游戏资源

游戏资源（角色立绘、背景、音乐等）与定制引擎是独立分发的，需要单独导入。

### 导入方法

参考 [WebGAL 资源管理教程](https://docs.openwebgal.com/resources.html)：

1. 在 WebGAL Terre 编辑器中，点击顶部工具栏的"资源管理"
2. 或者手动打开游戏目录下的 `game` 文件夹
3. 将资源文件**解压缩后**放入对应文件夹：
   - `background` - 背景图片
   - `figure` - 角色立绘
   - `bgm` - 背景音乐
   - `vocal` - 语音文件
   - `video` - 视频文件

## 第四步：开始创作

### 编辑剧情

- 在编辑器左侧选择场景
- 使用可视化界面添加对话、背景、角色
- 实时预览效果

### 添加对话

- 点击"添加语句"
- 选择说话的角色
- 输入对话内容

### 预览和导出

- 点击右上角"预览"查看实时效果
- 点击"构建"生成网页游戏
- 可部署到网页或分享给其他人

## 获取帮助

- 查看 [WebGAL 官方文档](https://docs.openwebgal.com/) 了解编辑器功能
- 访问[资源库](#)下载更多素材

## 相关链接

- [WebGAL 官网](https://www.openwebgal.com/)
- [WebGAL 官方文档](https://docs.openwebgal.com/)

---

*祝你创作愉快！*
