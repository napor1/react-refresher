import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface LazyImgProps
  extends Omit<ComponentPropsWithoutRef<"img">, "alt" | "slot"> {
  name?: string;
}

export function LazyImg({
  name,
  children,
  ...rest
}: PropsWithChildren<LazyImgProps>) {
  return (
    <>
      <div>{name}</div>
      <img {...rest} />
      {children}
    </>
  );
}
