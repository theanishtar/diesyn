<template><div><h1 id="lab-1-packed-tracer-cau-hinh-switch-va-thiet-bi-đau-cuoi-ethernet-switching" tabindex="-1"><a class="header-anchor" href="#lab-1-packed-tracer-cau-hinh-switch-va-thiet-bi-đau-cuoi-ethernet-switching"><span>Lab 1: Packed Tracer - Cấu hình Switch và thiết bị đầu cuối - Ethernet Switching</span></a></h1>
<h2 id="_1-gioi-thieu-packet-tracer" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu-packet-tracer"><span>1. Giới thiệu Packet Tracer</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe  src="https://www.youtube.com/embed/kHqJ74J2sDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<h3 id="cau-1" tabindex="-1"><a class="header-anchor" href="#cau-1"><span>Câu 1</span></a></h3>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35">  Cài đặt phần mềm <code v-pre>Packet Tracer</code> vào máy tính cá nhân (<em>nếu đã có sẵn trên máy tính thì không cần thực hiện câu này</em>)</p>
</blockquote>
<h3 id="cau-2" tabindex="-1"><a class="header-anchor" href="#cau-2"><span>Câu 2</span></a></h3>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab01-01-Packet_Tracer_Introduction.pkt</code> tạo một sơ đồ mạng giống như hình bên dưới.</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> Sau khi hoàn thành chụp hình sơ đồ mạng trên <code v-pre>Packet Tracer</code>.</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-34-40-Screen Shot 2022-02-15 at 13.34.37.png" title="" alt="Screen Shot 2022-02-15 at 13.34.37.png" width="519">
</blockquote>
<h2 id="_2-noi-ket-cac-thiet-bi" tabindex="-1"><a class="header-anchor" href="#_2-noi-ket-cac-thiet-bi"><span>2. Nối kết các thiết bị</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/K6Qt23sY68Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab1-02-Connecting_Devices.pkt</code>, nối kết các thiết bị lại với nhau sử dụng loại cáp phù hợp. Giả sử là chế độ <code v-pre>Auto MDI-X</code> không được hỗ trợ / tắt trên các thiết bị</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> Sau khi hoàn thành chụp hình sơ đồ mạng trên <code v-pre>Packet Tracer</code>.</p>
</blockquote>
<h2 id="_3-mo-hinh-osi" tabindex="-1"><a class="header-anchor" href="#_3-mo-hinh-osi"><span>3. Mô hình OSI</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/7nmYoL0t2tU?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab1-03-OSI_Model.pkt</code> thực hiện:</p>
<ul>
<li>
<p>Sử dụng chế độ <code v-pre>Simulation mode</code> để xem dữ liệu mạng được gửi giữa các thiết bị</p>
</li>
<li>
<p>Trên <code v-pre>PC1</code> thực hiện lệnh <code v-pre>ipconfig /release</code> và <code v-pre>ipconfig /renew</code> để xin cấp lại địa chỉ <code v-pre>IP</code>. Chọn <code v-pre>1</code> gói tin <code v-pre>DHCP</code> được gửi từ <code v-pre>PC1</code>, cho biết giao thực được sử dụng các layer <code v-pre>2</code>, <code v-pre>3</code>, <code v-pre>4</code> và <code v-pre>7</code>.</p>
</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình chứng minh hoàn thành</em></p>
</blockquote>
<h2 id="_4-cau-hinh-bao-mat-cho-cac-thiet-bi" tabindex="-1"><a class="header-anchor" href="#_4-cau-hinh-bao-mat-cho-cac-thiet-bi"><span>4. Cấu hình bảo mật cho các thiết bị</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/SDocmq1c05s?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab1-04-Basic_Device_Security.pkt</code>, dùng các lệnh trên <code v-pre>Cisco IOS</code>:</p>
<ul>
<li>
<p>Đổi tên của các <code v-pre>router</code> và <code v-pre>switch</code> tương ứng với ghi chú trên sơ đồ mạng</p>
</li>
<li>
<p>Đặt mật khẩu không mã hoá là <code v-pre>CCNA</code> cho các <code v-pre>router</code> và <code v-pre>switch</code></p>
</li>
<li>
<p>Hiển thị mật khẩu trong <code v-pre>running configuration</code>. Sau đó lưu <code v-pre>running configuration</code> vào <code v-pre>startup configuration</code></p>
</li>
<li>
<p><strong>Hiển thị startup configuration</strong></p>
</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình chứng minh hoàn thành</em></p>
</blockquote>
<h2 id="_5-phan-tich-ethernet-switching" tabindex="-1"><a class="header-anchor" href="#_5-phan-tich-ethernet-switching"><span>5. Phân tích Ethernet Switching</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/Ig0dSaOQDI8?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab1-05-Ethernet_LAN-Switching.pkt</code>, thực hiện:</p>
<ul>
<li>
<p>Giả sử bảng địa chỉ <code v-pre>MAC</code> của các <code v-pre>Switch</code> và bảng <code v-pre>ARP</code> của các <code v-pre>PC</code> đều rỗng. Nếu <code v-pre>PC1</code> <code v-pre>ping</code> tới <code v-pre>PC3</code> thì những thông điệp vào sẽ được gửi trên mạng và thiết bị nào nhận chúng ? Thực hiện lệnh <code v-pre>ping</code> và sử dụng chế độ <code v-pre>simulation mode</code> để kiểm tra kết quả.</p>
</li>
<li>
<p>Sử dụng lệnh <code v-pre>ping</code> để các <code v-pre>switch</code> học địa chỉ <code v-pre>MAC</code> của các <code v-pre>PC</code>.</p>
</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Chụp hình chứng minh hoàn thành</em></p>
</blockquote>
<h2 id="_6-cau-hinh-switch-va-cac-thiet-bi-đau-cuoi" tabindex="-1"><a class="header-anchor" href="#_6-cau-hinh-switch-va-cac-thiet-bi-đau-cuoi"><span>6. Cấu hình switch và các thiết bị đầu cuối</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">💡 GUIDE</p>
<div class="videoZen">
  <iframe src="https://www.youtube.com/embed/yQdOyK0n6NY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png"  width="35"> Sử dụng file <code v-pre>Lab1-06-Basic_Switch_and_End_Device_Configuration.pka</code>, thực hiện :</p>
<ul>
<li>
<p>Sử dụng cáp <code v-pre>console</code> nối các <code v-pre>PC</code> tới <code v-pre>switch</code></p>
</li>
<li>
<p>Đặt tên 2 <code v-pre>switch</code> lần lượt là <code v-pre>class-A</code> và <code v-pre>class-B</code></p>
</li>
<li>
<p>Sử dụng mật khẩu <code v-pre>R4Xẻ</code> cho tất cả <code v-pre>lines</code>. Sử dụng mật khẩu bí mật (<em>secret password</em>) là <code v-pre>C4aJa</code>. Mã hoá tất cả mật khẩu</p>
</li>
<li>
<p>Cấu hình một <code v-pre>MOTD banner</code></p>
</li>
<li>
<p>Cấu hình địa chỉ cho các thiết bị theo bảng sau:</p>
<table>
<thead>
<tr>
<th>Device</th>
<th>Interface</th>
<th>Address</th>
<th>Subnet Mask</th>
</tr>
</thead>
<tbody>
<tr>
<td>Class-A</td>
<td>VLAN1</td>
<td>128.107.20.10</td>
<td>255.255.255.0</td>
</tr>
<tr>
<td>Class-B</td>
<td>VLAN1</td>
<td>128.107.20.15</td>
<td>255.255.255.0</td>
</tr>
<tr>
<td>Student-1</td>
<td>NIC</td>
<td>128.107.20.25</td>
<td>255.255.255.0</td>
</tr>
<tr>
<td>Student-2</td>
<td>NIC</td>
<td>128.107.20.30</td>
<td></td>
</tr>
</tbody>
</table>
</li>
<li>
<p>Lưu tất cả các công việc lại và kiểm tra nối kết giữa các thiết bị</p>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">⚠️ LƯU Ý</p>
<p>Khi click vào <code v-pre>Check Results</code> để xem các công việc đã hoàn thành.</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30">  Sau khi hoàn thành tất cả các công việc, chụp màn hình `Assessment items để chứng minh</p>
</div>
</blockquote>
</div></template>


