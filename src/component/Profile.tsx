import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "@/component/Profile.module.scss";
type aboutProps = {
  about: {
    title: string;
    content: string;
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
        <p>{about.content}</p>
      </div>
      <Link href="https://webyayasu.com"></Link>
    </div>
  );
};

export default Profile;
