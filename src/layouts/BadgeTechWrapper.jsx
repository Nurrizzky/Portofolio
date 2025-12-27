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

export default function BadgeTechWrapper({ scrollDirection, paddingT = false, paddingB, midBadges = false }) {

   const paddingTop = paddingT ? "pt-5" : "";
   const paddingBottom = paddingB ? "pb-5" : "";
   const midBadge = midBadges ? "py-5" : "";

   const techData = [
      { IconName:"HTML", Icon: HtmlIcon, IconDescription: "HTML-Icon", IconSize: "w-7 h-7 " },
      { IconName:"CSS", Icon: CssIcon, IconDescription: "CSS-Icon", IconSize: "w-7 h-7" },
      { IconName:"Javascript", Icon: JavascriptIcon, IconDescription: "JS-Icon", IconSize: "w-7 h-7" },
      { IconName:"Tailwind", Icon: TailwindcssIcon, IconDescription: "Tailwind-Icon", IconSize: "w-7 h-7" },
      { IconName:"MySQL", Icon: MysqlIcon, IconDescription: "MySQL-Icon", IconSize: "w-7 h-7" },
      { IconName:"Git", Icon: GitIcon, IconDescription: "Git-Icon", IconSize: "w-7 h-7" },
      { IconName:"Notion", Icon: NotionIcon, IconDescription: "Notion-Icon", IconSize: "w-7 h-7" },
      { IconName:"Bootstrap", Icon: BootstrapIcon, IconDescription: "Bootstrap-Icon", IconSize: "w-6 h-6" },
      { IconName:"Laravel", Icon: LaravelIcon, IconDescription: "Laravel-Icon", IconSize: "w-6 h-6" },
      { IconName:"React", Icon: ReactIcon, IconDescription: "React-Icon", IconSize: "w-6 h-6" },
      { IconName:"Github", Icon: GithubIcon, IconDescription: "Github-Icon", IconSize: "w-6 h-6" },
      { IconName:"Postman", Icon: PostmanIcon, IconDescription: "Postman-Icon", IconSize: "w-6 h-6" },
      { IconName:"PHP", Icon: PhpIcon, IconDescription: "PHP-Icon", IconSize: "h-5" },
   ];

   return (

      <div className={`w-full overflow-hidden relative rounded-2xl ${paddingTop} ${paddingBottom} ${midBadge} mask-x-from-80% mask-x-to-100% bg-linear-to-r from-black/0 via-blue-400/10 to-black/0`}>
         <div className={`w-max flex ${scrollDirection}`}>
            <div className={`flex space-x-2 pr-3`}>
               {techData.map((data, index) => {
                  return <BadgeTech key={index} iconName={data.IconName} iconSize={data.IconSize} techIcon={data.Icon} iconDescription={data.IconDescription} />
               })}
            </div>
            <div className={`flex space-x-2 pr-3`}>
               {techData.map((data, index) => {
                  return <BadgeTech key={index} iconName={data.IconName} iconSize={data.IconSize} techIcon={data.Icon} iconDescription={data.IconDescription} />
               })}
            </div>
         </div>
      </div>
         
   )
}