import React from "react";
import Image from "next/image";

import "@/sass/OtherPhotos.scss";
import Heading from "./heading";

export default function OtherPhotos({
  catImageInfo,
}: Readonly<{
  catImageInfo: Array<string>;
}>) {
  const imageList = catImageInfo.map((imageInfo) => (
    <div key={imageInfo} className="photos__photo">
      <Image src={imageInfo} alt="cat" width={278} height={278} />
    </div>
  ));
  return (
    <section className="photos">
      <Heading type="small">Other photos</Heading>
      <div className="photos__grid">{imageList}</div>
    </section>
  );
}
