<template><div><h1 id="bai-2-trien-khai-ethernet-lans" tabindex="-1"><a class="header-anchor" href="#bai-2-trien-khai-ethernet-lans"><span>Bài 2. Triển khai Ethernet LANs</span></a></h1>
<h2 id="_1-su-dung-cli" tabindex="-1"><a class="header-anchor" href="#_1-su-dung-cli"><span>1. Sử dụng CLI</span></a></h2>
<h3 id="truy-cap-cisco-catalyst-switch-cli" tabindex="-1"><a class="header-anchor" href="#truy-cap-cisco-catalyst-switch-cli"><span>Truy cập Cisco Catalyst Switch CLI</span></a></h3>
<ol>
<li>
<p>In what modes can you type the command show mac address-table and expect to get a response with MAC table entries? (Choose two answers.)</p>
<ul>
<li>
<p>[x] User mode</p>
</li>
<li>
<p>[x] Enable mode</p>
</li>
<li>
<p>[ ] Global configuration mode</p>
</li>
<li>
<p>[ ] Interface configuration mode</p>
</li>
</ul>
</li>
<li>
<p>In which of the following modes of the CLI could you type the command reload and expect the switch to reboot?</p>
<ul>
<li>
<p>[ ] User mode</p>
</li>
<li>
<p>[x] Enable mode</p>
</li>
<li>
<p>[ ] Global configuration mode</p>
</li>
<li>
<p>[ ] Interface configuration mode</p>
</li>
</ul>
</li>
<li>
<p>Which of the following is a difference between Telnet and SSH as supported by a Cisco switch?</p>
<ul>
<li>
<p>[ ] SSH encrypts the passwords used at login, but not other traffic; Telnet encrypts nothing.</p>
</li>
<li>
<p>[x] SSH encrypts all data exchange, including login passwords; Telnet encrypts nothing.</p>
</li>
<li>
<p>[ ] Telnet is used from Microsoft operating systems, and SSH is used from UNIX and Linux operating systems.</p>
</li>
<li>
<p>[ ] Telnet encrypts only password exchanges; SSH encrypts all data exchanges.</p>
</li>
</ul>
</li>
</ol>
<h3 id="cau-hinh-phan-mem-cisco-ios" tabindex="-1"><a class="header-anchor" href="#cau-hinh-phan-mem-cisco-ios"><span>Cấu hình phần mềm Cisco IOS</span></a></h3>
<ol start="4">
<li>
<p>What type of switch memory is used to store the configuration used by the switch when it is up and working?</p>
<ul>
<li>
<p>[x] RAM</p>
</li>
<li>
<p>[ ] ROM</p>
</li>
<li>
<p>[ ] Flash</p>
</li>
<li>
<p>[ ] NVRAM</p>
</li>
<li>
<p>[ ] Bubble</p>
</li>
</ul>
</li>
<li>
<p>What command copies the configuration from RAM into NVRAM?</p>
<ul>
<li>
<p>[ ] copy running-config tftp</p>
</li>
<li>
<p>[ ] copy running-config tftp</p>
</li>
<li>
<p>[ ] copy running-config start-up-config</p>
</li>
<li>
<p>[ ] copy start-up-config running-config</p>
</li>
<li>
<p>[ ] copy startup-config running-config</p>
</li>
<li>
<p>[x] copy running-config startup-config</p>
</li>
</ul>
</li>
<li>
<p>A switch user is currently in console line configuration mode. Which of the following would place the user in enable mode? (Choose two answers.)</p>
<ul>
<li>
<p>[ ] Using the exit command once</p>
</li>
<li>
<p>[x] Using the end command once</p>
</li>
<li>
<p>[x] Pressing the Ctrl+Z key sequence once</p>
</li>
<li>
<p>[ ] Using the quit command</p>
</li>
</ul>
</li>
</ol>
<h2 id="_2-phan-tich-ve-ethernet-lan-switching" tabindex="-1"><a class="header-anchor" href="#_2-phan-tich-ve-ethernet-lan-switching"><span>2. Phân tích về Ethernet LAN Switching</span></a></h2>
<h3 id="khai-niem-lan-switching" tabindex="-1"><a class="header-anchor" href="#khai-niem-lan-switching"><span>Khái niệm LAN Switching</span></a></h3>
<ol>
<li>
<p>Which of the following statements describes part of the process of how a switch decides to forward a frame destined for a known unicast MAC address ?</p>
<ul>
<li>
<p>[x] It compares the unicast destination address to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[ ] It compares the unicast source address to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[ ] It forwards the frame out all interfaces in the same VLAN except for the incoming
interface.</p>
</li>
<li>
<p>[ ] It compares the destination IP address to the destination MAC address.</p>
</li>
<li>
<p>[ ] It compares the frame’s incoming interface to the source MAC entry in the MAC address table.</p>
</li>
</ul>
</li>
<li>
<p>Which of the following statements describes part of the process of how a LAN switch decides to forward a frame destined for a broadcast MAC address?</p>
<ul>
<li>
<p>[ ] It compares the unicast destination address to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[ ] It compares the unicast source address to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[x] It forwards the frame out all interfaces in the same VLAN except for the incoming
interface.</p>
</li>
<li>
<p>[ ] It compares the destination IP address to the destination MAC address.</p>
</li>
<li>
<p>[ ] It compares the frame’s incoming interface to the source MAC entry in the MAC address table.</p>
</li>
</ul>
</li>
<li>
<p>Which of the following statements best describes what a switch does with a frame destined for an unknown unicast address?</p>
<ul>
<li>
<p>[x] It forwards out all interfaces in the same VLAN except for the incoming interface.</p>
</li>
<li>
<p>[ ] It forwards the frame out the one interface identified by the matching entry in the MAC address table.</p>
</li>
<li>
<p>[ ] It compares the destination IP address to the destination MAC address.</p>
</li>
<li>
<p>[ ] It compares the frame’s incoming interface to the source MAC entry in the MAC address table.</p>
</li>
</ul>
</li>
<li>
<p>Which of the following comparisons does a switch make when deciding whether a new MAC address should be added to its MAC address table?</p>
<ul>
<li>
<p>[ ] It compares the unicast destination address to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[x] It compares the unicast source address to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[ ] It compares the VLAN ID to the bridging, or MAC address, table.</p>
</li>
<li>
<p>[ ] It compares the destination IP address’s ARP cache entry to the bridging, or MAC address, table.</p>
</li>
</ul>
</li>
</ol>
<h3 id="xac-minh-va-phan-tich-ethernet-switching" tabindex="-1"><a class="header-anchor" href="#xac-minh-va-phan-tich-ethernet-switching"><span>Xác minh và phân tích Ethernet Switching</span></a></h3>
<ol start="5">
<li>
<p>A Cisco Catalyst switch has 24 10/100 ports, numbered 0/1 through 0/24. Ten PCs connect to the 10 lowest numbered ports, with those PCs working and sending data over the network. The other ports are not connected to any device. Which of the following answers lists facts displayed by the show interfaces status command?</p>
<ul>
<li>
<p>[ ] Port Ethernet 0/1 is in a connected state.</p>
</li>
<li>
<p>[ ] Port Fast Ethernet 0/11 is in a connected state.</p>
</li>
<li>
<p>[x] Port Fast Ethernet 0/5 is in a connected state.</p>
</li>
<li>
<p>[ ] Port Ethernet 0/15 is in a notconnected state.</p>
</li>
</ul>
</li>
<li>
<p>Consider the following output from a Cisco Catalyst switch</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/04/02-07-45-04-Screenshot 2022-04-02 074455.png"  alt="Screenshot 2022-04-02 074455.png" width="503">
<p>Which of the following answers is true about this switch?</p>
<ul>
<li>
<p>[ ] The output proves that port Gi0/2 connects directly to a device that uses address 02BB.BBBB.BBBB.</p>
</li>
<li>
<p>[ ] The switch has learned three MAC addresses since the switch powered on.</p>
</li>
<li>
<p>[ ] The three listed MAC addresses were learned based on the destination MAC address of frames forwarded by the switch.</p>
</li>
<li>
<p>[x] 02CC.CCCC.CCCC was learned from the source MAC address of a frame that entered port Gi0/3.</p>
</li>
</ul>
</li>
</ol>
<h2 id="_3-cau-hinh-co-ban-ve-quan-li-swith" tabindex="-1"><a class="header-anchor" href="#_3-cau-hinh-co-ban-ve-quan-li-swith"><span>3. Cấu hình cơ bản về quản lí Swith</span></a></h2>
<h3 id="bao-mat-switch-cli" tabindex="-1"><a class="header-anchor" href="#bao-mat-switch-cli"><span>Bảo mật Switch CLI</span></a></h3>
<ol>
<li>
<p>Imagine that you have configured the enable secret command, followed by the enable password command, from the console. You log out of the switch and log back in at the console. Which command defines the password that you had to enter to access privileged mode?</p>
<ul>
<li>
<p>[ ] enable password</p>
</li>
<li>
<p>[x] enable secret</p>
</li>
<li>
<p>[ ] Neither</p>
</li>
<li>
<p>[ ] The password command, if it is configured</p>
</li>
</ul>
</li>
<li>
<p>An engineer wants to set up simple password protection with no usernames for someswitches in a lab, for the purpose of keeping curious coworkers from logging in to the lab switches from their desktop PCs. Which of the following commands would be a useful part of that configuration?</p>
<ul>
<li>
<p>[x] A login vty mode subcommand</p>
</li>
<li>
<p>[ ] A password password console subcommand</p>
</li>
<li>
<p>[ ] A login local vty subcommand</p>
</li>
<li>
<p>[ ] A transport input ssh vty subcommand</p>
</li>
</ul>
</li>
<li>
<p>An engineer had formerly configured a Cisco 2960 switch to allow Telnet access so that the switch expected a password of mypassword from the Telnet user. The engineer then changed the configuration to support Secure Shell. Which of the following commands could have been part of the new configuration? (Choose two answers.)</p>
<ul>
<li>
<p>[ ] A username name secret password vty mode subcommand</p>
</li>
<li>
<p>[x] A username name secret password global configuration command</p>
</li>
<li>
<p>[x] A login local vty mode subcommand</p>
</li>
<li>
<p>[ ] A transport input ssh global configuration command</p>
</li>
</ul>
</li>
</ol>
<h3 id="bat-ip-cho-remote-access" tabindex="-1"><a class="header-anchor" href="#bat-ip-cho-remote-access"><span>Bật IP cho Remote Access</span></a></h3>
<ol start="4">
<li>
<p>An engineer’s desktop PC connects to a switch at the main site. A router at the main site connects to each branch office through a serial link, with one small router and switch at each branch. Which of the following commands must be configured on the branch office switches, in the listed configuration mode, to allow the engineer to telnet to the branch office switches and supply only a password to login? (Choose three
answers.)</p>
<ul>
<li>
<p>[x] The ip address command in interface configuration mode</p>
</li>
<li>
<p>[ ] The ip address command in global configuration mode</p>
</li>
<li>
<p>[ ] The ip default-gateway command in VLAN configuration mode</p>
</li>
<li>
<p>[x] The ip default-gateway command in global configuration mode</p>
</li>
<li>
<p>[ ] The password command in console line configuration mode</p>
</li>
<li>
<p>[x] The password command in vty line configuration mode</p>
</li>
</ul>
</li>
<li>
<p>A Layer 2 switch configuration places all its physical ports into VLAN 2. The IP addressing plan shows that address 172.16.2.250 (with mask 255.255.255.0) is reserved for use by this new LAN switch and that 172.16.2.254 is already configured on the router connected to that same VLAN. The switch needs to support SSH connections into the switch from any subnet in the network. Which of the following commands are part of the required configuration in this case? (Choose two answers.)</p>
<ul>
<li>
<p>[ ] The ip address 172.16.2.250 255.255.255.0 command in interface vlan 1 configuration mode.</p>
</li>
<li>
<p>[x] The ip address 172.16.2.250 255.255.255.0 command in interface vlan 2 configuration mode.</p>
</li>
<li>
<p>[x] The ip default-gateway 172.16.2.254 command in global configuration mode.</p>
</li>
<li>
<p>[ ] The switch cannot support SSH because all its ports connect to VLAN 2, and the IP address must be configured on interface VLAN 1.</p>
</li>
</ul>
</li>
</ol>
<h3 id="cai-đat-huu-ich-trong-lab" tabindex="-1"><a class="header-anchor" href="#cai-đat-huu-ich-trong-lab"><span>Cài đặt hữu ích trong Lab</span></a></h3>
<ol start="6">
<li>
<p>Which of the following line subcommands tells a switch to wait until a show command’s output has completed before displaying log messages on the screen?</p>
<ul>
<li>
<p>[x] logging synchronous</p>
</li>
<li>
<p>[ ] no ip domain-lookup</p>
</li>
<li>
<p>[ ] exec-timeout 0 0</p>
</li>
<li>
<p>[ ] history size 15</p>
</li>
</ul>
</li>
</ol>
<h2 id="_4-cau-hinh-va-xac-minh-switch-interface" tabindex="-1"><a class="header-anchor" href="#_4-cau-hinh-va-xac-minh-switch-interface"><span>4. Cấu hình và xác minh Switch Interface</span></a></h2>
<h3 id="cau-hinh-switching-interfaces" tabindex="-1"><a class="header-anchor" href="#cau-hinh-switching-interfaces"><span>Cấu hình Switching Interfaces</span></a></h3>
<ol>
<li>
<p>Which of the following describes a way to disable IEEE standard autonegotiation on a 10/100 port on a Cisco switch?</p>
<ul>
<li>
<p>[ ] Configure the negotiate disable interface subcommand</p>
</li>
<li>
<p>[ ] Configure the no negotiate interface subcommand</p>
</li>
<li>
<p>[ ] Configure the speed 100 interface subcommand</p>
</li>
<li>
<p>[ ] Configure the duplex half interface subcommand</p>
</li>
<li>
<p>[ ] Configure the duplex full interface subcommand</p>
</li>
<li>
<p>[x] Configure the speed 100 and duplex full interface subcommands</p>
</li>
</ul>
</li>
<li>
<p>In which of the following modes of the CLI could you configure the duplex setting for interface Fast Ethernet 0/5?</p>
<ul>
<li>
<p>[ ] User mode</p>
</li>
<li>
<p>[ ] Enable mode</p>
</li>
<li>
<p>[ ] Global configuration mode</p>
</li>
<li>
<p>[ ] VLAN mode</p>
</li>
<li>
<p>[x] Interface configuration mode</p>
</li>
</ul>
</li>
<li>
<p>A Cisco Catalyst switch connects with its Gigabit0/1 port to an end user’s PC. The end user, thinking the user is helping, manually sets the PC’s OS to use a speed of 1000Mbps and to use full duplex, and disables the use of autonegotiation. The switch’s G0/1 port has default settings for speed and duplex. What speed and duplex settings will the switch decide to use? (Choose two answers.)</p>
<ul>
<li>
<p>[x] Full duplex</p>
</li>
<li>
<p>[ ] Half duplex</p>
</li>
<li>
<p>[ ] 10 Mbps</p>
</li>
<li>
<p>[x] 1000 Mbps</p>
</li>
</ul>
</li>
</ol>
<h3 id="phan-tich-trang-thai-va-thong-ke-switch-interface" tabindex="-1"><a class="header-anchor" href="#phan-tich-trang-thai-va-thong-ke-switch-interface"><span>Phân tích trạng thái và thống kê Switch Interface</span></a></h3>
<ol start="4">
<li>
<p>The output of the show interfaces status command on a 2960 switch shows interface Fa0/1 in a “disabled” state. Which of the following is true about interface Fa0/1? (Choose three answers.)</p>
<ul>
<li>
<p>[x] The interface is configured with the shutdown command.</p>
</li>
<li>
<p>[x] The show interfaces fa0/1 command will list the interface with two status codes of administratively down and line protocol down.</p>
</li>
<li>
<p>[ ] The show interfaces fa0/1 command will list the interface with two status codes of up and down.</p>
</li>
<li>
<p>[x] The interface cannot currently be used to forward frames.</p>
</li>
<li>
<p>[ ] The interface can currently be used to forward frames.</p>
</li>
</ul>
</li>
<li>
<p>Switch SW1 uses its Gigabit 0/1 interface to connect to switch SW2’s Gigabit 0/2 interface. SW2’s Gi0/2 interface is configured with the speed 1000 and duplex full commands. SW1 uses all defaults for interface configuration commands on its Gi0/1 interface. Which of the following are true about the link after it comes up? (Choose two answers.)</p>
<ul>
<li>
<p>[x] The link works at 1000 Mbps (1 Gbps).</p>
</li>
<li>
<p>[ ] SW1 attempts to run at 10 Mbps because SW2 has effectively disabled IEEE standard autonegotiation.</p>
</li>
<li>
<p>[ ] The link runs at 1 Gbps, but SW1 uses half duplex and SW2 uses full duplex.</p>
</li>
<li>
<p>[x] Both switches use full duplex.</p>
</li>
</ul>
</li>
<li>
<p>Switch SW1 connects via a cable to switch SW2’s G0/1 port. Which of the following conditions is the most likely to cause SW1’s late collision counter to continue to increment?</p>
<ul>
<li>
<p>[ ] SW2’s G0/1 has been configured with a shutdown interface subcommand.</p>
</li>
<li>
<p>[ ] The two switches have been configured with different values on the speed interface
subcommand.</p>
</li>
<li>
<p>[ ] A duplex mismatch exists with SW1 set to full duplex.</p>
</li>
<li>
<p>[x] A duplex mismatch exists with SW1 set to half duplex.</p>
</li>
</ul>
</li>
</ol>
</div></template>


