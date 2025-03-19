document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 불러오기

  // header
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header", // 어느 영역에서 스크롤트리거를 발생시킬건지
        start: "100% 0%", // 첫번째 값은 요소의 top 위치, 두번째 값은 뷰포트의 top위치 이 두선이 만나면 애니메이션 동작
        end: "100% 5%", // 첫번째 값은 요소의 bottom 위치, 두번째 값은 뷰포트의 50%위치 이 두선이 만나면 애니메이션 동작
        scrub: 1, // 되감기+움직임을 부드럽게 만들어줌(숫자가 높을수록 부드러운 느낌)
        duration: 0.3, // 요소가 변할때 소요되는 시간
        // markers: true,
      },
    })
    .fromTo(
      "header",
      {
        // 시작할때
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderBottomColor: "rgba(255, 255, 255, 0)",
      },
      {
        // 끝날때
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderBottomColor: "rgb(128, 255, 219)",
      }
    );

  // header h1
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        start: "100% 0%",
        end: "100% 5%",
        scrub: 1,
        duration: 0.3,
        // markers: true,
      },
    })
    .to("h1", {
      // 끝날때 모습
      color: "rgb(128, 255, 219)",
      ease: "power1.out",
    })
    .to("header ul li", {
      // 끝날때 모습
      color: "rgb(128, 255, 219)",
      ease: "power1.out",
    });

  // sec1
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec1",
        start: "80px 0%",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".sec1 h2",
      {
        // 시작할때
        opacity: 1,
        y: 0,
        scale: 1.2,
        ease: "linear",
      },
      {
        // 끝날때
        opacity: 0,
        y: 300,
        scale: 1,
        duration: 1,
      }
    );

  // sec2
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        duration: 0.3,
        // markers: true,
      },
    })
    .to(
      ".sec2 ul li:nth-child(1)",
      {
        // 끝날때 모양
        y: 0,
        ease: "power.out",
      },
      0.2 // 지연시간
    )
    .to(
      ".sec2 ul li:nth-child(2)",
      {
        // 끝날때 모양
        y: 0,
        ease: "power.out",
      },
      0.4 // 지연시간
    )
    .to(
      ".sec2 ul li:nth-child(3)",
      {
        // 끝날때 모양
        y: 0,
        ease: "power.out",
      },
      0.6 // 지연시간
    )
    .to(
      ".sec2 ul li:nth-child(4)",
      {
        // 끝날때 모양
        y: 0,
        ease: "power.out",
      },
      0.8 // 지연시간
    );

  // sec3 - .circle
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 50%",
        end: "30% 0%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".circle",
      {
        // 시작
        width: 0,
        height: 0,
        duration: 10,
        ease: "elastic",
        top: "3%",
      },
      {
        // 끝
        width: "2500px",
        height: "2500px",
        duration: 10,
        // ease: "elastic",
        top: "10%",
      },
      0
    );

  // sec3 - .textbox
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3 .textbox",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      ".textbox",
      {
        // 시작
        top: "60%",
        duration: 5,
        ease: "elastic",
        opacity: 0,
      },
      {
        // 끝
        top: "40%",
        duration: 5,
        ease: "none",
        opacity: 1,
      },
      0
    );
});
