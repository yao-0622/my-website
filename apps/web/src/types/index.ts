export type AccentColor = "warm" | "cool";

export type PlatformIconType = "video" | "music" | "tv" | "book";

export interface Platform {
  id: string;
  name: string;
  label: string;
  url?: string;
  icon: PlatformIconType;
  color: AccentColor;
}

export interface WechatPublic {
  name: string;
  label: string;
  qrcodePath: string;
  color: AccentColor;
}
