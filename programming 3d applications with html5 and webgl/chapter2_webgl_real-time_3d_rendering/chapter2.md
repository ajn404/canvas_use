#### 所谓webgl

1. api
2. 基于opengl es 2.0
3. 能与网页中的其他内容合并
4. webgl构建动态的web应用程序
5. 跨平台
6. royalty free

#### 渲染webgl之前，浏览器需要

1. 创建一个canvas元素

2. 为canvas包含一个绘图上下文（context）

3. 初始化场景(viewport)

4. 创建一个或多个包含即将被渲染的数据的缓冲器（buffers）

5. Create one or more matrices to define the transformation from vertex buffers to screen space.

   创建一个或多个矩阵来定义从顶点缓冲区到屏幕空间的转换。

6. 创建一个或多个shaders来实现绘图算法。

7. c=使用参数初始化着色器

8. 绘制