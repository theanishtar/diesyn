<template><div><h1 id="bai-7-ipv6" tabindex="-1"><a class="header-anchor" href="#bai-7-ipv6"><span>Bài 7: IPv6</span></a></h1>
<h2 id="_1-thanh-phan-cua-ipv6" tabindex="-1"><a class="header-anchor" href="#_1-thanh-phan-cua-ipv6"><span>1.Thành phần của IPv6</span></a></h2>
<h3 id="introduction-to-ipv6" tabindex="-1"><a class="header-anchor" href="#introduction-to-ipv6"><span>Introduction to IPv6</span></a></h3>
<ol>
<li>
<p>Which of the following was a short-term solution to the IPv4 address exhaustion problem?</p>
<ul>
<li>[ ] IP version 6</li>
<li>[ ] IP version 5</li>
<li>[x] NAT/PAT</li>
<li>[ ] ARP</li>
</ul>
</li>
<li>
<p>A router receives an Ethernet frame that holds an IPv6 packet. The router then makes a decision to route the packet out a serial link. Which of the following statements is true about how a router forwards an IPv6 packet?</p>
<ul>
<li>[x] The router discards the Ethernet data-link header and trailer of the received frame.</li>
<li>[ ] The router makes the forwarding decision based on the packet’s source IPv6 address.</li>
<li>[ ] The router keeps the Ethernet header, encapsulating the entire frame inside a new IPv6 packet before sending it over the serial link.</li>
<li>[ ] The router uses the IPv4 routing table when choosing where to forward the packet.</li>
</ul>
</li>
</ol>
<h3 id="ipv6-addressing-formats-and-conventions" tabindex="-1"><a class="header-anchor" href="#ipv6-addressing-formats-and-conventions"><span>IPv6 Addressing Formats and Conventions</span></a></h3>
<ol start="3">
<li>
<p>Which of the following is the shortest valid abbreviation for <code v-pre>FE80:0000:0000:0100: 0000:0000:0000:0123</code>?</p>
<ul>
<li>[ ] <code v-pre>FE80::100::123</code></li>
<li>[ ] <code v-pre>FE8::1::123</code></li>
<li>[ ] <code v-pre>FE80::100:0:0:0:123:4567 </code></li>
<li>[x] <code v-pre>FE80:0:0:100::123</code></li>
</ul>
</li>
<li>
<p>Which of the following is the shortest valid abbreviation for <code v-pre>2000:0300:0040:0005: 6000:0700:0080:0009</code>?</p>
<ul>
<li>
<p>[ ] <code v-pre>2:3:4:5:6:7:8:9</code></p>
</li>
<li>
<p>[x] <code v-pre>2000:300:40:5:6000:700:80:9</code></p>
</li>
<li>
<p>[ ] <code v-pre> 2000:300:4:5:6000:700:8:9</code></p>
</li>
<li>
<p>[ ] <code v-pre>2000:3:4:5:6:7:8:9</code></p>
</li>
</ul>
</li>
<li>
<p>Which of the following is the unabbreviated version of IPv6 address <code v-pre>2001:DB8::200:28</code>?</p>
<ul>
<li>[x] <code v-pre>2001:0DB8:0000:0000:0000:0000:0200:0028 </code></li>
<li>[ ] <code v-pre>2001:0DB8::0200:0028</code></li>
<li>[ ]<code v-pre> 2001:0DB8:0:0:0:0:0200:0028</code></li>
<li>[ ] <code v-pre>2001:0DB8:0000:0000:0000:0000:200:0028</code></li>
</ul>
</li>
<li>
<p>Which of the following is the prefix for address <code v-pre>2000:0000:0000:0005:6000:0700: 0080:0009</code>, assuming a mask of /64?</p>
<ul>
<li>
<p>[ ]<code v-pre> 2000::5::/64</code></p>
</li>
<li>
<p>[ ]<code v-pre> 2000::5:0:0:0:0/64</code></p>
</li>
<li>
<p>[x] <code v-pre>2000:0:0:5::/64</code></p>
</li>
<li>
<p>[ ] <code v-pre>2000:0:0:5:0:0:0:0/64</code></p>
</li>
</ul>
</li>
</ol>
<h2 id="đia-chi-ipv6-va-subnetting" tabindex="-1"><a class="header-anchor" href="#đia-chi-ipv6-va-subnetting"><span>Địa chỉ IPv6 và Subnetting</span></a></h2>
<h3 id="global-unicast-addressing-concepts" tabindex="-1"><a class="header-anchor" href="#global-unicast-addressing-concepts"><span>Global Unicast Addressing Concepts</span></a></h3>
<ol>
<li>
<p>Which of the following IPv6 addresses appears to be a unique local unicast address, based on its first few hex digits?</p>
<ul>
<li>[ ] <code v-pre>3123:1:3:5::1</code></li>
<li>[ ] <code v-pre>FE80::1234:56FF:FE78:9ABC</code></li>
<li>[x] <code v-pre>FDAD::1</code></li>
<li>[ ] <code v-pre>FF00::5</code></li>
</ul>
</li>
<li>
<p>Which of the following IPv6 addresses appears to be a global unicast address, based on its first few hex digits?</p>
<ul>
<li>[x] <code v-pre>3123:1:3:5::1</code></li>
<li>[ ] <code v-pre>FE80::1234:56FF:FE78:9ABC</code></li>
<li>[ ] <code v-pre>FDAD::1</code></li>
<li>[ ] <code v-pre>FF00::5</code></li>
</ul>
</li>
<li>
<p>When subnetting an IPv6 address block, an engineer shows a drawing that breaks the address structure into three pieces. Comparing this concept to a three-part IPv4 address structure, which part of the IPv6 address structure is most like the IPv4 net- work part of the address?</p>
<ul>
<li>[ ] Subnet</li>
<li>[ ] Interface ID</li>
<li>[ ] Network</li>
<li>[ ] Global routing prefix</li>
<li>[x] Subnet router anycast</li>
</ul>
</li>
<li>
<p>When subnetting an IPv6 address block, an engineer shows a drawing that breaks the address structure into three pieces. Assuming that all subnets use the same prefix length, which of the following answers lists the name of the field on the far right side of the address?</p>
<ul>
<li>[ ] Subnet</li>
<li>[x] Interface ID</li>
<li>[ ] Network</li>
<li>[ ] Global routing prefix</li>
<li>[ ] Subnet router anycast</li>
</ul>
</li>
</ol>
<h3 id="unique-local-unicast-addresses" tabindex="-1"><a class="header-anchor" href="#unique-local-unicast-addresses"><span>Unique Local Unicast Addresses</span></a></h3>
<ol start="5">
<li>For the IPv6 address <code v-pre>FD00:1234:5678:9ABC:DEF1:2345:6789:ABCD</code>, which part of the address is considered the global ID of the unique local address?
<ul>
<li>[ ] None; this address has no global ID.</li>
<li>[ ] <code v-pre>00:1234:5678:9ABC</code></li>
<li>[ ] <code v-pre>DEF1:2345:6789:ABCD</code></li>
<li>[x] <code v-pre>00:1234:5678</code></li>
<li>[ ] FD00</li>
</ul>
</li>
</ol>
<h2 id="trien-khai-mang-ipv6-tren-router" tabindex="-1"><a class="header-anchor" href="#trien-khai-mang-ipv6-tren-router"><span>Triển khai mạng IPv6 trên router</span></a></h2>
<h3 id="implementing-unicast-ipv6-addresses-on-routers" tabindex="-1"><a class="header-anchor" href="#implementing-unicast-ipv6-addresses-on-routers"><span>Implementing Unicast IPv6 Addresses on Routers</span></a></h3>
<ol start="6">
<li>
<p>Router R1 has an interface named Gigabit Ethernet 0/1, whose MAC address has been set to <code v-pre>0200.0001.000A</code>. Which of the following commands, added in R1’s Gigabit Ethernet 0/1 configuration mode, gives this router’s G0/1 interface a unicast IPv6 address of <code v-pre>2001:1:1:1:1:200:1:A</code>, with a /64 prefix length?</p>
<ul>
<li>[x] ipv6 address <code v-pre>2001:1:1:1:1:200:1:A/64</code></li>
<li>[ ] ipv6 address <code v-pre>2001:1:1:1:1:200:1:A/64 eui-64</code></li>
<li>[ ] ipv6 address <code v-pre>2001:1:1:1:1:200:1:A /64 eui-64</code></li>
<li>[ ] ipv6 address <code v-pre>2001:1:1:1:1:200:1:A /64</code></li>
<li>[ ] None of the other answers are correct.</li>
</ul>
</li>
<li>
<p>Router R1 has an interface named Gigabit Ethernet 0/1, whose MAC address has been set to <code v-pre>5055.4444.3333</code>. This interface has been configured with the ipv6 address <code v-pre>2000:1:1:1::/64</code> eui-64 subcommand. What unicast address will this interface use?</p>
<ul>
<li>[ ] <code v-pre>2000:1:1:1:52FF:FE55:4444:3333</code></li>
<li>[x] <code v-pre>2000:1:1:1:5255:44FF:FE44:3333</code></li>
<li>[ ] <code v-pre>2000:1:1:1:5255:4444:33FF:FE33</code></li>
<li>[ ] <code v-pre> 2000:1:1:1:200:FF:FE00:0</code></li>
</ul>
</li>
<li>
<p>Router R1 currently supports IPv4, routing packets in and out all its interfaces. R1’s configuration needs to be migrated to support dual-stack operation, routing both IPv4 and IPv6. Which of the following tasks must be performed before the router can also support routing IPv6 packets? (Choose two answers.)</p>
<ul>
<li>[x] Enable IPv6 on each interface using an ipv6 address interface subcommand.</li>
<li>[ ] Enable support for both versions with the ip versions 4 6 global command.</li>
<li>[x] Additionally enable IPv6 routing using the ipv6 unicast-routing global command.</li>
<li>[ ] Migrate to dual-stack routing using the ip routing dual-stack global command.</li>
</ul>
</li>
</ol>
<h3 id="special-addresses-used-by-routers" tabindex="-1"><a class="header-anchor" href="#special-addresses-used-by-routers"><span>Special Addresses Used by Routers</span></a></h3>
<ol start="9">
<li>
<p>Router R1 has an interface named Gigabit Ethernet 0/1, whose MAC address has been set to 0200.0001.000A. The interface is then configured with the ipv6 address <code v-pre>2001:1:1:1:200:FF:FE01:B/64</code> interface subcommand; no other ipv6 address com- mands are configured on the interface. Which of the following answers lists the link- local address used on the interface?</p>
<ul>
<li>[x] <code v-pre>FE80::FF:FE01:A</code></li>
<li>[ ] <code v-pre>FE80::FF:FE01:B</code></li>
<li>[ ] <code v-pre>FE80::200:FF:FE01:A</code></li>
<li>[ ]<code v-pre> FE80::200:FF:FE01:B</code></li>
</ul>
</li>
<li>
<p>Which of the following multicast addresses is defined as the address for sending pack- ets to only the IPv6 routers on the local link?</p>
<ul>
<li>[ ] <code v-pre>FF02::1</code></li>
<li>[x] <code v-pre>FF02::2</code></li>
<li>[ ] <code v-pre>FF02::5</code></li>
<li>[ ]<code v-pre> FF02::A</code></li>
</ul>
</li>
</ol>
<h4 id="_4-trien-khai-vach-đuong-ipv6" tabindex="-1"><a class="header-anchor" href="#_4-trien-khai-vach-đuong-ipv6"><span>4.Triển khai vạch đường IPv6</span></a></h4>
<h3 id="connected-and-local-ipv6-routes" tabindex="-1"><a class="header-anchor" href="#connected-and-local-ipv6-routes"><span>Connected and Local IPv6 Routes</span></a></h3>
<ol>
<li>
<p>A router has been configured with the ipv6 address <code v-pre>2000:1:2:3::1/64</code> command on its G0/1 interface as shown in the figure. The router creates a link-local address of <code v-pre>FE80::FF:FE00:1</code> as well. The interface is working. Which of the following routes will the router add to its IPv6 routing table? (Choose two answers.)</p>
<ul>
<li>[x] A route for <code v-pre>2000:1:2:3::/64</code></li>
<li>[ ] A route for <code v-pre>FE80::FF:FE00:1/64</code></li>
<li>[x] A route for <code v-pre>2000:1:2:3::1/128</code></li>
<li>[ ] A route for <code v-pre>FE80::FF:FE00:1/128</code></li>
</ul>
</li>
<li>
<p>A router has been configured with the ipv6 address <code v-pre>3111:1:1:1::1/64</code> command on its G0/1 interface and ipv6 address <code v-pre>3222:2:2:2::1/64</code> on its G0/2 interface. Both interfaces are working. Which of the following routes would you expect to see in the output of the show ipv6 route connected command? (Choose two answers.)</p>
<ul>
<li>[x] A route for <code v-pre>3111:1:1:1::/64</code></li>
<li>[ ] A route for <code v-pre>3111:1:1:1::1/64</code></li>
<li>[x] A route for <code v-pre>3222:2:2:2::/64</code></li>
<li>[ ] A route for <code v-pre>3222:2:2:2::2/128</code></li>
</ul>
</li>
</ol>
<h3 id="static-ipv6-routes" tabindex="-1"><a class="header-anchor" href="#static-ipv6-routes"><span>Static IPv6 Routes</span></a></h3>
<ol start="3">
<li>
<p>An engineer needs to add a static IPv6 route for prefix <code v-pre>2000:1:2:3::/64</code> to Router R5’s configuration, in the figure shown with question 1. Which of the following answers shows a valid static IPv6 route for that subnet, on Router R5?</p>
<ul>
<li>
<p>[x] ipv6 route <code v-pre>2000:1:2:3::/64 S0/1/1</code></p>
</li>
<li>
<p>[ ] ipv6 route <code v-pre>2000:1:2:3::/64 S0/1/0</code></p>
</li>
<li>
<p>[ ] ip route <code v-pre>2000:1:2:3::/64 S0/1/1</code></p>
</li>
<li>
<p>[ ] ip route <code v-pre>2000:1:2:3::/64 S0/1/0</code></p>
</li>
</ul>
</li>
<li>
<p>An engineer needs to add a static IPv6 route for prefix 2000:1:2:3::/64 to Router R5 in the figure shown with question 1. Which of the following answers shows a valid static IPv6 route for that subnet on Router R5?</p>
<ul>
<li>[ ] ipv6 route <code v-pre>2000:1:2:3::/64 2000:1:2:56::5</code></li>
<li>[x] ipv6 route <code v-pre>2000:1:2:3::/64 2000:1:2:56::6</code></li>
<li>[ ] ipv6 route <code v-pre>2000:1:2:3::/64 FE80::FF:FE00:5</code></li>
<li>[ ] ipv6 route <code v-pre>2000:1:2:3::/64 FE80::FF:FE00:6</code></li>
</ul>
</li>
<li>
<p>An engineer types the command ipv6 route <code v-pre>2001:DB8:8:8::/64 2001:DB8:9:9::9</code> 129 in configuration mode of Router R1 and presses Enter. Later, a show ipv6 route command does not list any route for subnet <code v-pre>2001:DB8:8:8::/64</code>. Which of the following could have caused the route to not be in the IPv6 routing table?</p>
<ul>
<li>[ ] The command should be using a next-hop link-local address instead of a global unicast.</li>
<li>[ ] The command is missing an outgoing interface parameter, so IOS rejected the ipv6 route command.</li>
<li>[x] The router has no routes that match <code v-pre>2001:DB8:9:9::9</code>.</li>
<li>[ ] A route for <code v-pre>2001:DB8:8:8::/64</code> with administrative distance 110 already exists.</li>
</ul>
</li>
<li>
<p>The command output shows two routes from the longer output of the show ipv6 route command. Which answers are true about the output? (Choose two answers.)
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/04/06-09-25-48-Screen Shot 2022-04-06 at 09.14.40.png"></p>
<ul>
<li>[x] The route to <code v-pre>::/0</code> is added because of an ipv6 route global command.</li>
<li>[x] The administrative distance of the route to <code v-pre>2001:DB8:2:2::/64</code> is 1.</li>
<li>[ ] The route to <code v-pre>::/0</code> is added because of an ipv6 address interface subcommand.</li>
<li>[ ] The route to <code v-pre>2001:DB8:2:2::/64</code> is added because of an IPv6 routing protocol.</li>
</ul>
</li>
</ol>
<h3 id="the-neighbor-discovery-protocol" tabindex="-1"><a class="header-anchor" href="#the-neighbor-discovery-protocol"><span>The Neighbor Discovery Protocol</span></a></h3>
<ol start="7">
<li>
<p>PC1, PC2, and Router R1 all connect to the same VLAN and IPv6 subnet. PC1 wants to send its first IPv6 packet to PC2. What protocol or message will PC1 use to discov- er the MAC address to which PC1 should send the Ethernet frame that encapsulates this IPv6 packet?</p>
<ul>
<li>[ ] ARP</li>
<li>[x] NDP NS</li>
<li>[ ] NDP RS</li>
<li>[ ] SLAAC</li>
</ul>
</li>
<li>
<p>Which of the following pieces of information does a router supply in an NDP Router Advertisement (RA) message? (Choose two answers.)</p>
<ul>
<li>[x] Router IPv6 address</li>
<li>[ ] Host name of the router</li>
<li>[x] IPv6 prefix(es) on the link</li>
<li>[ ] IPv6 address of DHCP server</li>
</ul>
</li>
</ol>
</div></template>


