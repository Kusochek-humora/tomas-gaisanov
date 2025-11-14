import VkIcon from "./VkIcon.vue";
import TelegramIcon from "./TelegramIcon.vue";
import YouTubeIcon from "./YoutubeIcon.vue";
import InstagramIcon from "./InstIcon.vue";
import MailIcon from "./MailIcon.vue";
import XIcon from "./XIcon.vue";
import Ideas from "./Ideas.vue";
import Fun from "./Fun.vue";
import FIlm from "./FIlm.vue";
import Organize from "./Organize.vue";
import Share from "./Share.vue";
import Learn from "./Learn.vue";
import Write from "./Write.vue";
import BorderButton from "./BorderButton.vue";
import Burger from "./Burger.vue";
import TextBtnTrigger from "./TextBtnTrigger.vue";
import VoiceBtnTrigger from "./VoiceBtnTrigger.vue";
import VideoBtnTrigger from "./VideoBtnTrigger.vue";
import None from "./None.vue";

export const icons = {
  vk: VkIcon,
  telegram: TelegramIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  x: XIcon,
  ideas: Ideas,
  fun: Fun,
  film: FIlm,
  organize: Organize,
  share: Share,
  learn: Learn,
  write: Write,
  border_button: BorderButton,
  burger: Burger,
  tab_read: TextBtnTrigger,
  tab_listen: VoiceBtnTrigger,
  tab_watch: VideoBtnTrigger,
  none: None,
} as const;

export type IconName = keyof typeof icons;
export type IconComponent = (typeof icons)[IconName];
export type IconProps = {
  name: IconName | (string & {});
  size?: string;
  color?: string;
  style?: string;
};
