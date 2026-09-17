import type { Platform, WechatPublic } from "@/types";

/**
 * 平台引流数据（Mock 占位）
 * 拿到真实链接后，直接替换下方 url 即可。
 */
export const platforms: Platform[] = [
  {
    id: "wechat-video",
    name: "微信视频号",
    label: "搜索『曜-123』",
    // 无直达链接，置灰展示（不可点击）
    icon: "video",
    color: "cool",
  },
  {
    id: "douyin",
    name: "抖音",
    label: "搜索『曜』",
    url: "https://v.douyin.com/7FOepaz8KpA/ 3@2.com :1pm", // ← 待替换
    icon: "music",
    color: "cool",
  },
  {
    id: "bilibili",
    name: "哔哩哔哩",
    label: "财务 AI",
    url: "https://b23.tv/LfJi4zh", // ← 待替换
    icon: "tv",
    color: "cool",
  },
  {
    id: "xiaohongshu",
    name: "小红书",
    label: "生活旅游",
    url: "https://xhslink.cn/o/5Oux61qo5OT", // ← 待替换
    icon: "book",
    color: "warm",
  },
];

export const wechatPublic: WechatPublic = {
  name: "微信公众号",
  label: "扫码关注曜",
  qrcodePath: "/images/qrcode-wechat.png", // 改成你图片的真实文件名和后缀
  color: "warm",
};
