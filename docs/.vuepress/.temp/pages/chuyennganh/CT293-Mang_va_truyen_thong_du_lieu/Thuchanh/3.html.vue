<template><div><h1 id="lab3" tabindex="-1"><a class="header-anchor" href="#lab3"><span>Lab3</span></a></h1>
<h2 id="_1-cau-hinh-vlan" tabindex="-1"><a class="header-anchor" href="#_1-cau-hinh-vlan"><span>1. Cấu hình VLAN</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/-tq7f3xtyLQ?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab03-01-VLANs.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu hình địa chỉ <code v-pre>IP</code> và mặt nạ mạng cho các PC. Đặt <code v-pre>gateway</code> là địa chí khả dụng cuối cùng của <code v-pre>subnet</code></p>
</li>
<li>
<p>Tạo 3 nối kết giữa <code v-pre>R1</code> và <code v-pre>SW1</code>. Cấu hình mỗi <code v-pre>interface</code> của <code v-pre>R1</code> là <code v-pre>gateway</code> của 1 <code v-pre>VLAN</code> (địa chỉ <code v-pre>IP</code> của <code v-pre>interface</code> là địa chỉ <code v-pre>gateway</code> của <code v-pre>subnet</code>)</p>
</li>
<li>
<p>Cấu hình <code v-pre>VLAN</code> cho các <code v-pre>interface</code> của <code v-pre>SW1</code> phù hợp sơ đồ mạng, kể cả <code v-pre>interface</code> nối kết tới <code v-pre>R1</code>. Đặt tên cho các <code v-pre>VLAN</code> (<code v-pre>Engineering</code>, <code v-pre>HR</code>, <code v-pre>Sales</code>).</p>
</li>
<li>
<p>Ping giữa các PC để kiểm tra nối kết (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Hiển thị running-configuration của SW1 và R1 (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_2-roas" tabindex="-1"><a class="header-anchor" href="#_2-roas"><span>2. ROAS</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/iRkFE_lpYgc?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab03-02 - ROAS.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu hình <code v-pre>VLAN</code> cho các <code v-pre>interface</code> của các switch <code v-pre>SW1</code>, <code v-pre>SW2</code> phù hợp với sơ đồ mạng.</p>
</li>
<li>
<p>Cấu hình nối kết giữa <code v-pre>SW1</code> và <code v-pre>SW2</code> hỗ trợ <code v-pre>trunking</code> cho các <code v-pre>VLAN</code> cần thiết. Cấu hình các <code v-pre>VLAN</code> không dùng là <code v-pre>native VLAN</code>. Đảm bảo là các <code v-pre>VLAN</code> cần thiết đều được cấu hình.</p>
</li>
<li>
<p>Cấu hình nối kết giữa <code v-pre>SW2</code> và <code v-pre>R1</code> sử dụng router on a stick (<code v-pre>ROAS</code>). Gán địa chỉ khả dụng cuối cùng của mỗi <code v-pre>subnet</code> cho các <code v-pre>subinterface</code> của<code v-pre>R1</code>.</p>
</li>
<li>
<p>Kiểm tra nối kết giữa các <code v-pre>PC</code> bằng lệnh <code v-pre>ping</code> (chụp hình minh họa) (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Hiển thị <strong>running-configuration</strong> của <code v-pre>SW1</code> và <code v-pre>R1</code> (chụp hình minh họa) (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_3-multiplayer-switching" tabindex="-1"><a class="header-anchor" href="#_3-multiplayer-switching"><span>3. Multiplayer Switching</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/MQcCr3QW1vE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab03-03 - Multilayer Switching.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu thiết trong sơ đồ mạng đã được cấu hình giống như <strong>Câu 2</strong> trong bài thực hành. Trong đó các PC đã được cấu hình <code v-pre>VLAN</code> phù hợp, nối kết giữa <code v-pre>SW1</code> và <code v-pre>SW2</code> đã được trunking phù hợp. <code v-pre>R1</code> và <code v-pre>SW2</code> được nối kết sử dụng <code v-pre>ROAS</code>.</p>
</li>
<li>
<p>Thay thế cấu hình <code v-pre>ROAS</code> của nối kết <code v-pre>R1-SW2</code> thành nối kết <code v-pre>point-to-point</code> <strong>layer 3</strong>. Cấu hình <strong>default route</strong> cho <code v-pre>SW2</code> với <strong>next-hop</strong> là <strong>interface</strong> <code v-pre>G0/0</code> của <code v-pre>R1</code>.</p>
</li>
<li>
<p>Cấu hình các <code v-pre>SVI</code> cho mỗi <code v-pre>VLAN</code> trên <code v-pre>SW2</code>. Gán địa chỉ <code v-pre>IP</code> khả dụng cuối cùng của subnet cho mỗi <code v-pre>SVI</code>.</p>
</li>
<li>
<p>Kiểm tra nối kết giữa các <code v-pre>PC</code> ở các <code v-pre>VLAN</code> bằng lệnh <code v-pre>ping</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Cấu hình sao cho các PC có thể ping tới Internet (địa chỉ <code v-pre>1.1.1.1</code>) (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Hiển thị running-configuration <code v-pre>SW2</code> và <code v-pre>R1</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_4-vach-đuong-đong-tu-su-dung-giao-thuc-ospf" tabindex="-1"><a class="header-anchor" href="#_4-vach-đuong-đong-tu-su-dung-giao-thuc-ospf"><span>4. Vạch đường động từ sử dụng giao thức OSPF</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/LeLRWjfylcs?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab03-04 - OSPF Part 1.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu hình <code v-pre>hostname</code> và địa chỉ <code v-pre>IP</code> cho mỗi thiết bị trong sơ đồ mạng. Bật các interface của các router lên. (Không cần cấu hình router <code v-pre>ISPR1</code>)</p>
</li>
<li>
<p>Cấu hình 1 <code v-pre>loopback</code> interface trên mỗi <code v-pre>router</code> (<code v-pre>1.1.1.1/32</code> cho <code v-pre>R1</code>, <code v-pre>2.2.2.2/32</code> cho <code v-pre>R2</code> ...)</p>
</li>
<li>
<p>Cấu hình <code v-pre>OSPF</code> trên mỗi <code v-pre>router</code>:</p>
<ul>
<li>
<p>Bật <code v-pre>OSPF</code> trên mỗi interface (bao gồm cả <strong>loopback interface</strong>), không cần cấu hình <code v-pre>OSPF</code> cho nối kết từ <code v-pre>R1</code> đến <code v-pre>ISPR1</code>.</p>
</li>
<li>
<p>Cấu hình <strong>passive interface</strong> phù hợp (bao gồm cả <strong>loopback interface</strong>)</p>
</li>
</ul>
</li>
<li>
<p>Cấu hình <code v-pre>R1</code> là (<code v-pre>ASBR</code> Autonomous System Boundary Router) để quảng bá <code v-pre>default route</code> tới các <code v-pre>router</code> khác.</p>
</li>
<li>
<p>Hiển thị <code v-pre>routing table</code> của các <code v-pre>router</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_5-vach-đuong-đong-su-dung-giao-thuc-eigrp" tabindex="-1"><a class="header-anchor" href="#_5-vach-đuong-đong-su-dung-giao-thuc-eigrp"><span>5. Vạch đường động sử dụng giao thức EIGRP</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/ffnJ5oBIObY?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab03-05 - EIGRP Configuration.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Cấu hình <code v-pre>hostname</code> và địa chỉ <code v-pre>IP</code> cho mỗi thiết bị trong sơ đồ mạng. Bật các <code v-pre>interface</code> của các <code v-pre>router</code> lên.</p>
</li>
<li>
<p>Cấu hình 1 <strong>loopback interface</strong> trên mỗi <code v-pre>router</code> (<code v-pre>1.1.1.1/32</code> cho <code v-pre>R1</code>, <code v-pre>2.2.2.2/32</code> cho <code v-pre>R2</code>.....)</p>
</li>
<li>
<p>Cấu hình <code v-pre>EIGRP</code> trên mỗi router:</p>
<ul>
<li>
<p>Tắt chức năng <strong>auto-summary</strong></p>
</li>
<li>
<p>Bật <code v-pre>EIGR</code>P trên mỗi <strong>interface</strong> (bao gồm cả <strong>loopback interface</strong>)</p>
</li>
<li>
<p>Cấu hình <strong>passive interface</strong> phù hợp (bao gồm cả <strong>loopback interface</strong>)</p>
</li>
</ul>
</li>
<li>
<p><strong>KHÔNG CẦN</strong> cấu hình <code v-pre>R1</code> hỗ trợ <strong>unequal-cost</strong> <strong>load-balancing</strong> khi gửi dữ liệu tới địa chỉ <code v-pre>192.168.4.0/24</code></p>
</li>
<li>
<p>Hiển thị <strong>routing table</strong> của các <strong>router</strong> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
</div></template>


