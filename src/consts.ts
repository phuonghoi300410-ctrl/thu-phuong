// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Thu Phương';
export const SITE_DESCRIPTION =
	'Blog của Thu Phương: ghi chép cho ba mẹ đồng hành cùng con thời AI, chuyện học cùng con và cách dùng AI cho gọn việc.';

// Chủ đề của blog. Mỗi bài gắn một chủ đề qua trường `topic` (dùng đúng `slug`).
export const TOPICS = [
	{ slug: 'cha-me-va-ai', name: 'Cha mẹ và AI' },
	{ slug: 'hoc-cung-con', name: 'Học cùng con' },
	{ slug: 'lam-viec-voi-ai', name: 'Làm việc với AI' },
	{ slug: 'ghi-chep', name: 'Ghi chép' },
] as const;

export function topicOf(slug?: string) {
	const i = TOPICS.findIndex((t) => t.slug === slug);
	return i < 0 ? undefined : { ...TOPICS[i], tile: `t${i + 1}` };
}

// Kênh xã hội của Thu Phương, hiện ở chân trang và trang Giới thiệu.
export const SOCIAL_LINKS = [
	{ label: 'Facebook', href: 'https://www.facebook.com/thu.phuong.107745' },
	{ label: 'GitHub', href: 'https://github.com/phuonghoi300410-ctrl/' },
];

// Ứng dụng sách giáo khoa số hoá phục vụ học tập
export const SGK_APPS = [
	{
		grade: 'Lớp 6',
		title: 'Toán 6 · Kết nối tri thức',
		description: 'Ứng dụng số hoá sách giáo khoa Toán lớp 6, hỗ trợ học sinh tự học, tra cứu lý thuyết và thực hành bài tập trực quan.',
		href: 'https://app-toan-lop-6.vercel.app/',
		badge: 'SGK Số',
		version: 'Toán 6',
		highlight: 'Số học & Hình học trực quan',
	},
	{
		grade: 'Lớp 7',
		title: 'Toán 7 · Kết nối tri thức',
		description: 'Ứng dụng tương tác Toán lớp 7 theo chương trình mới, tích hợp kiến thức trọng tâm, bài tập và minh hoạ hình học sinh động.',
		href: 'https://app-toan-lop-7-blond.vercel.app/',
		badge: 'SGK Số',
		version: 'Toán 7',
		highlight: 'Đại số & Tam giác bằng nhau',
	},
	{
		grade: 'Lớp 8',
		title: 'Toán 8 · Kết nối tri thức',
		description: 'Ứng dụng tra cứu và học tập Toán lớp 8, hệ thống lý thuyết, hằng đẳng thức đáng nhớ và định lý hình học dễ hiểu.',
		href: 'https://app-toan-lop-8.vercel.app/',
		badge: 'SGK Số',
		version: 'Toán 8',
		highlight: 'Đa thức & Tứ giác nâng cao',
	},
] as const;
