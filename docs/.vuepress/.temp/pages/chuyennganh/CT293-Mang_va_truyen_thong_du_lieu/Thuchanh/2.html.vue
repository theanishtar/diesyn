<template><div><h1 id="lab2" tabindex="-1"><a class="header-anchor" href="#lab2"><span>Lab2</span></a></h1>
<h2 id="_1-cau-hinh-đia-chi-ipv4" tabindex="-1"><a class="header-anchor" href="#_1-cau-hinh-đia-chi-ipv4"><span>1. Cấu hình địa chỉ IPv4</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/e1jbvyMeS5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35">Sử dụng file <code v-pre>Lab02-01-IPv4 Addresses.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu hình <code v-pre>hostname</code> cho <code v-pre>R1</code></p>
</li>
<li>
<p>Sử dụng lệnh <code v-pre>show</code>, hiển thị thông tin của các <code v-pre>interface</code> của <code v-pre>R1</code></p>
</li>
<li>
<p>Cấu hình địa chỉ <code v-pre>IP</code> phù hợp cho các <code v-pre>interface</code> của <code v-pre>R1</code> và bật các <code v-pre>interface</code> đó lên.</p>
</li>
<li>
<p>Cấu hình các mô tả cho các <code v-pre>interface</code></p>
</li>
<li>
<p>Sử dụng lệnh <code v-pre>show</code> để hiển thị các thông tin các <code v-pre>interface</code> của <code v-pre>R1</code></p>
</li>
<li>
<p>Hiển thị <code v-pre>running configuration</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Cấu hìnhh địa chỉ <code v-pre>IP</code> cho <code v-pre>PC1</code>, <code v-pre>PC2</code>, <code v-pre>PC3</code></p>
</li>
<li>
<p>Từ <code v-pre>PC1</code> ping tới <code v-pre>PC2</code> và <code v-pre>PC3</code> để kiểm tra nối kết (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_2-cau-hinh-interface-cua-switch-va-router" tabindex="-1"><a class="header-anchor" href="#_2-cau-hinh-interface-cua-switch-va-router"><span>2. Cấu hình interface của switch và router</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/rzDb5DoBKRk?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab02-02-Interface Configuration.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu hình <code v-pre>hostname</code> cho <code v-pre>R1</code>, <code v-pre>SW1</code>, <code v-pre>SW2</code></p>
</li>
<li>
<p>Cấu hình địa chỉ <code v-pre>IP</code> phù hợp cho <code v-pre>R1</code>, <code v-pre>PC1</code>, <code v-pre>PC2</code>, <code v-pre>PC3</code>, <code v-pre>PC4</code></p>
</li>
<li>
<p>Cấu hình tốc độ và chế độ <code v-pre>duplex</code> cho các <code v-pre>interface</code> nối kết các thiết bị mạng khác (<em><code v-pre>switch</code>, <code v-pre>router</code> KHÔNG phải <code v-pre>PC</code></em>)</p>
</li>
<li>
<p>Cấu hình mô tả phù hợp cho mỗi <code v-pre>interface</code></p>
</li>
<li>
<p>Tắt các <code v-pre>interface</code> không nối kết tới các thiết bị khác</p>
</li>
<li>
<p>Hiển thị <code v-pre>running configuation</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_3-cau-hinh-vach-đuong-tinh-static-route" tabindex="-1"><a class="header-anchor" href="#_3-cau-hinh-vach-đuong-tinh-static-route"><span>3. Cấu hình vạch đường tĩnh (<em>static route</em>)</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/XHxOtIav2k8?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35">Sử dụng file <code v-pre>Lab02-03-Configuring Static Routes.pkt</code>, thực hiện</p>
<ul>
<li>
<p>Cấu hình <code v-pre>PC</code> và <code v-pre>router</code> theo sơ đồ mạng (<em>không cần cấu hình các <code v-pre>switch</code></em>).</p>
<div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p>
<p>Cấu hình <code v-pre>gateway</code> cho các <code v-pre>PC</code></p>
</div>
</li>
<li>
<p>Cấu hình vạch đường tĩnh (<em>static route</em>) cho các <code v-pre>router</code> sao cho <code v-pre>PC1</code> có thể ping thành công tới <code v-pre>PC2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Hiển thị <code v-pre>running configuration</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_4-xu-ly-loi-trong-cau-hinh-vach-đuong-tinh" tabindex="-1"><a class="header-anchor" href="#_4-xu-ly-loi-trong-cau-hinh-vach-đuong-tinh"><span>4. Xử lý lỗi trong cấu hình vạch đường tĩnh</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/3z8YGEVFTiA?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35">Sử dụng file <code v-pre>Lab02-04-Troubleshooting Static Routes.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Hiện tại <code v-pre>PC1</code>, <code v-pre>PC2</code> không thể ping được nhau bởi vì cấu hình sai trên mỗi <code v-pre>router</code>. Tìm các cấu hình sai và sửa chúng để cho <code v-pre>PC1</code>, <code v-pre>PC2</code> có thể ping được nhau</p>
</li>
<li>
<p>Hiển thị <code v-pre>running configuration</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_5-vlsm" tabindex="-1"><a class="header-anchor" href="#_5-vlsm"><span>5. VLSM</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/Rn_E1Qv8--I?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35">Sử dụng file <code v-pre>Lab02-05-VLSM.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Chia mạng con cho nhánh mạng <code v-pre>192.168.5.0/24</code> để có thể cung cấp đủ địa chỉ cho các <code v-pre>LAN</code> và nối kết giữa <code v-pre>R1</code> và <code v-pre>R2</code></p>
</li>
<li>
<p>Lấy địa chỉ <code v-pre>IP</code> khả dụng đầu tiên của mỗi mạng cấu hình cho <code v-pre>PC</code> trog mỗi <code v-pre>LAN</code></p>
</li>
<li>
<p>Lấy địa chỉ <code v-pre>IP</code> khả dụng cuối cùng của mỗi mạng con cấu hih2 cho <code v-pre>interface</code> của <code v-pre>router</code> trong mỗi <code v-pre>LAN</code></p>
</li>
<li>
<p>Cấu hình vạch đường tĩnh cho mỗi <code v-pre>router</code> để các <code v-pre>PC</code> có thể ping lẫn nhau</p>
</li>
<li>
<p>Hiển thị <code v-pre>running configuration</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
</div></template>


