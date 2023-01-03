import { gsap } from "gsap";

export const btnAdd = (e) => {
    gsap.fromTo(
        e.target,
        {
            backgroundColor: " #00DBDE",
            backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
        },
        {
            backgroundImage: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
            repeat: -1,
            yoyo: true,
            duration: 3,
            backgroundColor: "#21D4FD",
        }
    )
}
