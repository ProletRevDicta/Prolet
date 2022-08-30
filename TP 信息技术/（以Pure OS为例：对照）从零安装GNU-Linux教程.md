# 从零安装GNU/Linux教程（以Pure OS为例）

### 前言：

阅读过往期《PAPER》和《新闻》内几篇关于信息安全的文章的读者们都知道，没有自由的操作系统，就没有安全的线上工作环境。撇开自由的操作系统谈自由软件的做法是不彻底的，而自由的操作系统指的就是GNU/Linux。

由于各种各样的原因（往往是技术层面的阻碍），初学者要想从M$WIN转移到GNU/Linux往往非常困难，这篇文章就是为了解决这个难题，从零开始帮助初学者安装GNU/Linux。

首先是操作系统的选择，自由软件基金会官网上http://www.gnu.org/distros/free-distros.html推荐了许多GNU/Linux，读者可以自由选择，本文章以Pure OS为例。

另，**M$WIN**是我们对**微软Windows**的蔑称，全称为**Malicious Windows is $**

### 第一章：制作Live

开始这步之前，请准备一个大于4GB的U盘，并备份好里面的数据。

安装GNU/Linux之前，我们要先制作Live，它相当于一个引导介质，在M$WIN上，我们可以使用Rufus来安装。关于Rufus，可以在它的官网下载：https://rufus.ie/

接下来便是Pure OS的ISO的下载，这一步可以选择前往自由软件基金会官网http://www.gnu.org/distros/free-distros.html找到Pure OS下载，或者直接前往 https://pureos.net/ 下载ISO。

这是M$WIN安装Pure OS镜像的教程：https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#3-usb-selection，虽然是英文，但是已经讲得很详细了，英文不好的读者可以使用谷歌翻译。

### 第二章：安装操作系统

在成功制作了Live后，按照各自设备的设置，按下特定键进入BIOS引导菜单（笔者的设备是F12键），在引导菜单中使用上下键进行操作，选择你的Live设备名（即U盘），点击Enter即可进入Live启动菜单。

进入启动菜单后，什么都不需要做，等待系统自动安装。等待一段时间。刚刚进去的时候可能会很卡，要耐心等待。

接下来要解决卡顿问题，这个问题笔者也没有搞清楚原因，可以是具有特殊性，不卡顿的读者可以跳过这部分。下面说一下笔者解决卡顿问题的办法。

完成后不断点击弹出窗口的右上角继续，窗口消失后移动光标到屏幕右上角，点击设置图标，在新弹出的设置窗口上选择Account/帐户，点击”+“号添加帐户，帐户名随意，必须设置密码，没有密码在注销后无法登录不卡顿的桌面，添加完毕后光标重回右上角，点击小人图标后点击弹出的Log Out登出。

登出后用鼠标点击你新建的用户，或者在Username后面输入用户名，点击Enter。在之后的Password/密码输入密码。

最关键的一步来了，点击确定按钮左边的齿轮图标，弹出列表后鼠标选择X11，列表消失后点击Enter即可进入不卡顿的操作系统。

由于Pure OS的桌面环境基于Debian，我们点击左上角的九宫格图标，在弹出的左侧栏中点击最上方的方块图标，Install Pure OS/安装Pure OS，进入安装流程。

在弹出的安装到哪个硬盘的界面，需要在进入主板引导时观察新增的启动项和原有的启动项，原有启动项的名称要记下来，在备份完原先磁盘上操作系统的数据后（磁盘是新的磁盘就无需备份），选择指定名称的磁盘，接下来点击擦除全部磁盘，如果磁盘原先的操作系统是Debian，只需点击替换原来的扇区，并在下方彩条选择Debian GNU/Linux这一扇区条。

接下来选择用户名和密码，最后进入安装，等待安装进度条走完，重启即可。

重启后移除CD/USB，或者通过引导菜单进入原来名称的磁盘，此时用户会发现分区表已经消失。

如果系统仍然很卡，怎么办？接下来重复在Live里面登出后的操作，登录或重新登录操作系统，便可以消灭卡顿了。

### 第三章：配置网络

没有一个良好的网络，就没有与时俱进的一切。在这节笔者讲解一下科学上网工具的使用。

关于科学上网工具，我们推荐V2ray/QV2ray和Shadowsock/Open VPN等自由软件，在这里笔者选择QV2ray来讲解。（所使用的节点需要自行购买）

QV2ray的Appimage需要首先在文件设置的Permissions中勾选允许作为可执行文件，就可以双击运行，QV2ray在启动后需要解压V2ray的文件到home/V2ray下，在QV2ray的设置里设置V2ray核心路径为home/V2ray，然后点击左下角的组/Groups，点击右侧选择夹的订阅设置，点击复选框，输入订阅链接后点击下方的更新订阅，确定设置，接下来左侧Groups里就有全部的节点列表了，随便双击一个便可以访问境外网站了。

### 第四章：Tilix启动热键设定

Pure OS取消了Ctrl+Alt+T打开终端的设定，并且把Terminal（终端）换成了Tilix。

没关係，这一热键恢复仅需点击设置里面的Keyboard，再点击Shortcut，滚动条拉到最下面，点击加号，输入Name为ilix，Command为tilix，点击热键按钮，点击键盘上的Ctrl+Alt+T以输入热键，然后确定，关闭设置，便可以正常使用这一热键了。

接下来你会发现Files没有Open in Terminal这一选择。继续下面的操作。

接下来打开Tilix，打开Files（以创建下文cd中的命令），输入命令：

> cd ~/.local/share/nautilus/scripts
> sudo vi Tilix

按下键盘上的A键。
输入：

> **# !/bin/sh**
> **tilix**

点击键盘上的：键后输入wq，点击回车。
接下来输入命令：

> chmod +x Tilix
> nautilus -q
> sudo vi ~/.config/nautilus/scripts-accels

点击键盘上的a键
输入：

> F4 Tilix

点击键盘上的：键后输入wq，点击回车。

接下来使用File进入任意一个文件夹，点击F4键，会发现Open in Terminal可以使用了。

### 第五章：Tilix与Apt代理修复

Apt是Debian GNU/Linux默认的命令式包管理器，功能非常强大，但是在使用代理的时候会发现它的流量和Tilix的流量都不经过QV2ray，怎么办呢？

如果上述功能不经过代理，国外网络在使用上述功能时会极度缓慢，无法使用。

经过了上述的教程，我想各位都会进行vi的基本操作了。（不熟悉的建议上网查看一下教程）

那么执行如下命令：

> sudo vi ~/.bashrc

使用Page Down按键翻页到最后，输入：**（端口值按自身情况填入，下方8889填入不一定有效，建议再更换操作系统之前查看原先使用的端口）**

> export http_proxy="127.0.0.1:8889"

由于QV2ray仅支持终端HTTP代理，并且其HTTP端口默认设置为8889，所以如上所示。
保存后输入命令：

> source ~/.bashrc

这时会发现使用wget等下载工具的流量是经过代理的了。

接下来我们来解决Apt代理，只需执行命令：

> sudo vi /etc/apt/apt.conf

后输入：

> Acquire::http::Proxy "http://127.0.0.1:8889"

保存即可。

### 第六章：软件安装

笔者推荐一些安装软件的指令：

#号后是注释，可加可不加，笔者只想表达我们日常生活中的许多私有软件其实都是可以被对应的自由软件替代的，比如Libreoffice可以替代Office和WPS，gimp可以替代Photoshop。

> sudo apt update -y
> sudo apt upgrade -y
> #run chinese input
> sudo apt -y install tree
> sudo apt -y install ibus-pinyin ibus-rime
> sudo apt -y install vim
> sudo apt -y remove leafpad #Text
> sudo apt -y install vlc #Video
> sudo apt -y install audacity #Audio record
> sudo apt -y install brasero #CD-DVD
> sudo apt -y install pidgin #Pidgin
> sudo apt -y install pidgin-otr
> sudo apt -y install ettercap-graphical #attack
> sudo apt -y install tor #Dark web
> sudo apt -y install torbrowser-launcher
> sudo apt -y install wireshark #sniffer
> sudo apt -y install gimp #Photoshop
> sudo apt -y install libreoffice #Office
> sudo apt -y install axel #More process downloading, Seriously, It could be use for PyTube!
> sudo apt -y install lmms #audio make
> sudo apt -y install vim-gtk #"+y
> sudo apt-get install w3m w3m-img #Terminal Browser
> sudo cp -vf vimrc /etc/vim/vimrc
> 
> sudo apt install build-essential libreadline-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libffi-dev zlib1g-dev libncursesw5-dev libc6-dev libsqlite3-dev openssl sqlite3 bzip2 libbz2-dev libgdbm-compat-dev liblzma-dev uuid-dev -y
> sudo apt install zlib* p7zip-full libx11-dev -y

文件vimrc的内容爲：

> " All system-wide defaults are set in $VIMRUNTIME/debian.vim and sourced by
> " the call to :runtime you can find below.  If you wish to change any of those
> " settings, you should do it in this file (/etc/vim/vimrc), since debian.vim
> " will be overwritten everytime an upgrade of the vim packages is performed.
> " It is recommended to make changes after sourcing debian.vim since it alters
> " the value of the 'compatible' option.
> 
> " This line should not be removed as it ensures that various options are
> " properly set to work with the Vim-related packages available in G$bian.
> runtime! debian.vim
> 
> " Vim will load $VIMRUNTIME/defaults.vim if the user does not have a vimrc.
> " This happens after /etc/vim/vimrc(.local) are loaded, so it will override
> " any settings in these files.
> " If you don't want that to happen, uncomment the below line to prevent
> " defaults.vim from being loaded.
> " let g:skip_defaults_vim = 1
> 
> " Uncomment the next line to make Vim more Vi-compatible
> " NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
> " options, so any other options should be set AFTER setting 'compatible'.
> "set compatible
> 
> " Vim5 and later versions support syntax highlighting. Uncommenting the next
> " line enables syntax highlighting by default.
> if has("syntax")
>   syntax on
> endif
> 
> " If using a dark background within the editing area and syntax highlighting
> " turn on this option as well
> "set background=dark
> 
> " Uncomment the following to have Vim jump to the last position when
> " reopening a file
> "if has("autocmd")
> "  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
> "endif
> 
> " Uncomment the following to have Vim load indentation rules and plugins
> " according to the detected filetype.
> "if has("autocmd")
> "  filetype plugin indent on
> "endif
> 
> " The following are commented out as they cause vim to behave a lot
> " differently from regular Vi. They are highly recommended though.
> "set showcmd		" Show (partial) command in status line.
> "set showmatch		" Show matching brackets.
> "set ignorecase		" Do case insensitive matching
> "set smartcase		" Do smart case matching
> "set incsearch		" Incremental search
> "set autowrite		" Automatically save before commands like :next and :make
> "set hidden		" Hide buffers when they are abandoned
> "set mouse=a		" Enable mouse usage (all modes)
> 
> " Source a global configuration file if available
> if filereadable("/etc/vim/vimrc.local")
>   source /etc/vim/vimrc.local
> endif
> set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1
> set termencoding=utf-8
> set encoding=utf-8

**下面介绍安装Python的方法，不想安装的同志可以跳过，但是建议还是安装，很多软件的运行都需要Python解释器。（下面介绍的是Python 3.9.1的安装）**

接下来我们来手动编译Tcl-Tk-Python 3.9.1。
首先前往https://www.tcl.tk/､http://python.org/､https://github.com/pypa/setuptools/releases､https://github.com/pypa/pip/releases下载我们的四大件。

Tcl､Tk的安装只需要解压后进入相应的Unix目录下，F4后输入命令：

> ./configure
> make
> sudo make install

即可。

Python安装需要修改Modules下的Setup或Setup.dist，将其中几行修改如下以启用Tcl､Tk：

> **#** *** Always uncomment this (leave the leading underscore in!):
>  _tkinter _tkinter.c tkappinit.c -DWITH_APPINIT \
> **#** *** Uncomment and edit to reflect where your Tcl/Tk libraries are:
> 	-L/usr/local/lib \
> **#** *** Uncomment and edit to reflect where your Tcl/Tk headers are:
> **#**	-I/usr/local/include \
> **#** *** Uncomment and edit to reflect where your X11 header files are:
> 	-I/usr/X11R6/include \
> **#** *** Or uncomment this for Solaris:
> **#**	-I/usr/openwin/include \
> **#** *** Uncomment and edit for Tix extension only:
> **#**	-DWITH_TIX -ltix8.1.8.2 \
> **#** *** Uncomment and edit for BLT extension only:
> **#**	-DWITH_BLT -I/usr/local/blt/blt8.0-unoff/include -lBLT8.0 \
> **#** *** Uncomment and edit for PIL (TkImaging) extension only:
> **#**     (See http://www.pythonware.com/products/pil/ for more info)
> **#**	-DWITH_PIL -I../Extensions/Imaging/libImaging  tkImaging.c \
> **#** *** Uncomment and edit for TOGL extension only:
> **#**	-DWITH_TOGL togl.c \
> **#** *** Uncomment and edit to reflect your Tcl/Tk versions:
> 	-ltk8.6 -ltcl8.6 \
> **#** *** Uncomment and edit to reflect where your X11 libraries are:
> **#**	-L/usr/X11R6/lib \
> **#** *** Or uncomment this for Solaris:
> **#**	-L/usr/openwin/lib \
> **#** *** Uncomment these for TOGL extension only:
> **#**	-lGL -lGLU -lXext -lXmu \
> **#** *** Uncomment for AIX:
> **#**	-lld \
> **#** *** Always uncomment this; X11 libraries to link with:
> 	-lX11

接下来回到Python文件夹内，输入命令：

> ./configure --prefix=/usr/local/pyth --enable-optimizations --without-ensurepip
> make
> sudo make install
> sudo ln -s /usr/local/pyth/bin/python3.9 /usr/bin/pyth

最后输入pyth，就可以初步使用Python 3.9.1了。

接下来解压Setuptools和Pip。
分别进入其目录内输入命令：

> sudo pyth setup.py install

即可安装。

最后输入：

> sudo mkdir /home/$USERNAME/.cache/pip/
> sudo mkdir /home/$USERNAME/.cache/pip/http/
> sudo chown -R root /home/$USERNAME/.cache/pip/
> sudo chown -R root /home/$USERNAME/.cache/pip/http/

以去除Pip的报错，此时一个完整的Python 3.9.1就安装好了。

### 第七章：改善体验

为了改善使用者的体验，笔者在此推荐输入命令：

> sudo apt install lxde

然后登出该账户，在齿轮里选择LXDE这一桌面环境，点击确定。
接下来是修复LXDE，这一最快的GNU/Linux桌面环境的快捷键。
其桌面环境已经帮我们修好了F4这一按键，以及部分地修复了vim的右键菜单，接下来要修复的是Ctrl+Alt+T。

输入命令：
vim是vi的升级版，其上下左右使用退格键更好。

> sudo vim ~/.config/openbox/lxde-rc.xml

然后在其中有很多“keybind key”的最末尾，的最内层嵌套框架内输入：
```
    <!-- Launch LXTerminal with Ctrl+Alt+t-->
    <keybind key="C-A-t">
      <action name="Execute">
        <command>lxterminal</command>
      </action>
    </keybind>
```

保存退出即可，如果不行请重启。



### 第八章：配置语言

在经过重启之后，登出再登录，点击齿轮更换桌面系统，配置X11的语言：

设置、区域和语言、点击加号，选择Other、Chinese (Rime)，再点击加号，选择Other、Chinese (Pinyin)。

接下来配置第一个桌面系统的语言：
左下角的菜单栏、区域和语言（输入法配置）、选择IBus Preferences、点击Input Method、点击加号，选择Other、Chinese (Rime)，再点击加号，选择Other、Chinese (Pinyin)

**到此为止，整个Pure OS算是安装完成了，各位同志可以开展自己的革命工作了。**

### 第九章：为什么不是各色其他在 gnu.org 上的操作系统？

为什么不推荐Debian？Trisquel？gNewSence？

因为Grand Unified Bootloader这个软件在笔者的主板上无法运行，笔者暂时不知道原因。

为什么不是Trisquel Mini？

其似乎没有Grand Unified Bootloader的问题，但是其网络代理存在待以解决的问题。

为什么不是Dragora/Guix？

它们无法使用Trisquel/Debian系的Startup Disk Creator制作Live。

为什么不是Ututo S？

它在笔者的计算机上无法安装，并且其弄坏了我的一个高速的128G USB，使其FDD化，无法再安装其他Live了，甚至使用专业的数据恢复软件都无法恢复。

### 第十章：对Ubuntu的批判

Ubuntu(etc.)维护着私有软件的特定存储库，Canonical在其某些发行渠道中明确宣传并推荐以Ubuntu(etc.)为名的私有软件。Ubuntu(etc.)提供了仅安装自由软件包的选项，这意味着它也提供了安装私有软件包的选项。此外，Ubuntu(etc.)中包含的Linux版本（内核）包含固件Blob。

“Ubuntu(etc.)软件中心”列出了混杂在一起的私有程序和自由程序。很难分辨哪些是自由的，因为自由下载的私有程序被标记为“自由”。

Ubuntu(etc.)似乎允许将带有商标的精确副本商业化分发；仅对于修改版本，才需要删除商标。这是商标可接受的政策。同一页的下一页对“Ubuntu(etc.)专利”作了含糊和不祥的陈述，但没有提供足够的细节来表明这是否构成侵略。

该页面使用误导性术语“知识产权”来分散混乱，该术语错误地假定商标法和专利法以及其他几项法律属于一个概念框架。毫无例外地使用该术语是有害的，因此在引用他人对该术语的使用后，我们应该始终拒绝该术语。但是，这并不是将Ubuntu(etc.)作为GNU / Linux发行版的实质性问题。

自由软件基金会创始人理查德‧斯托曼反击实用主义的Ubuntu系统：**Ubuntu : The Spyware，自从Ubuntu更新中加入了亚马逊，这使得社区强烈不满。自由软件理应由自由和安全著称，但Ubuntu唱了反调。就像里面说的“实用性第一”，这是完全错误的。可能某些自由软件确实没有那么实用，但私有软件在道德上就落了自由软件一条街。**

下面是出处视频：

**https://www.youtube.com/watch?v=CP8CNp-vksc**
**https://www.bilibili.com/video/av95382892/**

### 尾声

笔者由衷地希望各位在安装GNU/Linux上困惑已久的同志通过这篇文章，可以迅速用上GNU/Linux，为马列毛主义革命事业的推进添砖加瓦。

感谢各位的观看。

**本文采用CC0协议投放至公有领域。**