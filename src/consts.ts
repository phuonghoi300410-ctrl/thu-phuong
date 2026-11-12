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
