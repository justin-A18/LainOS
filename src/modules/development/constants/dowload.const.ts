export const GUIDE_COMMANDS = [
	'After booting the ISO, select Openbox Session (The LainOS Installer only works in Openbox).',
	"If not using an ethernet cord, login as 'liveuser' with no password, then connect to the internet, and restart the LainOS installer.",
	'Post installation (future versions will automate this):',
	'$ sudo pacman -Syyu   # update package databases and system',
	'$ chsh -s $(which zsh)  # activate custom shell (reboot required)',
	'$ nano  # open LazyVim, then Shift+U to update',
	'$ chmod 755 /home/USERNAME/.config/LazyVim/lua/plugins/script.sh',
	'$ sudo systemctl start ufw',
	'$ sudo systemctl enable ufw',
];