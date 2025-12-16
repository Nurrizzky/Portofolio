import HtmlIcon from "../assets/icons/html.png";
import CssIcon from "../assets/icons/css.png";
import TailwindcssIcon from "../assets/icons/tailwindcss.svg";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import JavascriptIcon from "../assets/icons/javascript.png";
import PhpIcon from "../assets/icons/php.png";
import LaravelIcon from "../assets/icons/laravel.png";
import ReactIcon from "../assets/icons/react.svg";
import GitIcon from "../assets/icons/git.png";
import GithubIcon from "../assets/icons/github.webp";
import NotionIcon from "../assets/icons/notion.png";
import PostmanIcon from "../assets/icons/postman.svg";
import MysqlIcon from "../assets/icons/mysql.svg";

import BadgeTech from "../components/BadgeTech/BadgeTech";

export default function BadgeTechWrapper({ scrollDirection, moreSpace= false }) {

   const space = moreSpace ? "ml-30" : "";

   const techData = [
      { IconName:"HTML", Icon: HtmlIcon, IconDescription: "HTML-Icon", IconSize: "w-8 h-8" },
      { IconName:"CSS", Icon: CssIcon, IconDescription: "CSS-Icon", IconSize: "w-8 h-8" },
      { IconName:"Javascript", Icon: JavascriptIcon, IconDescription: "JS-Icon", IconSize: "w-8 h-8" },
      { IconName:"PHP", Icon: PhpIcon, IconDescription: "PHP-Icon", IconSize: "w-8" },
      { IconName:"Tailwind", Icon: TailwindcssIcon, IconDescription: "Tailwind-Icon", IconSize: "w-8 h-8" },
      { IconName:"Bootstrap", Icon: BootstrapIcon, IconDescription: "Bootstrap-Icon", IconSize: "w-9 h-9" },
      { IconName:"Laravel", Icon: LaravelIcon, IconDescription: "Laravel-Icon", IconSize: "w-7 h-7" },
      { IconName:"React", Icon: ReactIcon, IconDescription: "React-Icon", IconSize: "w-7 h-7" },
      { IconName:"MySQL", Icon: MysqlIcon, IconDescription: "MySQL-Icon", IconSize: "w-8 h-8" },
      { IconName:"Git", Icon: GitIcon, IconDescription: "Git-Icon", IconSize: "w-8 h-8" },
      { IconName:"Github", Icon: GithubIcon, IconDescription: "Github-Icon", IconSize: "w-7 h-7" },
      { IconName:"Postman", Icon: PostmanIcon, IconDescription: "Postman-Icon", IconSize: "w-7 h-7" },
      { IconName:"Notion", Icon: NotionIcon, IconDescription: "Notion-Icon", IconSize: "w-8 h-8" },
   ];

   return (
      <div className="w-full overflow-hidden relative rounded-2xl py-5 bg-linear-to-r from-black/0 via-white/20 to-black/0">
         <div className="absolute h-full left-0 top-0 w-1/5 bg-linear-to-r from-dark-light to-dark-light/10 z-10" />
         <div className="absolute h-full right-0 bottom-0 w-1/5 bg-linear-to-r from-dark-light/10 to-dark-light z-10" />
         <div className={`w-max flex ${scrollDirection}`}>
            <div className={`flex space-x-3 pr-3 ${space}`}>
               {techData.map((data, index) => {
                  return <BadgeTech key={index} iconName={data.IconName} iconSize={data.IconSize} techIcon={data.Icon} iconDescription={data.IconDescription}>
                  </BadgeTech>
               })}
            </div>
            <div className={`flex space-x-3 pr-3`}>
               {techData.map((data, index) => {
                  return <BadgeTech key={index} iconName={data.IconName} iconSize={data.IconSize} techIcon={data.Icon} iconDescription={data.IconDescription}>
                  </BadgeTech>
               })}
            </div>
         </div>
      </div>
   )
}