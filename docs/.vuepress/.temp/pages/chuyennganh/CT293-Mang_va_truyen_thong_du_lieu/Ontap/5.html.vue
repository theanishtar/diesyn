<template><div><h1 id="bai-5-ipv4-routing" tabindex="-1"><a class="header-anchor" href="#bai-5-ipv4-routing"><span>Bài 5: IPv4 Routing</span></a></h1>
<h2 id="_1-cac-hoat-đong-cua-router-cisco" tabindex="-1"><a class="header-anchor" href="#_1-cac-hoat-đong-cua-router-cisco"><span>1.Các hoạt động của Router Cisco</span></a></h2>
<h3 id="cai-đat-cisco-router" tabindex="-1"><a class="header-anchor" href="#cai-đat-cisco-router"><span>Cài đặt Cisco Router</span></a></h3>
<ol>
<li>Which of the following installation steps are more likely required on a Cisco router, but not typically required on a Cisco switch? (Choose two answers.)
<ul>
<li>[ ] Connect Ethernet cables</li>
<li>[x] Connect serial cables</li>
<li>[ ] Connect to the console port</li>
<li>[ ] Connect the power cable</li>
<li>[x] Turn the on/off switch to “on”</li>
</ul>
</li>
</ol>
<h3 id="bat-ho-tro-ipv4-tren-cisco-router" tabindex="-1"><a class="header-anchor" href="#bat-ho-tro-ipv4-tren-cisco-router"><span>Bật hỗ trợ IPv4 trên Cisco router</span></a></h3>
<ol start="2">
<li>
<p>Which of the following commands might you see associated with a router CLI, but not with a switch CLI?</p>
<ul>
<li>[ ] The show mac address-table command</li>
<li>[x] The show ip route command</li>
<li>[ ] The show running-config command</li>
<li>[ ] The show interfaces status command</li>
</ul>
</li>
<li>
<p>Which answers list a task that could be helpful in making a router interface G0/0 ready to route packets? (Choose two answers.)</p>
<ul>
<li>[x] Configuring the ip address address mask command in G0/0 configuration mode</li>
<li>[ ] Configuring the ip address address and ip mask mask commands in G0/0 con-figuration mode</li>
<li>[x] Configuring the no shutdown command in G0/0 configuration mode</li>
<li>[ ] Setting the interface description in G0/0 configuration mode</li>
</ul>
</li>
<li>
<p>The output of the show ip interface brief command on R1 lists interface status codes of “down” and “down” for interface GigabitEthernet 0/0. The interface connects to a LAN switch with a UTP straight-through cable. Which of the following could be true?</p>
<ul>
<li>[ ] The shutdown command is currently configured for router interface G0/0.</li>
<li>[ ] The shutdown command is currently configured for the switch interface on the other end of the cable.</li>
<li>[x] The router was never configured with an ip address command on the interface.</li>
<li>[ ] The router was configured with the no ip address command.</li>
</ul>
</li>
<li>
<p>Which of the following commands do not list the IP address and mask of at least one interface? (Choose two answers.)</p>
<ul>
<li>[ ] show running-config</li>
<li>[ ] show protocols type number</li>
<li>[x] show ip interface brief</li>
<li>[ ] show interfaces</li>
<li>[x] show version</li>
</ul>
</li>
<li>
<p>Which of the following is different on the Cisco switch CLI for a Layer 2 switch as compared with the Cisco router CLI?</p>
<ul>
<li>[ ] The commands used to configure simple password checking for the console</li>
<li>[x] The number of IP addresses configured</li>
<li>[ ] The configuration of the device’s hostname</li>
<li>[ ] The configuration of an interface description</li>
</ul>
</li>
</ol>
<h2 id="_2-cau-hinh-mang-ipv4-va-router-tinh" tabindex="-1"><a class="header-anchor" href="#_2-cau-hinh-mang-ipv4-va-router-tinh"><span>2.Cấu hình mạng IPv4 và router tĩnh</span></a></h2>
<h3 id="ip-routing" tabindex="-1"><a class="header-anchor" href="#ip-routing"><span>IP routing</span></a></h3>
<ol>
<li>
<p>Router R1 lists a route in its routing table. Which of the following answers list a fact from a route that the router uses when matching the packet’s destination address? (Choose two answers.)</p>
<ul>
<li>[x] Mask</li>
<li>[ ] Next-hop router</li>
<li>[x] Subnet ID</li>
<li>[ ] Outgoing interface</li>
</ul>
</li>
</ol>
<h3 id="cau-hinh-router-đa-ket-noi" tabindex="-1"><a class="header-anchor" href="#cau-hinh-router-đa-ket-noi"><span>Cấu hình router đã kết nối</span></a></h3>
<ol start="2">
<li>
<p>After configuring a working router interface with IP address/mask 10.1.1.100/26, which of the following routes would you expect to see in the output of the show ip route command? (Choose two answers.)</p>
<ul>
<li>[x] A connected route for subnet 10.1.1.64 255.255.255.192</li>
<li>[ ] A connected route for subnet 10.1.1.0 255.255.255.0</li>
<li>[ ] A local route for host 10.1.1.100 255.255.255.192</li>
<li>[x] A local route for host 10.1.1.100 255.255.255.255</li>
<li>[ ] A local route for host 10.1.1.64 255.255.255.255</li>
</ul>
</li>
</ol>
<h3 id="cau-hinh-tinh-router" tabindex="-1"><a class="header-anchor" href="#cau-hinh-tinh-router"><span>Cấu hình tĩnh router</span></a></h3>
<ol start="3">
<li>
<p>An engineer configures a static IPv4 route on Router R1. Which of the following pieces of information should not be listed as a parameter in the configuration command that creates this static IPv4 route?</p>
<ul>
<li>[ ] The destination subnet’s subnet ID</li>
<li>[ ] The next-hop router’s IP address</li>
<li>[x] The next-hop router’s neighboring interface</li>
<li>[ ] The subnet mask</li>
</ul>
</li>
<li>
<p>Which of the following commands correctly configures a static route?</p>
<ul>
<li>[x] ip route 10.1.3.0 255.255.255.0 10.1.130.253</li>
<li>[ ] ip route 10.1.3.0 serial 0</li>
<li>[ ] ip route 10.1.3.0 /24 10.1.130.253</li>
<li>[ ] ip route 10.1.3.0 /24 serial 0</li>
</ul>
</li>
<li>
<p>A network engineer configures the ip route 10.1.1.0 255.255.255.0 s0/0/0 command on a router and then issues a show ip route command from enable mode. No routes for subnet 10.1.1.0/24 appear in the output. Which of the following could be true?</p>
<ul>
<li>[ ] The ip route command has incorrect syntax and was rejected in config mode.</li>
<li>[x] Interface s0/0/0 is down.</li>
<li>[ ] The router has no up/up interfaces in Class A network 10.0.0.0.</li>
<li>[ ] The ip route command is missing a next-hop router IP address.</li>
</ul>
</li>
</ol>
<h3 id="ip-forwarding-with-the-longest-prefix-match" tabindex="-1"><a class="header-anchor" href="#ip-forwarding-with-the-longest-prefix-match"><span>IP Forwarding with the Longest Prefix Match</span></a></h3>
<ol start="6">
<li>
<p>A router lists the following partial output from the show ip route command. Out which interface will the router route packets destined to IP address 10.1.15.122?</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/04/05-23-50-16-Screen Shot 2022-04-05 at 23.49.42.png" alt="Screen Shot 2022-04-05 at 23.49.42.png" title="Screen Shot 2022-04-05 at 23.49.42.png"></p>
<ul>
<li>[ ] G0/0/0</li>
<li>[ ] G0/1/0</li>
<li>[ ] G0/2/0</li>
<li>[x] G0/3/0</li>
</ul>
</li>
</ol>
<h2 id="_3-vach-đuong-ip-tren-mang-lan" tabindex="-1"><a class="header-anchor" href="#_3-vach-đuong-ip-tren-mang-lan"><span>3.Vạch đường IP trên mạng LAN</span></a></h2>
<h3 id="vlan-routing-with-router-802-1q-trunks" tabindex="-1"><a class="header-anchor" href="#vlan-routing-with-router-802-1q-trunks"><span>VLAN Routing with Router 802.1Q Trunks</span></a></h3>
<ol>
<li>
<p>Router 1 has a Fast Ethernet interface 0/0 with IP address 10.1.1.1. The interface is con- nected to a switch. This connection is then migrated to use 802.1Q trunking. Which of the following commands could be part of a valid configuration for Router 1’s Fa0/0 interface? (Choose two answers.)</p>
<ul>
<li>[x] interface fastethernet 0/0.4</li>
<li>[ ] dot1q enable</li>
<li>[ ] dot1q enable 4</li>
<li>[ ] trunking enable</li>
<li>[ ] trunking enable 4</li>
<li>[x] encapsulation dot1q 4</li>
</ul>
</li>
<li>
<p>Router R1 has a router-on-a-stick (ROAS) configuration with two subinterfaces of interface G0/1: G0/1.1 and G0/1.2. Physical interface G0/1 is currently in a down/down state. The network engineer then configures a shutdown command when in interface configuration mode for G0/1.1 and a no shutdown command when in interface con- figuration mode for G0/1.2. Which answers are correct about the interface state for the subinterfaces? (Choose two answers.)</p>
<ul>
<li>[ ] G0/1.1 will be in a down/down state.</li>
<li>[x] G0/1.2 will be in a down/down state.</li>
<li>[x] G0/1.1 will be in an administratively down state.</li>
<li>[ ]  G0/1.2 will be in an up/up state.</li>
</ul>
</li>
</ol>
<h3 id="vlan-routing-with-layer-3-switch-svis" tabindex="-1"><a class="header-anchor" href="#vlan-routing-with-layer-3-switch-svis"><span>VLAN Routing with Layer 3 Switch SVIs</span></a></h3>
<ol start="3">
<li>
<p>A Layer 3 switch has been configured to route IP packets between VLANs 1, 2, and 3 using SVIs, which connect to subnets 172.20.1.0/25, 172.20.2.0/25, and 172.20.3.0/25, respectively. The engineer issues a show ip route connected command on the Layer 3 switch, listing the connected routes. Which of the following answers lists a piece of information that should be in at least one of the routes?
- [ ] Interface Gigabit Ethernet 0/0.3
- [ ] Next-hop router 172.20.2.1
- [x] Interface VLAN 2
- [ ] Mask 255.255.255.0</p>
</li>
<li>
<p>An engineer has successfully configured a Layer 3 switch with SVIs for VLANs 2 and 3. Hosts in the subnets using VLANs 2 and 3 can ping each other with the Layer 3 switch routing the packets. The next week, the network engineer receives a call that those same users can no longer ping each other. If the problem is with the Layer 3 switching function, which of the following could have caused the problem? (Choose two answers.)</p>
<ul>
<li>[ ] Six (or more) out of 10 working VLAN 2 access ports failing due to physical problems</li>
<li>[ ] A shutdown command issued from interface VLAN 4 configuration mode</li>
<li>[x] VTP on the switch removing VLAN 3 from the switch’s VLAN list</li>
<li>[x] A shutdown command issued from VLAN 2 configuration mode</li>
</ul>
</li>
</ol>
<h3 id="vlan-routing-with-layer-3-switch-routed-ports" tabindex="-1"><a class="header-anchor" href="#vlan-routing-with-layer-3-switch-routed-ports"><span>VLAN Routing with Layer 3 Switch Routed Ports</span></a></h3>
<ol start="5">
<li>
<p>A LAN design uses a Layer 3 EtherChannel between two switches SW1 and SW2, with port-channel interface 1 used on both switches. SW1 uses ports G0/1, G0/2, and G0/3 in the channel. Which of the following are true about SW1’s configuration to make the channel be able to route IPv4 packets correctly? (Choose two answers.)</p>
<ul>
<li>[x] The ip address command must be on the port-channel 1 interface.</li>
<li>[ ] The ip address command must be on interface G0/1 (lowest numbered port).</li>
<li>[x] The port-channel 1 interface must be configured with the no switchport command.</li>
<li>[ ] Interface G0/1 must be configured with the routedport command.</li>
</ul>
</li>
<li>
<p>A LAN design uses a Layer 3 EtherChannel between two switches SW1 and SW2, with port-channel interface 1 used on both switches. SW1 uses ports G0/1 and G0/2 in the channel. However, only interface G0/1 is bundled into the channel and working. Think about the configuration settings on port G0/2 that could have existed before adding G0/2 to the EtherChannel. Which answers identify a setting that could prevent IOS from adding G0/2 to the Layer 3 EtherChannel? (Choose two answers.)</p>
<ul>
<li>[ ] A different STP cost (spanning-tree cost value)</li>
<li>[x] A different speed (speed value)</li>
<li>[x] A default setting for switchport (switchport)</li>
<li>[ ] A different access VLAN (switchport access vlan vlan-id)</li>
</ul>
</li>
</ol>
</div></template>


