import React, { useState, useEffect, useRef } from 'react';
import styles from './index.less';
import anime from 'animejs';
import { request } from 'umi';

const CardFlex = () => {
  const card1 = useRef<any>();
  const card2 = useRef<any>();
  const card3 = useRef<any>();
  const card4 = useRef<any>();
  const animationCard1 = React.useRef<any>(null);
  const animationCard2 = React.useRef<any>(null);
  const animationCard3 = React.useRef<any>(null);
  const animationCard4 = React.useRef<any>(null);
  const animationSvgLogin = React.useRef<any>(null);
  const [animeList, setAnimeList] = useState<any>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    animationSvgLogin.current = anime.timeline({ direction: 'normal' });
    const startAnime = [
      {
        targets: `.${card1?.current?.className || ''}`,
        duration: 2000,
        rotate: [-120, 0],
        translateX: [-4000, 0],
        translateY: [-4000, 0],
        scale: [2, 1],
        easing: 'easeInOutExpo',
      },
      {
        targets: `.${card2?.current?.className || ''}`,
        duration: 2300,
        rotate: [-135, 0],
        translateX: [-4000, 0],
        translateY: [-4000, 0],
        scale: [2, 1],
        easing: 'easeInOutExpo',
      },
      {
        targets: `.${card3?.current?.className || ''}`,
        duration: 2600,
        rotate: [-150, 0],
        translateX: [-4000, 0],
        translateY: [-4000, 0],
        scale: [2, 1],
        easing: 'easeInOutExpo',
      },
      {
        targets: `.${card4?.current?.className || ''}`,
        duration: 2900,
        rotate: [-165, 0],
        translateX: [-4000, 0],
        translateY: [-4000, 0],
        scale: [2, 1],
        easing: 'easeInOutExpo',
      },
    ];
    setAnimeList(startAnime);
    animationCard1.current = anime(startAnime[0]);
    animationCard2.current = anime(startAnime[1]);
    animationCard3.current = anime(startAnime[2]);
    animationCard4.current = anime(startAnime[3]);
  }, []);


  const offsetTime = (delta: number) => {
    setOffset(offset + delta);
    return offset;
  };

  const reverse = () => {
    const reverse = JSON.parse(JSON.stringify(animeList));
    reverse.forEach((anime: any) => {
      anime.rotate = [anime.rotate[1], anime.rotate[0]];
      anime.translateX = [anime.translateX[1], anime.translateX[0]];
      anime.translateY = [anime.translateY[1], anime.translateY[0]];
      anime.scale = [anime.scale[1], anime.scale[0]];
    });
    console.log(reverse);
    animationCard1.current = anime(reverse[0]);
    animationCard2.current = anime(reverse[1]);
    animationCard3.current = anime(reverse[2]);
    animationCard4.current = anime(reverse[3]);
    animationCard1.current.play();
    animationCard2.current.play();
    animationCard3.current.play();
    animationCard4.current.play();
  };

  const login = () => {
    animationSvgLogin.current
      .add({
        targets: "#svg",
        transform: {
          value: ["rotate(90)", "rotate(0)"],
          duration: 500,
          easing: "easeInOutQuad"
        },
        offset: offsetTime(300)
      })
      .add({
        targets: "#path1",
        d: {
          value:
            "m 50.37537,0 c 24.48828,0 49.62463,20.277233 49.62463,50 l 0,0 c 0,23.39517 -18.94573,50 -50,50 -31.05427,0 -50,-25.001 -50,-50 l 0,0 c 0,-25.05122 20.07871,-50 50.37537,-50 z ",
          duration: 500,
          easing: "easeInOutQuad"
        },
        fill: {
          value: "#FFFFFF",
          duration: 500,
          easing: "easeInOutQuad"
        },
        offset: offsetTime(0)
      })
      .add({
        targets: "#path2",
        d: {
          value: [
            "m 25.731,41.735 c 1.59412,2.26533 4.60067,2.75688 6.666,0.911 0,0 16.623493,-15.289 17.97837,-15.289 1.354877,0 17.97163,15.279 17.97163,15.279 2.06561,1.84559 5.07106,1.36492 6.67,-0.897 1.59895,-2.26192 0.6802,-4.85572 -1.49663,-6.56869 0,0 -21.70825,-18.213 -23.145,-18.213 -1.43675,0 -23.133,18.111 -23.133,18.111 -2.18108,1.70758 -3.10548,4.40137 -1.51137,6.66669 z",
            "m 26.079342,19.022245 c 1.674171,2.206828 4.110842,1.439263 6.798376,0.768441 0,0 8.798068,-4.847765 17.640988,-4.789875 8.84292,0.0579 17.696452,4.768123 17.696452,4.768123 2.687038,0.672849 5.139406,1.385956 6.79096,-0.837839 1.651563,-2.223794 1.413919,-5.905362 -1.239632,-6.700029 0,0 -11.73023,-7.148615 -23.24778,-7.230255 -11.51755,-0.0816 -23.270916,7.208503 -23.270916,7.208503 -2.655026,0.789794 -2.842608,4.606112 -1.168448,6.812931 z"
          ],
          duration: 500,
          easing: "easeInOutQuad"
        },
        fill: {
          value: "#1890ff",
          duration: 500,
          easing: "easeInOutQuad"
        },
        offset: offsetTime(500)
      })
      .add({
        targets: "#svg",
        transform: {
          value: ["rotate(0)", "rotate(1080)"],
          duration: 3000,
          easing: "easeInOutQuad"
        },
        offset: offsetTime(3000)
      })
      .add({
        targets: "#path2",
        d: {
          value: [
            "m 26.079342,19.022245 c 1.674171,2.206828 4.110842,1.439263 6.798376,0.768441 0,0 8.798068,-4.847765 17.640988,-4.789875 8.84292,0.0579 17.696452,4.768123 17.696452,4.768123 2.687038,0.672849 5.139406,1.385956 6.79096,-0.837839 1.651563,-2.223794 1.413919,-5.905362 -1.239632,-6.700029 0,0 -11.73023,-7.148615 -23.24778,-7.230255 -11.51755,-0.0816 -23.270916,7.208503 -23.270916,7.208503 -2.655026,0.789794 -2.842608,4.606112 -1.168448,6.812931 z",
            "m 21.522531,46.814287 c -2.155663,1.739544 -2.017039,4.585829 -0.255669,6.723691 0,0 20.526021,19.871468 21.676674,20.421006 1.150652,0.549537 36.099893,-34.871342 36.099893,-34.871342 1.713503,-2.176424 1.866279,-5.13091 -0.247851,-6.920703 -2.11413,-1.789791 -5.012692,-1.397803 -6.686235,0.809492 0,0 -28.798856,28.632137 -29.498398,28.297812 -0.699543,-0.334321 -14.352672,-13.40414 -14.352672,-13.40414 -1.656876,-2.219833 -4.580081,-2.795358 -6.735742,-1.055816 z"
          ],
          duration: 500,
          easing: "easeInOutQuad"
        },
        fill: {
          value: ["#1890ff", "#1890ff"],
          duration: 500,
          easing: "easeInOutQuad"
        },
        offset: offsetTime(200)
      })
    // .add({
    //   targets: "#svg",
    //   transform: {
    //     value: ["scale(1)", "scale(0)"],
    //     duration: 800,
    //     easing: "easeInOutQuad"
    //   },
    //   offset: offsetTime(0)
    // })
    // .add({
    //   targets: "#path2",
    //   d: {
    //     value: [
    //       "m 25.731,41.735 c 1.59412,2.26533 4.60067,2.75688 6.666,0.911 0,0 16.623493,-15.289 17.97837,-15.289 1.354877,0 17.97163,15.279 17.97163,15.279 2.06561,1.84559 5.07106,1.36492 6.67,-0.897 1.59895,-2.26192 0.6802,-4.85572 -1.49663,-6.56869 0,0 -21.70825,-18.213 -23.145,-18.213 -1.43675,0 -23.133,18.111 -23.133,18.111 -2.18108,1.70758 -3.10548,4.40137 -1.51137,6.66669 z",
    //       "m 26.079342,19.022245 c 1.674171,2.206828 4.110842,1.439263 6.798376,0.768441 0,0 8.798068,-4.847765 17.640988,-4.789875 8.84292,0.0579 17.696452,4.768123 17.696452,4.768123 2.687038,0.672849 5.139406,1.385956 6.79096,-0.837839 1.651563,-2.223794 1.413919,-5.905362 -1.239632,-6.700029 0,0 -11.73023,-7.148615 -23.24778,-7.230255 -11.51755,-0.0816 -23.270916,7.208503 -23.270916,7.208503 -2.655026,0.789794 -2.842608,4.606112 -1.168448,6.812931 z"
    //     ],
    //     duration: 700,
    //     easing: "easeInOutQuad"
    //   },
    //   fill: {
    //     value: "#1890ff",
    //     duration: 700,
    //     easing: "easeInOutQuad"
    //   },
    //   offset: offsetTime(10)
    // })
    // .add({
    //   targets: "#svg",
    //   transform: {
    //     value: ["rotate(180) scale(1)", "rotate(180) scale(0)"],
    //     duration: 10,
    //     easing: "easeInOutQuad"
    //   },
    //   offset: offsetTime(10)
    // });
    animationSvgLogin.current.finished.then(() => {
      reverse();
    });
  };

  return (
    <div>
      <div ref={card1} className={styles.card1} />
      <div ref={card2} className={styles.card2} />
      <div ref={card3} className={styles.card3} />
      <div ref={card4} className={styles.card4} >
        <div>
          <input type="text" className={styles.loginAccount} />
          <input type="password" className={styles.loginPassword} />
        </div>

        <svg onClick={login} className={styles.svgLogin} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100" id="svg" transform="rotate(90)">
          <g id="group">
            <path
              className={styles.pathStyle}
              d="m 50.37537,16.95731 c 2.77,0 5,2.23 5,5 l 0,48.5863 c 0,2.77 -2.23,5 -5,5 -2.77,0 -5,-2.23 -5,-5 l 0,-48.5863 c 0,-2.77 2.23,-5 5,-5 z"
              id="path1" />
            <path
              className={styles.pathStyle}
              d="m 25.731,41.735 c 1.59412,2.26533 4.60067,2.75688 6.666,0.911 0,0 16.623493,-15.289 17.97837,-15.289 1.354877,0 17.97163,15.279 17.97163,15.279 2.06561,1.84559 5.07106,1.36492 6.67,-0.897 1.59895,-2.26192 0.6802,-4.85572 -1.49663,-6.56869 0,0 -21.70825,-18.213 -23.145,-18.213 -1.43675,0 -23.133,18.111 -23.133,18.111 -2.18108,1.70758 -3.10548,4.40137 -1.51137,6.66669 z"
              id="path2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
export default CardFlex;