<template><div><h1 id="lab4" tabindex="-1"><a class="header-anchor" href="#lab4"><span>Lab4</span></a></h1>
<h2 id="_1-cau-hinh-ipv6-phan-1" tabindex="-1"><a class="header-anchor" href="#_1-cau-hinh-ipv6-phan-1"><span>1. Cấu hình IPv6 - Phần 1</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/BdsIahtrWIA?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab04-01-IPv6 Configuration Part 1.pkt</code>, thực hiện:</p>
<p><code v-pre>IPv4</code> được cấu hình thành công trên các thiết bị. Thực hiện cấu hình <code v-pre>IPv6</code> để hỗ trợ song song <code v-pre>IPv4</code> và <code v-pre>IPv6</code></p>
<ul>
<li>
<p>Bật <code v-pre>IPv6</code> routing trên <code v-pre>R1</code>.</p>
</li>
<li>
<p>Cấu hình địa chỉ <code v-pre>IPv6</code> phù hợp cho <code v-pre>R1</code>. Hiển thị <code v-pre>running-configuration</code> của <code v-pre>R1</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Cấu hình địa chỉ <code v-pre>IPv6</code> của các <code v-pre>PC</code></p>
<div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p>
<p>Cấu hình địa chỉ <code v-pre>default gateway</code> phù hợp</p>
</div>
</li>
<li>
<p>Kiểm tra nối kết mạng giữa các <code v-pre>PC</code> (<code v-pre>IPv4</code> và <code v-pre>IPv6</code>) bằng lệnh <code v-pre>ping</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_2-cau-hinh-ipv6-phan-2" tabindex="-1"><a class="header-anchor" href="#_2-cau-hinh-ipv6-phan-2"><span>2. Cấu hình IPv6 - Phần 2</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/Zfhpd7dl6QI?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab04-02-IPv6 Configuration Part 2.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Sử dụng <code v-pre>EUI-64</code> để cấu hình địa chỉ <code v-pre>IPv6 </code>cho <strong>interface G0/1</strong> của router <code v-pre>R1/R2</code>.</p>
</li>
<li>
<p>Cấu hình địa chỉ <code v-pre>IPv6</code> cho các <code v-pre>PC</code>, lưu ý cấu hình địa chỉ <code v-pre>default gateway</code> phù hợp.</p>
</li>
<li>
<p>Bật <code v-pre>IPv6</code> cho <strong>interface G0/0</strong> của router <code v-pre>R1/R2</code> mà không cần cấu hình địa chỉ cụ thể. Hiển thị <code v-pre>running-configuration</code> của <code v-pre>R1</code> và <code v-pre>R2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Cấu hình vạch đường tĩnh cho router <code v-pre>R1/R2</code> cho <code v-pre>PC1</code> ping <code v-pre>PC2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_3-xem-vach-đuong-tinh-ipv6" tabindex="-1"><a class="header-anchor" href="#_3-xem-vach-đuong-tinh-ipv6"><span>3. Xem vạch đường tĩnh IPv6</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/WSBEVFANMmc?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab04-03-IPv6 Static Routes.pkt</code>, thực hiện:</p>
<p><code v-pre>IPv6</code> đã được cấu hình thành công trên các <strong>routers</strong>. Các nối kết <strong>serial</strong> chỉ sử dụng địa chỉ <code v-pre>link-local</code>.</p>
<ul>
<li>
<p>Bật <code v-pre>IPv6 routing</code> trên các <strong>router</strong>.</p>
</li>
<li>
<p>Sử dụng <code v-pre>SLAAC</code> để cấu hình địa chỉ <code v-pre>IPv6</code> cho các <code v-pre>PC</code>. Địa chỉ nào đã được sử dụng? (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Cấu hình vạch đường tĩnh cho các <strong>router</strong> để <code v-pre>PC1</code> <strong>ping</strong> tới được <code v-pre>PC2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
<div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p>
<p>Đường mạng qua R2 được sử dụng như đường dự phòng.</p>
</div>
</li>
<li>
<p>Hiển thị <code v-pre>running-configuration</code> của các <strong>router</strong> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
<h2 id="_4-wireless-lan" tabindex="-1"><a class="header-anchor" href="#_4-wireless-lan"><span>4. Wireless LAN</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/Il8ev78fcqw?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab04-04-Wireless LANs.pkt,</code>, thực hiện:</p>
<ul>
<li>
<p>Sử dụng trình duyệt web trên <code v-pre>PC1</code> truy cập (<code v-pre>HTTPS</code>) vào <code v-pre>GUI</code> của <code v-pre>WLC1</code></p>
<div class="language-textile line-numbers-mode" data-ext="textile" data-title="textile"><pre v-pre class="language-textile"><code><span class="token phrase">Username: admin
Password: Cisco123
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Làm quen với giao diện <code v-pre>GUI</code> của <code v-pre>WLC</code></p>
</li>
<li>
<p>Cấu hình d<strong>ynamic interface</strong> cho <strong>Internal &amp; Guest WLANs</strong> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Tạo <strong>Internal &amp; Guest WLANs</strong> sử dụng <code v-pre>WPA2+PSK</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
<li>
<p>Thêm 1 thiết bị <strong>wireless client</strong> và kết nối với <strong>AP</strong>. Thiết bị có thể <code v-pre>ping</code> tới <code v-pre>PC1</code> không ? (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình minh hoạ</em>)</p>
</li>
</ul>
</blockquote>
</div></template>


