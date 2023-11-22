import Linkedin from "@/assets/Social imgs/linkedin.svg";
import GitHub from "@/assets/Social imgs/github.svg";
import Instragam from "@/assets/Social imgs/instagram.svg";

import LinkedinDark from "@/assets/Social imgs/linkedinDark.svg";
import GitHubDark from "@/assets/Social imgs/githubDark.svg";
import InstagramDark from "@/assets/Social imgs/instagramDark.svg";

const linkedin = {
    img: Linkedin,
    link: "https://www.linkedin.com/in/leonel-saliol/",
    dark: LinkedinDark,
};

const git = {
    img: GitHub,
    link: "https://github.com/LeoSaliol",
    dark: GitHubDark,
};

const ig = {
    img: Instragam,
    link: "https://www.instagram.com/leosaliol_/",
    dark: InstagramDark,
};

export const socialData = [linkedin, git, ig];
