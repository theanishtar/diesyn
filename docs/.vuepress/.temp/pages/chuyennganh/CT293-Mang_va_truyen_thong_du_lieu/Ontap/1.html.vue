<template><div><h1 id="bai-1-gioi-thieu-ve-mang" tabindex="-1"><a class="header-anchor" href="#bai-1-gioi-thieu-ve-mang"><span>Bài 1. Giới thiệu về mạng</span></a></h1>
<h2 id="_1-gioi-thieu-ve-mang-tcp-ip" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu-ve-mang-tcp-ip"><span>1. Giới thiệu về mạng TCP/IP</span></a></h2>
<h3 id="mo-hinh-mang-tcp-ip" tabindex="-1"><a class="header-anchor" href="#mo-hinh-mang-tcp-ip"><span>Mô hình mạng TCP/IP</span></a></h3>
<ol>
<li>
<p>Giao thức nào sau đây ví dụ về lớp truyền tải <code v-pre>TCP/IP</code> (<em>chọn 2 đáp án</em>)</p>
<ul>
<li>
<p>[ ] Ethernet</p>
</li>
<li>
<p>[ ] HTTP</p>
</li>
<li>
<p>[ ] IP</p>
</li>
<li>
<p>[x] UDP</p>
</li>
<li>
<p>[ ] SMTP</p>
</li>
<li>
<p>[x] TCP</p>
</li>
</ul>
</li>
<li>
<p>Giao thức nào sau đây ví dụ về lớp liên kết dữ liệu <code v-pre>TCP/IP</code> (<em>chọn 2 đáp án</em>)</p>
<ul>
<li>
<p>[x] Ethernet</p>
</li>
<li>
<p>[ ] HTTP</p>
</li>
<li>
<p>[ ] IP</p>
</li>
<li>
<p>[ ] IDP</p>
</li>
<li>
<p>[ ] SMTP</p>
</li>
<li>
<p>[ ] TCP</p>
</li>
<li>
<p>[x] PPP</p>
</li>
</ul>
</li>
<li>
<p>Quá trình của <code v-pre>HTTP</code> yêu cầu <code v-pre>TCP</code> gửi data và đảm bảo rằng nó nhận chính xác ví dụ cho điều gì?</p>
<ul>
<li>
<p>[ ] Tương tác cùng một layer</p>
</li>
<li>
<p>[x] Tương tác layer liền kề</p>
</li>
<li>
<p>[ ] Mô hình OSI</p>
</li>
<li>
<p>[ ] Tất cả đều đúng</p>
</li>
</ul>
</li>
<li>
<p>Quá trình <code v-pre>TCP</code> trên một máy tính đánh dấu phân đoạn <code v-pre>TCP</code> là phân đoạn 1, và máy tính nhận sau đó xác nhận đã nhận phân đoạn 1 là một ví dụ về điều gì?</p>
<ul>
<li>
<p>[ ] Đóng gói dữ liệu</p>
</li>
<li>
<p>[x] Tương tác cùng một layer</p>
</li>
<li>
<p>[ ] Tương tác layer liền kề</p>
</li>
<li>
<p>[ ] Mô hình OSI</p>
</li>
<li>
<p>[ ] Tất cả đều đúng</p>
</li>
</ul>
</li>
<li>
<p>Quá trình của một <strong>web server</strong> thêm một <code v-pre>TCP header</code> vào nội dung của trang web, được thực hiện bằng cách thêm <code v-pre>IP header</code> và thêm <strong>data-link</strong> <code v-pre>header</code> và <code v-pre>trailer</code>, đó là ví dụ nào sau đây ?</p>
<ul>
<li>
<p>[x] Đóng gói dữ liệu</p>
</li>
<li>
<p>[ ] Tương tác cùng một layer</p>
</li>
<li>
<p>[ ] Mô hình OSI</p>
</li>
<li>
<p>[ ] Tất cả đều đúng</p>
</li>
</ul>
</li>
</ol>
<h3 id="thuat-ngu-đong-goi-du-lieu" tabindex="-1"><a class="header-anchor" href="#thuat-ngu-đong-goi-du-lieu"><span>Thuật ngữ đóng gói dữ liệu</span></a></h3>
<ol start="6">
<li>
<p>Thuật ngữ nào sao đây sử dụng cụ thể để xác định thực thể được tạo khi đóng gói dữ liệu trong lớp <strong>data-link</strong> <code v-pre>headers</code> và <code v-pre>trailers</code> ?</p>
<ul>
<li>
<p>[ ] Data</p>
</li>
<li>
<p>[ ] Chunk</p>
</li>
<li>
<p>[ ] Segment</p>
</li>
<li>
<p>[x] Frame</p>
</li>
<li>
<p>[ ] Packet</p>
</li>
</ul>
</li>
<li>
<p>Thuật ngữ đóng gói OSI nào sao đây có thể sử dụng thay thế thuật ngữ <code v-pre>frame</code> ?</p>
<ul>
<li>
<p>[ ] Layer 1 PDU</p>
</li>
<li>
<p>[x] Layer 2 PDU</p>
</li>
<li>
<p>[ ] Layer 3 PDU</p>
</li>
<li>
<p>[ ] Layer 5 PDU</p>
</li>
<li>
<p>[ ] Layer 7 PDU</p>
</li>
</ul>
</li>
</ol>
<h2 id="_2-co-ban-ve-ethernet-lans" tabindex="-1"><a class="header-anchor" href="#_2-co-ban-ve-ethernet-lans"><span>2. Cơ bản về Ethernet LANs</span></a></h2>
<h3 id="tong-quan-ve-lans" tabindex="-1"><a class="header-anchor" href="#tong-quan-ve-lans"><span>Tổng quan về LANs</span></a></h3>
<ol>
<li>
<p>Trong mạng <code v-pre>LAN</code> của một văn phòng nhỏ, một số thiết bị người dùng kết nối <code v-pre>LAN</code> bằng <strong>cable</strong>, trong khi một số người dùng thì kết nối <strong>wireless</strong>. Điều nào sau đây đúng về việc sử dụng kết nối <code v-pre>Ethernet</code> trong mạng <code v-pre>LAN</code> này ?</p>
<ul>
<li>
<p>[x] Chỉ thiết bị kết nối bằng cables là sử dụng Ethernet</p>
</li>
<li>
<p>[ ] Chỉ thiết bị kết nối bằng wireless là sử dụng Ethernet</p>
</li>
<li>
<p>[ ] Cả 2 thiết bị kết nối cables và wireless là sử dụng Ethernet</p>
</li>
<li>
<p>[ ] Khôn có thiết bị nào sử dụng Ethernet</p>
</li>
</ul>
</li>
<li>
<p>Chuẩn Ethernet nào sau đây định nghĩa <code v-pre>Gigabit Ethernet</code> thông qua cáp <code v-pre>UTP</code> ?</p>
<ul>
<li>
<p>[ ] 10GBASE-T</p>
</li>
<li>
<p>[ ] 100BASE-T</p>
</li>
<li>
<p>[x] 1000BASE-T</p>
</li>
<li>
<p>[ ] Tất cả đều sai</p>
</li>
</ul>
</li>
</ol>
<h3 id="xay-dung-ethernet-lans-vat-ly-bang-utp" tabindex="-1"><a class="header-anchor" href="#xay-dung-ethernet-lans-vat-ly-bang-utp"><span>Xây dựng Ethernet LANs vật lý bằng UTP</span></a></h3>
<ol start="3">
<li>
<p>Câu nào sau đây đúng về <strong>crossover cable</strong> <code v-pre>Ethernet</code> cho <code v-pre>Fast Ethernet</code></p>
<ul>
<li>
<p>[ ] Pins <code v-pre>1</code> và <code v-pre>2</code> đảo ngược trên đầu kia của cáp</p>
</li>
<li>
<p>[x] Pins <code v-pre>1</code> và <code v-pre>2</code> ở một đầu của cáp kết nối tới pins <code v-pre>3</code> và <code v-pre>6</code> trên đầu còn lại của cáp</p>
</li>
<li>
<p>[ ] Pins <code v-pre>1</code> và <code v-pre>2</code> ở một đầu của cáp kết nối với pins <code v-pre>3</code> và <code v-pre>4</code> trên một đầu còn lại của cáp</p>
</li>
<li>
<p>[ ] Cáp có thể dài tới 1000m để băng qua giữa các toà nhà</p>
</li>
<li>
<p>[ ] Tất cà đều sai</p>
</li>
</ul>
</li>
<li>
<p>Mỗi câu trả lời liệt kê 2 thiết bị sử dụng mạng <code v-pre>100BASE-T</code>. Nếu các thiết bị này kết nối bằng cáp <code v-pre>Ethernet UTP</code>, cặp thiết bị nào yêu cầu <strong>cable straight-through</strong> (<em>chọn 3 kết quả</em>)</p>
<ul>
<li>
<p>[ ] PC và router</p>
</li>
<li>
<p>[x] PC và switch</p>
</li>
<li>
<p>[ ] Hub và switch</p>
</li>
<li>
<p>[x] Router và hub</p>
</li>
<li>
<p>[x] Wireless access point (cổng Ethernet) và switch</p>
</li>
</ul>
</li>
</ol>
<h3 id="xay-dung-ethernet-lans-vat-ly-bang-fiber" tabindex="-1"><a class="header-anchor" href="#xay-dung-ethernet-lans-vat-ly-bang-fiber"><span>Xây dựng Ethernet LANs vật lý bằng Fiber</span></a></h3>
<ol start="5">
<li>
<p>Điều này sao đây là lợi thế của việc sử dụng <code v-pre>multimode fiber</code> cho liên kết <code v-pre>Ethernet</code> thay vì <code v-pre>UTP</code> hoặc <code v-pre>single-mode fiber</code></p>
<ul>
<li>
<p>[ ] Để đạt được khoảng cách xa nhất có thể cho liên kết <code v-pre>single</code></p>
</li>
<li>
<p>[x] Mở rộng liên kết ra 100m trong khi vẫn giữ chi phí ban đầu thấp nhất có thể</p>
</li>
<li>
<p>[ ] Để sử dụng kho modules <code v-pre>laser-based SFP/SFP+</code> hiện có</p>
</li>
<li>
<p>[ ] Để sử dụng kho modules <code v-pre>LED-based SFP/SFP+</code> hiện có</p>
</li>
</ul>
</li>
</ol>
<h3 id="gui-du-lieu-tren-mang-ethernet" tabindex="-1"><a class="header-anchor" href="#gui-du-lieu-tren-mang-ethernet"><span>Gửi dữ liệu trên mạng Ethernet</span></a></h3>
<ol start="6">
<li>
<p>Câu nào nào sau đây đúng với thuật toán <code v-pre>CSMA/CS</code></p>
<ul>
<li>
<p>[ ] Thuật toán không bao giờ cho phép xảy ra va chạm</p>
</li>
<li>
<p>[x] Khi va chạm xảy ra, thuật toán xác định cách máy tính nhận thấy một vụ va chạm và cách khôi phục</p>
</li>
<li>
<p>[ ] Thuật toán chỉ hoạt động trên 2 thiết bị cùng mạng Ethernet</p>
</li>
<li>
<p>[ ] Tất cả đều sai</p>
</li>
</ul>
</li>
<li>
<p>Câu nào sau đây đúng với trường <code v-pre>Ethernet FCS</code></p>
<ul>
<li>
<p>[ ] Ethernet sử dụng FCS để khôi phục lỗi</p>
</li>
<li>
<p>[ ] Nó dài 2 byte</p>
</li>
<li>
<p>[x] Nó nằm trong <code v-pre>Ethernet trailer</code>, không nằm trong <code v-pre>Ethernet header</code></p>
</li>
<li>
<p>[ ] Nó được sử dụng để mã hoá</p>
</li>
</ul>
</li>
<li>
<p>Câu nào sau đây đúng về định dạng của địa chỉ <code v-pre>Ethernet</code> (<em>chọn 3 câu trả lời</em>)</p>
<ul>
<li>
<p>[ ] Mỗi nhà sản xuất đặt code <code v-pre>OUI</code> duy nhất vào 2 bytes đầu tiên của địa chỉ</p>
</li>
<li>
<p>[x] Mỗi nhà sản xuất đặt code <code v-pre>OUI</code> duy nhất vào 3 bytes đầu tiên của địa chỉ</p>
</li>
<li>
<p>[x] Mỗi nhà sản xuất đặt code <code v-pre>OUI</code> duy nhất vào nửa đầu của địa chỉ</p>
</li>
<li>
<p>[ ] Phần địa chỉ chứa code của nhà sản xuất gọi là <code v-pre>MAC</code></p>
</li>
<li>
<p>[x] Phần địa chỉ chứa code của nhà sản xuất gọi là <code v-pre>OUI</code></p>
</li>
<li>
<p>[ ] Phần địa chỉ chứa code của nhà sản xuất không có tên cụ thể</p>
</li>
</ul>
</li>
<li>
<p>Thuật ngữ nào sau đây mô tả địa chỉ Ethernet có thể sử dụng để gửi 1 frame được phân phối đến nhiều thiết bị trong mạng <code v-pre>LAN</code> (<em>chọn 2 đáp án</em>)</p>
<ul>
<li>
<p>[ ] Địa chỉ <code v-pre>Burned-in</code></p>
</li>
<li>
<p>[ ] Địa chỉ <code v-pre>Unicast</code></p>
</li>
<li>
<p>[x] Địa chỉ <code v-pre>Boardcast</code></p>
</li>
<li>
<p>[x] Địa chỉ <code v-pre>Multicast</code></p>
</li>
</ul>
</li>
</ol>
<h2 id="_3-co-ban-ve-wans-va-ip-routing" tabindex="-1"><a class="header-anchor" href="#_3-co-ban-ve-wans-va-ip-routing"><span>3. Cơ bản về WANs và IP routing</span></a></h2>
<h3 id="mang-wide-area" tabindex="-1"><a class="header-anchor" href="#mang-wide-area"><span>Mạng Wide-Area</span></a></h3>
<ol>
<li>
<p>Cisco thêm trường nào sau đây trong tiêu đề HDLC được sử dụng bởi bộ định tuyến Cisco, ngoài HDLC tiêu chuẩn ISO?</p>
<ul>
<li>
<p>[ ] Flag</p>
</li>
<li>
<p>[x] Type</p>
</li>
<li>
<p>[ ] Andress</p>
</li>
<li>
<p>[ ] FCS</p>
</li>
</ul>
</li>
<li>
<p>Cho hai router: R1 và R2 kết nối với nhau bằng Ethernet thông qua dịch vụ <code v-pre>MPLS</code>. Dịch vụ này cung cấp <code v-pre>point to point</code> giữa chỉ 2 router với nhau, như layer 2 Ethernet. Câu nào sau đây đúng nhất về WAN (<em>chọn 2 đáp án</em>)</p>
<ul>
<li>
<p>[ ] <code v-pre>R1</code> sẽ kết nối với liên kết Ethernet vật lý, với đầu kia của cáp được kết nối với <code v-pre>R2</code></p>
</li>
<li>
<p>[x] <code v-pre>R1</code> sẽ kết nối với liên kết Ethernte vật lý, với đầu kia của cáp được kết nối tới thiết bị ở điểm của nhà dịch vụ <code v-pre>WAN</code></p>
</li>
<li>
<p>[ ] <code v-pre>R1</code> sẽ chuyển tiếp khung <code v-pre>data-link</code> cho <code v-pre>R2</code> bằng cách sử dụng <code v-pre>HDLC header/trailer</code></p>
</li>
<li>
<p>[x] <code v-pre>R1</code> sẽ chuyển tiếp khung <code v-pre>data-link</code> cho <code v-pre>R2</code> bằng cách sử dụng <code v-pre>Ethernet header/trailer</code></p>
</li>
</ul>
</li>
</ol>
<h3 id="ip-routing" tabindex="-1"><a class="header-anchor" href="#ip-routing"><span>IP Routing</span></a></h3>
<ol start="3">
<li>
<p>Tưởng tượng một mạng với 2 router kết nối tiếp liên kết với nhau bằng <code v-pre>point to point HDLC</code>. Mỗi router có một Ethernet, với</p>
<ul>
<li>
<p><code v-pre>PC1</code> chia sẻ mạng Ethernet với Router1</p>
</li>
<li>
<p><code v-pre>PC2</code> chia sẻ mạng Ethernet với Router2</p>
</li>
</ul>
<p>Khi <code v-pre>PC1</code> gửi dữ liệu tới <code v-pre>PC2</code>, câu nào sau đây là đúng</p>
<ul>
<li>
<p>[x] Router1 tách <code v-pre>Ethernet header/trailer</code> ra khỏi khung nhận của <code v-pre>PC1</code> và không bao giờ sử dụng lại</p>
</li>
<li>
<p>[ ] Router1 đóng gói khung Ethernet bên trong <code v-pre>HDLC header</code> và gửi khung cho <code v-pre>Router2</code>, giải nén khung Ethernet chuyển tiếp cho <code v-pre>PC2</code></p>
</li>
<li>
<p>[ ] Router1 tách <code v-pre>Ethernet header/trailer</code> ra khỏi khung nhận của <code v-pre>PC1</code> và được Router2 tạo lại trước khi chuyển tiếp tới <code v-pre>PC2</code></p>
</li>
<li>
<p>[ ] Router1 gỡ bỏ Ethernet, IP và TCP <code v-pre>headers</code> và tạo lại các <code v-pre>headers</code> thích hợp trước khi chuyển tiếp packet cho Router2</p>
</li>
</ul>
</li>
<li>
<p>Router thường sử dụng cách nào để đưa ra quyết định về việc routing gói <code v-pre>TCP/IP</code></p>
<ul>
<li>
<p>[ ] Địa chỉ MAC đích</p>
</li>
<li>
<p>[ ] Địa chỉ MAC nguồn</p>
</li>
<li>
<p>[x] Địa chỉ IP đích</p>
</li>
<li>
<p>[ ] Địa chỉ IP nguồn</p>
</li>
<li>
<p>[ ] Địa chỉ MAC và IP đích</p>
</li>
</ul>
</li>
<li>
<p>Câu nào sau đây đúng về một Host <code v-pre>TCP/IP</code> được kết nối bằng mạng <code v-pre>LAN</code> và IP-routing ?</p>
<ul>
<li>
<p>[ ] Host luôn gửi packet tới default gateway</p>
</li>
<li>
<p>[ ] Host không bao giờ gửi packet tới default gateway</p>
</li>
<li>
<p>[x] Host gửi packets tới default gateway nếu địa chỉ IP đích nằm trong subnet khác với Host</p>
</li>
<li>
<p>[ ] Host gửi packets tới default gateway nếu địa chỉ IP đích nằm cugn2 subnet với Host</p>
</li>
</ul>
</li>
<li>
<p>Chức năng nào sau đây là của giao thức <code v-pre>routing</code> (<em>chọn 2 đáp án</em>)</p>
<ul>
<li>
<p>[x] Quảng cáo các routers đã biết cho các routers lân cận</p>
</li>
<li>
<p>[ ] Học tập routers cho các subnets được kết nối trực tiếp với router</p>
</li>
<li>
<p>[x] Học tập outers đưa các routers đó vào <code v-pre>route table</code> cho <code v-pre>routes advetised</code> được đánh dấu bởi các bộ router lân cận</p>
</li>
<li>
<p>[ ] Chuyển tiếp <code v-pre>IP packets</code> dựa trên gói địa chỉ IP đích</p>
</li>
</ul>
</li>
</ol>
<h3 id="chuc-nang-layer-mang-khac" tabindex="-1"><a class="header-anchor" href="#chuc-nang-layer-mang-khac"><span>Chức năng layer mạng khác</span></a></h3>
<ol start="7">
<li>
<p>Một công ty muốn triển khai mạng <code v-pre>TCP/IP</code>, với <code v-pre>PC1</code> nằm trên mạng Ethernet LAN, giao thức và tính năng nào sao đây yêu cầu <code v-pre>PC1</code> tìm hiểu thông tin từ các máy chủ khác ?</p>
<ul>
<li>
<p>[ ] ARP</p>
</li>
<li>
<p>[ ] ping</p>
</li>
<li>
<p>[x] DNS</p>
</li>
<li>
<p>[ ] Tất cả đều sai</p>
</li>
</ul>
</li>
</ol>
</div></template>


