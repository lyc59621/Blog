# Heading level 1
## Heading level 2
### Heading level 3

#### Heading level 4

##### Heading level 5
###### Heading level 6

Heading level 1  
===============
Heading level 2  
---------------

# 链接
```php
[链接文字][name]

[name]: link "Title"
```
这是一个链接 [我的github](https://lyc59621.github.io/Blog/)

自动链接 <http://example.com/>

[G]: https://www.google.com/ "Google"

这是OB教程链接[OB 教程]: https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/2021%E5%B9%B4%E6%96%B0%E6%95%99%E7%A8%8B "OB教程"

# 代码块
I love supporting the ***[EFF](https://lyc59621.github.io/Blog/)***.
This is the *[Markdown Guide](https://lyc59621.github.io/Blog/)*.
See the section on [`code`](#code).

# 插入图片
\* 测试图片
![这是图片](image.jpg "测试图片")

# 表格
```
| 测试      | 第二行 |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```



| 策划师 | 第dwadw二  | 带娃带娃 |
| ----------- | :-----------: | ----------- |
| 策划师 | `. 第二. `  | 带娃带娃 |



| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

表格
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |


# 代码高亮
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

代码高亮

```C
NSMutableDictionary *propsDic = [NSMutableDictionary dictionary];
    unsigned int outCount;
    Ivar *ivars = class_copyIvarList([obj class], &outCount);
    for ( int i = 0; i < outCount; i++)
    {
        Ivar ivar = ivars[i];
        const char* char_f = ivar_getName(ivar);
        NSString *ivarName = [NSString stringWithUTF8String: char_f];
        id ivarValue = [obj valueForKey:(NSString *)ivarName];
        if (ivarValue) {
            [propsDic setObject:ivarValue forKey:ivarName];
        }
    }
    free(ivars);
    NSLog(@"%@", propsDic);
```



# 使用脚注
在这段文字后添加一个脚注[^footnote].
[^footnote]:这里是脚注的内容.

测试一个注角[^测试注脚]



使用 Markdown[^1] 可以效率的书写文档，直接转换成 HTML[^2], 你可以使用 Typora[^T] 软件。
[^1]:Markdown 是一种纯文本标记语言。
[^2]:HyperText Markup Language 超文本标记语言。
[^T]:Typora 官网 <https://typora.io/>



# 使用特殊符号

- [常用符号大全](http://www.fhdq.net/)
- [Emoji](https://emojipedia.org/)

如果不嫌麻烦，写作时可以灵活运用一些特殊符号，以增加文档的趣味性：

常用排版： ▌▍◆★☆☁➤➜❤➊➋➌

TodoList： ✅☑✓✔√☓☒✘ㄨ✕✖✗❌❎

emoji：🌹🍀🌙🍂🍃🌷💎🔥⭐🍄🏆


# Markdown 定义列表
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

# markdown 删除线
~~世界是平坦的。~~ 我们现在知道世界是圆的。

~~删除我~~ 你在哪里



# Markdown 任务列表语法

- [x] 这个完成了
- [ ] Update the website
- [ ] Contact the media



# 设置字体、字号和颜色

编辑字体、字号和颜色的代码如下：

```
<font face="黑体"> 我是黑体字 </font>
<font face="微软雅黑"> 我是微软雅黑 </font>

<font color=gray size=7> color=gray </font>
<font color=#00ffff size=7> color=#00ffff </font>
<font color=#0099ff size=7 face="黑体"> color=#0099ff size=7 face="黑体" </font>

// Size：规定文本的尺寸大小。可能的值：从 1 到 7 的数字。浏览器默认值是 3。
```

font 是一对常规标签，font 标签内设置 `color="对应颜色值"` 即可设置对象内字体的颜色：

```php+HTML
<font color="red"> 我是红色字体 </font> 或者 <font color="#FF0000"> 我也是红色字体 </font> 
```

另外，还可以这样设置字体颜色：

```markdown
$\color{green}{绿色} $
```

```
<center>文字居中</center>
```

```
<table><tr><td bgcolor=#FF4500>
    这里的背景色是：OrangeRed，十六进制颜色值：#FF4500，rgb(255, 69, 0)
</td></tr></table>
```





# 横向流程图

graph LR
A[Hard edge] -->|Label| B(Round edge)
B --> C{Decision}
C -->|One| D[Result one]
C -->|Two| E[Result two]

graph LR;
A[Hard edge] -->|Label| B(Round edge)
B --> C{Decision}
C -->|One| D[Result one]
C -->|Two| E[Result two]

