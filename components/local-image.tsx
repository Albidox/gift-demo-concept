import NextImage, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/asset-path";

export function Image({ src, ...props }: ImageProps) {
  return <NextImage src={typeof src === "string" ? assetPath(src) : src} {...props} />;
}
