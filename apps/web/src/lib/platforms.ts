import type { Platform, WechatPublic } from "@/types";

/**
 * 平台引流数据（Mock 占位）
 * 拿到真实链接后，直接替换下方 url 即可。
 */
export const platforms: Platform[] = [
  {
    id: "wechat-video",
    name: "微信视频号",
    label: "全部内容",
    url: "https://channels.weixin.qq.com/user/placeholder", // ← 待替换
    icon: "video",
    color: "cool",
  },
  {
    id: "douyin",
    name: "抖音",
    label: "全部内容",
    url: "https://www.douyin.com/user/placeholder", // ← 待替换
    icon: "music",
    color: "cool",
  },
  {
    id: "bilibili",
    name: "哔哩哔哩",
    label: "财务 AI",
    url: "https://space.bilibili.com/placeholder", // ← 待替换
    icon: "tv",
    color: "cool",
  },
  {
    id: "xiaohongshu",
    name: "小红书",
    label: "生活旅游",
    url: "https://www.xiaohongshu.com/user/placeholder", // ← 待替换
    icon: "book",
    color: "warm",
  },
];

export const wechatPublic: WechatPublic = {
  name: "微信公众号",
  label: "扫码关注",
  qrcodePath: "/images/qrcode-wechat.svg", // ← 待替换为真实二维码
  color: "warm",
};
