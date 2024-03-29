import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import arrayShuffle from "array-shuffle";

function About() {
  return (
    <Layout>
      <Friends />
      <p style={{ paddingLeft: '20px' }}>The list is random. try to refresh the page.</p>
    </Layout>
  );
}

interface FriendData {
  pic: string;
  name: string;
  intro: string;
  url: string;
  note: string;
}

function githubPic(name: string) {
  return `https://github.com/${name}.png`;
}

var friendsData: FriendData[] = [
  {
    pic: githubPic("lideming"),
    name: "lideming",
    intro: "Building random things with Deno, Node and .NET Core.",
    url: "https://yuuza.net/",
    note: "我的大学同学，某些时候是同事，也有时是队友。全栈/APEX/R6/CSGO/BFV，有些懒。",
  },
  {
    pic: githubPic("papercube"),
    name: "PaperCube",
    intro: "一个正在学习原理内容的软件开发者，睡大觉能手和前•算法竞赛生",
    url: "https://github.com/papercube",
    note: "我的初中高中同学，我在玩泥巴的时候他就在写java了；语言学砖家（各种意义上的）。我们常打MC。",
  },
  {
    pic: githubPic("VoidmatrixHeathcliff"),
    name: "Voidmatrix",
    intro: "积淀，分享，传承",
    url: "http://voidmatrix.xyz/",
    note: "素未谋面的大佬，轮子从galgame引擎造到前端，雨露均沾。我们假期一起打MC。",
  },
  {
    pic: githubPic("redhat123456"),
    name: "Tanger",
    intro: "赶紧学习",
    url: "https://tanger.ltd/",
    note: "隔壁学院（数学与计算科学）基地的负责人。常见面交流。",
  },
  {
    pic: githubPic("Therainisme"),
    name: "Therainisme",
    intro: "寄忆犹新",
    url: "https://notebook.therainisme.com/",
    note: "雨神，一出门就下雨。我大学期间的同事，任我社2019级多媒体部部长。网站开发运维专家。",
  },
  {
    pic: githubPic("coronaPolvo"),
    name: "coronaPolvo",
    intro: "life is but a span, I use python",
    url: "https://blog.keter.top/",
    note: "科协F4的成员。我大学期间的同事，任我社2019级软件部部长。主攻方向是神经网络攻击。他找女朋友之前我们常一起吃饭。",
  },
  {
    pic: githubPic("Zerorains"),
    name: "Zerorains",
    intro: "life is but a span, I use python",
    url: "https://blog.zerorains.top",
    note: "科协F4的成员。科协恶霸(x)。主攻方向是基于深度学习技术图像分割。他不太喜欢看我抽卡。",
  },
  {
    pic: githubPic("PommesPeter"),
    name: "PommesPeter",
    intro: "I want to be strong. But it seems so hard.",
    url: "https://blog.pommespeter.com/",
    note: "科协F4的成员。我大学期间的同事，任我社2019级软件部副部长。主攻方向是基于深度学习技术的图像低照度增强。他找女朋友之前我们常一起吃饭。",
  },
  {
    pic: githubPic("breezeshane"),
    name: "Breeze Shane",
    intro: "一个专注理论但学不懂学不会的锈钢废物，但是他很擅长产出Bug，可能是因为他体表有源石结晶分布，但也可能仅仅是因为他是Bug本体。",
    url: "https://breezeshane.github.io/",
    note: "一代传奇，手撸GAN的老单。",
  },
  {
    pic: githubPic("AndPuQing"),
    name: "PuQing",
    intro: "intro * new",
    url: "https://github.com/AndPuQing",
    note: "啊对对对",
  },
];

function Friends() {
  const [friends, setFriends] = useState<FriendData[]>(friendsData);
  useEffect(() => {
    setFriends(arrayShuffle(friends))
  }, []);
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  useEffect(() => {
    // After `current` change, set a 300ms timer making `previous = current` so the previous card will be removed.
    const timer = setTimeout(() => {
      setPrevious(current);
    }, 300);

    return () => {
      // Before `current` change to another value, remove (possibly not triggered) timer, and make `previous = current`.
      clearTimeout(timer);
      setPrevious(current);
    };
  }, [current]);
  return (
    <div className="friends" lang="zh-cn">
      <div style={{ position: "relative" }}>
        <div className="friend-columns">
          {/* Big card showing current selected */}
          <div className="friend-card-outer">
            {[
              previous != current && (
                <FriendCard key={previous} data={friends[previous]} fadeout />
              ),
              <FriendCard key={current} data={friends[current]} />,
            ]}
          </div>

          <div className="friend-list">
            {friends.map((x, i) => (
              <div
                key={x.name}
                className={clsx("friend-item", {
                  current: i == current,
                })}
                onClick={() => setCurrent(i)}
              >
                <img src={x.pic} alt="user profile photo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FriendCard(props: { data: FriendData; fadeout?: boolean }) {
  const { data, fadeout = false } = props;
  return (
    <div className={clsx("friend-card", { fadeout })}>
      <div className="card">
        <div className="card__image">
          <img
            src={data.pic}
            alt="User profile photo"
            title="User profile photo"
          />
        </div>
        <div className="card__body">
          <h2>{data.name}</h2>
          <p>
            <big>{data.intro}</big>
          </p>
          <p>
            <small>Comment : {data.note}</small>
          </p>
        </div>
        <div className="card__footer">
          <a href={data.url} className="button button--primary button--block">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;