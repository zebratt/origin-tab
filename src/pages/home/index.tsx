import React from 'react';

function HomePage() {
  return (
    <div className="text-sm">
      <div>Forums</div>
      <a className="block text-blue-500 m-2" target="_blank" href="https://e.juejin.cn/">juejin</a>
      <a className="block text-blue-500 m-2" target="_blank" href="http://www.ruanyifeng.com/blog">阮一峰的网络日志</a>
      <a className="block text-blue-500 m-2" target="_blank" href="http://coolshell.cn/feed">CollShell</a>
      <a className="block text-blue-500 m-2" target="_blank" href="http://www.zhangxinxu.com/wordpress/?feed=rss2">张鑫旭</a>
      <a className="block text-blue-500 m-2" target="_blank" href="https://diygod.me/atom.xml">DIYgod</a>
    </div>
  );
}

export default HomePage;
