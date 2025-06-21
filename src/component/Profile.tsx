import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "@/component/Profile.module.scss";
type aboutProps = {
  about: {
    title: string;
    content: string;
    imageUrl: string;
  };
};

const Profile = ({ about }: aboutProps) => {
  return (
    <div className={style.profile}>
      <h2>{about.title}</h2>
      <div className={style.profileItem}>
        <div className={style.img}>
          <Image
            src={about.imageUrl}
            alt={about.title}
            width={300}
            height={200}
          />
        </div>
        <div className={style.text}>
          <p>{about.content}</p>
          <Link href="https://webyayasu.com">プロフィールへ</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
